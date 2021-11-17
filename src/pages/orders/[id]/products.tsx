import { FC, useEffect } from 'react';
import Head from 'next/head';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import {
  OrderState,
  getProducts,
  setSortingProducts,
  setLoading,
} from 'reducers/orderSlice';
import { useRouter } from 'next/router';

import ProductsSearch from 'components/orderPage/products/productsSearch/productsSearch';
import CounterProducts from 'components/orderPage/products/counterProducts';
import ShipmnetLayout from 'components/orderPage/shipmentLayout';
import Basket from 'components/orderPage/products/basket';
import {
  productsColumns as columns,
  productsColumnsChanges as columnsChanges,
} from 'components/orderPage/products/productsColumns';
import Loader from 'components/Loader/Loader';
import Pagination from 'ui-kit/pagination/pagination';
import MobileCard from 'ui-kit/authZone/mobileCard';
import TabletCard from 'ui-kit/authZone/tableCard';
import { ChangeSortType } from 'types/table';
import Table from 'ui-kit/table/table';
import { typeProducts } from 'types/order-shipment';
import { IColumnsData } from 'types/table';

import styled from 'styled/styled';
import { UserState } from 'reducers/userSlice';

const StyledLoading = styled.div`
  position: relative;
  min-height: 400px;
`;

const StyledMargin = styled.div`
  margin-right: 40px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    margin-right: 0px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-right: 0px;
  }
`;

const StyledProducts = styled.div`
  margin-bottom: 88px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 75px;
  }
  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 166px;
  }

  .pagination {
    margin-top: 60px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 40px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-top: 60px;
    }
  }

  .products-search__input {
    margin-bottom: 20px;
    height: 18px;
    display: flex;
    align-items: baseline;
    width: 290px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 10px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: 100%;
    }
  }
`;

const Products: FC & { Layout: FC } = () => {
  const { isFallback } = useRouter();
  const {
    products,
    order,
    orderStatus,
    filterProducts,
    sortingProducts,
    loading,
    pagination,
  } = useSelector<RootState, OrderState>(({ order }) => order);

  const { isCustomer } = useSelector<RootState, UserState>(({ user }) => user);

  const changePage = ({ selected }: { selected: number }) => {
    dispatch(getProducts({ page: selected + 1 }));
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
  }, []);

  useEffect(() => {
    if (order) {
      dispatch(getProducts());
    }
  }, [order, filterProducts, sortingProducts]);

  const changeSort = async (param: string) => {
    await dispatch(setSortingProducts(param));
  };

  const sort: ChangeSortType = ({ accessor, sortOrder }) => {
    switch (accessor) {
      case 'vendorCode':
        return changeSort(`vendorcode|${sortOrder}`);
      case 'name':
        return changeSort(`name|${sortOrder}`);
      case 'quantity':
        return changeSort(`quantity|${sortOrder}`);
      case 'price':
        return changeSort(`price|${sortOrder}`);
      case 'total':
        return changeSort(`totalndssum|${sortOrder}`);
      default:
        return changeSort('id');
    }
  };

  const limitOrders = Boolean(
    (pagination?.totalFilteredCount || 30) >
      Number(process.env.NEXT_PUBLIC_SVETA_API_LIMIT_PRODUCTS),
  );
  const lengthOrders = Boolean(products.length);
  const conditionDraft = orderStatus === 'Черновик' && isCustomer;

  function returnCounter<T, U>(value: T, counter: U): T | U {
    if (conditionDraft) {
      return counter;
    } else {
      return value;
    }
  }

  const getCounter = (
    value: number,
    id: number,
    minQuantity: number,
    pickingQuantum: number,
  ) =>
    returnCounter<number, JSX.Element>(
      value,
      <CounterProducts
        quantity={value}
        id={id}
        minQuantity={minQuantity}
        pickingQuantum={pickingQuantum}
      />,
    );

  const header = returnCounter<
    IColumnsData<typeProducts>[],
    IColumnsData<typeProducts>[]
  >(columns, columnsChanges);

  if (!isFallback && !products) return <h1>Извините, произошла ошибка.</h1>;
  return (
    <StyledProducts>
      <Head>
        <title>Заявка товары</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductsSearch className="products-search__input" />
      {loading && !sortingProducts ? (
        <StyledLoading>
          <Loader />
        </StyledLoading>
      ) : (
        <StyledMargin>
          <Table<typeProducts>
            columns={header}
            data={products}
            changeSort={sort}
            onRowHover={({ id, isHovered }) =>
              conditionDraft ? (
                <Basket idOrder={id} isHovered={isHovered} />
              ) : (
                <></>
              )
            }
            getKey={({ id }) => id}
            tabletCard={(row) => (
              <TabletCard
                row={row}
                key={row.id}
                isCustomer={isCustomer}
                getCounter={getCounter}
                isCorrection={conditionDraft}
              />
            )}
            mobileCard={(row) => (
              <MobileCard
                row={row}
                key={row.id}
                isCustomer={isCustomer}
                getCounter={getCounter}
                isCorrection={conditionDraft}
              />
            )}
          />
        </StyledMargin>
      )}
      {limitOrders && lengthOrders && (
        <Pagination
          className="pagination"
          pageCount={pagination?.lastPage || 1}
          forcePage={pagination?.page || 1}
          onPageChange={changePage}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
        />
      )}
    </StyledProducts>
  );
};

Products.Layout = ShipmnetLayout;

export default Products;
