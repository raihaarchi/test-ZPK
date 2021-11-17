import { FC, useEffect } from 'react';
import Head from 'next/head';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import {
  ShipmentState,
  getProducts,
  setSortingProducts,
  setLoading,
} from 'reducers/shipmentSlice';

import { useRouter } from 'next/router';
import { typeProducts } from 'types/order-shipment';

import ProductsSearch from 'components/shipmentPage/products/productsSearch/productsSearch';
import CounterProducts from 'components/shipmentPage/products/counterProducts';
import ShipmnetLayout from 'components/shipmentPage/shipmentLayout';
import Basket from 'components/shipmentPage/products/basket';
import {
  productsColumns as columns,
  productsColumnsChanges as columnsChanges,
} from 'components/shipmentPage/products/productsColumns';
import Loader from 'components/Loader/Loader';
import Pagination from 'ui-kit/pagination/pagination';
import MobileCard from 'ui-kit/authZone/mobileCard';
import TabletCard from 'ui-kit/authZone/tableCard';
import { ChangeSortType } from 'types/table';
import { IColumnsData } from 'types/table';
import Table from 'ui-kit/table/table';

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
  const dispatch = useAppDispatch();
  const { isFallback } = useRouter();
  const {
    products,
    shipment,
    shipmentStatus,
    filterProducts,
    sortingProducts,
    loading,
    pagination,
  } = useSelector<RootState, ShipmentState>(({ shipment }) => shipment);

  const { isCustomer } = useSelector<RootState, UserState>(({ user }) => user);

  const changePage = ({ selected }: { selected: number }) => {
    dispatch(getProducts({ page: selected + 1 }));
  };

  useEffect(() => {
    dispatch(setLoading(true));
  }, []);

  useEffect(() => {
    if (shipment) {
      dispatch(getProducts());
    }
  }, [shipment, filterProducts, sortingProducts]);

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
  const conditionDraft = shipmentStatus === 'Черновик' && isCustomer;
  const conditionProcessed = shipmentStatus === 'Обработано' && !isCustomer;

  function returnCounter<T, U>(value: T, counter: U): T | U {
    if (conditionDraft) {
      return counter;
    } else if (conditionProcessed) {
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
        <title>Отгрузка товары</title>
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
            getKey={({ id }) => id}
            onRowHover={({ id, isHovered }) =>
              conditionDraft || conditionProcessed ? (
                <Basket idOrder={id} isHovered={isHovered} />
              ) : (
                <></>
              )
            }
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
