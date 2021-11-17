/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { typeFiltering } from 'types/filtering';
import { RootState, useAppDispatch } from 'store';
import {
  ShipmentsState,
  setFiltering,
  resetFiltering,
} from 'reducers/shipmentsSlice';
import CloseSmall from 'components/icons/closeSmall';
import DateSelect from 'components/ordersPage/dateSelect/dateSelect';
import SenderSelect from 'components/ordersPage/senderSelect/senderSelect';
import StatusSelect from 'components/ordersPage/statusSelect/statusSelect';
import SupplierSelect from 'components/ordersPage/supplierSelect/supplierSelect';
import styled from 'styled/styled';
import { UserState } from '../../../reducers/userSlice';

const StyledShipmentsFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 72px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    height: 173px;
  }

  .shipments-filters__dropping {
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.typography.text14x18};
  }

  .shipments-filters__selects {
    margin-top: 15px;
    width: 100%;
    display: flex;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex-direction: column;
    }
  }

  .mr-25 {
    margin-right: 25px;
  }

  .shipments-filters__select {
    height: 40px;
    width: calc(100% / 3);
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      width: 100%;
      :not(:last-of-type) {
        margin-bottom: 10px;
      }
    }
  }
`;

const ShipmentsFilter: FC = () => {
  const {
    filtering,
    isDirtFilter,
    contragentsSelect,
    departmentsSelect,
    statusSelect,
  } = useSelector<RootState, ShipmentsState>(({ shipments }) => shipments);
  const dispatch = useAppDispatch();

  const { isCustomer } = useSelector<RootState, UserState>(({ user }) => user);

  const setFilter = (filtering: typeFiltering) =>
    dispatch(setFiltering(filtering));

  const resetFilter = async () => {
    await dispatch(resetFiltering());
  };

  return (
    <StyledShipmentsFilter>
      {isDirtFilter && (
        <button onClick={resetFilter} className="shipments-filters__dropping">
          Сбросить фильтры <CloseSmall />
        </button>
      )}
      <div className="shipments-filters__selects">
        {isCustomer ? (
          <SupplierSelect
            className="shipments-filters__select mr-25"
            setFilter={setFilter}
            filtering={filtering}
            contragentsSelect={contragentsSelect}
          />
        ) : (
          <SenderSelect
            className="shipments-filters__select mr-25"
            setFilter={setFilter}
            filtering={filtering}
            departmentsSelect={departmentsSelect}
          />
        )}
        <StatusSelect
          className="shipments-filters__select mr-25"
          setFilter={setFilter}
          filtering={filtering}
          statusSelect={statusSelect}
        />
        <DateSelect
          setFilter={(date) => setFilter({ ...filtering, date })}
          filtering={filtering.date}
        />
      </div>
    </StyledShipmentsFilter>
  );
};
export default ShipmentsFilter;
