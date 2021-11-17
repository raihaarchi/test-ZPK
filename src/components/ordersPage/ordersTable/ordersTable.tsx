import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { OrdersState, getOrders, setSorting } from 'reducers/ordersSlice';
import format from 'date-fns/format';

import OrdersTabletCard from './ordersTabletCard/ordersTabletCatd';
import OrdersMobileCard from './ordersMobileCard/ordersMobileCard';
import { headerTableOrder } from 'data/headerTableOrders';
import Pagination from 'ui-kit/pagination/pagination';
import TableDots from './tableDots/tableDots';
import Loader from 'components/Loader/Loader';
import useScreen from 'hooks/useScreen';
import Table from 'ui-kit/table/table';
import { createLink } from 'utils/createLink';

import { ChangeSortType } from 'types/table';
import { OrderTable } from 'types/order';

import styled from 'styled/styled';

const StyledOrdersTable = styled.div`
  margin-top: 21px;

  .fake-btn {
    margin-right: 20px;
  }
  .orders-table__pagination {
    margin-top: 60px;
  }
  .orders-table__loader {
    position: relative;
    min-height: 400px;
  }
`;

const OrdersTable: FC = () => {
  const { orders, filtering, pagination, loading, sorting } = useSelector<
    RootState,
    OrdersState
  >(({ orders }) => orders);
  const { isMobile } = useScreen();

  const dispatch = useAppDispatch();
  const changeOrder = async (sorting: string) => {
    await dispatch(setSorting(sorting));
    await dispatch(getOrders());
  };

  const changePage = ({ selected }: { selected: number }) => {
    dispatch(getOrders({ page: selected + 1 }));
  };

  useEffect(() => {
    dispatch(getOrders());
  }, [filtering]);

  const sort: ChangeSortType = ({ accessor, sortOrder }) => {
    switch (accessor) {
      case 'documentNumber':
        return changeOrder(`id|${sortOrder}`);
      case 'creationDateTime':
        return changeOrder(`created_on|${sortOrder}`);
      case 'supplier':
        return changeOrder(`supplier|${sortOrder}`);
      case 'sum':
        return changeOrder(`sum|${sortOrder}`);
      case 'movementStatus':
        return changeOrder(`status|${sortOrder}`);
      default:
        return changeOrder('id');
    }
  };

  const data: OrderTable[] = orders.map(
    ({
      id,
      documentNumber,
      creationDateTime,
      supplier,
      sum,
      movementStatus,
    }) => ({
      id,
      documentNumber,
      date: format(new Date(creationDateTime), 'dd.MM.yyyy, HH:mm'),
      supplier: supplier.shortName,
      sum: Number.isInteger(sum) ? `${sum},00` : Math.floor(sum * 100) / 100,
      movementStatus: movementStatus.name,
    }),
  );

  const setOrder = (id: number) => {
    createLink(`/orders/${id}/info`, isMobile);
  };

  const limitOrders = Boolean(
    (pagination?.totalFilteredCount || 20) >
      Number(process.env.NEXT_PUBLIC_SVETA_API_LIMIT),
  );
  const lengthOrders = Boolean(orders.length);

  return (
    <>
      <StyledOrdersTable>
        {loading && !sorting ? (
          <div className="orders-table__loader">
            <Loader />
          </div>
        ) : (
          <Table<OrderTable>
            data={data}
            columns={headerTableOrder}
            isRowHover
            tabletCard={(row) => (
              <OrdersTabletCard
                row={row}
                key={row.id}
                onClick={(id: number) => setOrder(id)}
              />
            )}
            mobileCard={(row) => (
              <OrdersMobileCard
                row={row}
                key={row.id}
                onClick={(id: number) => setOrder(id)}
              />
            )}
            changeSort={sort}
            getKey={({ id }) => id}
            onRowHover={({ id, isHovered }) => (
              <TableDots idOrder={id} isHovered={isHovered} />
            )}
            onRowClick={(id) => setOrder(id)}
          />
        )}
        {limitOrders && lengthOrders && (
          <Pagination
            className="orders-table__pagination"
            pageCount={pagination?.lastPage || 1}
            forcePage={pagination?.page || 1}
            onPageChange={changePage}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
          />
        )}
      </StyledOrdersTable>
    </>
  );
};

export default OrdersTable;
