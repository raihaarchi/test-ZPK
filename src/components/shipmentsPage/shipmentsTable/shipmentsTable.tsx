import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import {
  ShipmentsState,
  getShipments,
  setSorting,
} from 'reducers/shipmentsSlice';
import format from 'date-fns/format';

import Table from 'ui-kit/table/table';
import Pagination from 'ui-kit/pagination/pagination';
import {
  headerTableShipmentsWithSender,
  headerTableShipmentsWithSupplier,
} from 'data/headerTableShipments';
import ShipmentsTabletCard from './shipmentsTabletCard/shipmentsTabletCatd';
import ShipmentsMobileCard from './shipmentsMobileCard/shipmentsMobileCard';
import { createLink } from 'utils/createLink';
import Loader from 'components/Loader/Loader';
import TableDots from './tableDots/tableDots';
import useScreen from 'hooks/useScreen';

import { ChangeSortType } from 'types/table';
import { ShipmentTable } from 'types/shipment';

import styled from 'styled/styled';
import { UserState } from '../../../reducers/userSlice';

const StyledShipmentsTable = styled.div`
  margin-top: 21px;

  .fake-btn {
    margin-right: 20px;
  }
  .shipments-table__pagination {
    margin-top: 60px;
  }
  .shipments-table__loader {
    position: relative;
    min-height: 400px;
  }
`;

const ShipmentsTable: FC = () => {
  const { shipments, pagination, filtering, loading, sorting } = useSelector<
    RootState,
    ShipmentsState
  >(({ shipments }) => shipments);
  const { isMobile } = useScreen();

  const { isCustomer } = useSelector<RootState, UserState>(({ user }) => user);

  const dispatch = useAppDispatch();
  const changeOrder = async (sorting: string) => {
    await dispatch(setSorting(sorting));
    await dispatch(getShipments());
  };
  const changePage = ({ selected }: { selected: number }) => {
    dispatch(getShipments({ page: selected + 1 }));
  };

  useEffect(() => {
    dispatch(getShipments());
  }, [filtering]);

  const sort: ChangeSortType = ({ accessor, sortOrder }) => {
    switch (accessor) {
      case 'documentNumber':
        return changeOrder(`id|${sortOrder}`);
      case 'creationDateTime':
        return changeOrder(`created_on|${sortOrder}`);
      case 'sender':
        return changeOrder(`receiver|${sortOrder}`);
      case 'sum':
        return changeOrder(`sum|${sortOrder}`);
      case 'movementStatus':
        return changeOrder(`status|${sortOrder}`);
      default:
        return changeOrder('id');
    }
  };

  const data: ShipmentTable[] = shipments.map(
    ({
      id,
      documentNumber,
      creationDateTime,
      sender,
      supplier,
      sum,
      movementStatus,
    }) => ({
      id,
      documentNumber,
      date: format(new Date(creationDateTime), 'dd.MM.yyyy, HH:mm'),
      sender: sender.name,
      supplier: supplier.shortName,
      sum: Number.isInteger(sum)
        ? `${sum},00`
        : Math.floor(Number(sum) * 100) / 100,
      movementStatus: movementStatus.name,
    }),
  );

  const setShipments = (id: number) => {
    createLink(`/shipments/${id}/info`, isMobile);
  };

  const limitShipments = Boolean(
    (pagination?.totalFilteredCount || 20) >
      Number(process.env.NEXT_PUBLIC_SVETA_API_LIMIT),
  );
  const lengthShipments = Boolean(shipments.length);

  return (
    <>
      <StyledShipmentsTable>
        {loading && !sorting ? (
          <div className="shipments-table__loader">
            <Loader />
          </div>
        ) : (
          <Table<ShipmentTable>
            data={data}
            columns={
              isCustomer
                ? headerTableShipmentsWithSupplier
                : headerTableShipmentsWithSender
            }
            isRowHover
            tabletCard={(row) => (
              <ShipmentsTabletCard
                row={row}
                key={row.id}
                onClick={(id: number) => setShipments(id)}
              />
            )}
            mobileCard={(row) => (
              <ShipmentsMobileCard
                row={row}
                key={row.id}
                onClick={(id: number) => setShipments(id)}
              />
            )}
            changeSort={sort}
            getKey={({ id }) => id}
            onRowHover={({ id, isHovered }) => (
              <TableDots idOrder={id} isHovered={isHovered} />
            )}
            onRowClick={(id) => setShipments(id)}
          />
        )}
        {limitShipments && lengthShipments && (
          <Pagination
            className="shipments-table__pagination"
            pageCount={pagination?.lastPage || 1}
            forcePage={pagination?.page || 1}
            onPageChange={changePage}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
          />
        )}
      </StyledShipmentsTable>
    </>
  );
};

export default ShipmentsTable;
