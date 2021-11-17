import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import {
  OrdersState,
  setFiltering,
  resetFiltering,
} from 'reducers/ordersSlice';
import CloseSmall from 'components/icons/closeSmall';
import DateSelect from '../dateSelect/dateSelect';
import { typeFiltering } from 'types/filtering';
import SupplierSelect from '../supplierSelect/supplierSelect';
import StatusSelect from '../statusSelect/statusSelect';
import styled from 'styled/styled';

const StyledOrdersFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 72px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    height: 173px;
  }

  .order-filters__dropping {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.typography.text14x18};
  }

  .order-filters__selects {
    z-index: 3;
    margin-top: 15px;
    width: 100%;
    display: flex;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex-direction: column;
    }
  }

  .order-filters__select {
    height: 40px;
    width: calc(100% / 3);
    :not(:last-of-type) {
      margin-right: 25px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      width: 100%;
      :not(:last-of-type) {
        margin-bottom: 10px;
      }
    }
  }
`;

const OrdersFilter: FC = () => {
  const {
    filtering,
    isDirtFilter,
    contragentsSelect,
    statusSelect,
  } = useSelector<RootState, OrdersState>(({ orders }) => orders);

  const dispatch = useAppDispatch();

  const changeFilter = (filtering: typeFiltering) => {
    dispatch(setFiltering(filtering));
  };

  const setFilter = (val: typeFiltering) => {
    changeFilter(val);
  };

  const resetFilter = async () => {
    await dispatch(resetFiltering());
  };

  return (
    <StyledOrdersFilter>
      {isDirtFilter && (
        <button onClick={resetFilter} className="order-filters__dropping">
          Сбросить фильтры <CloseSmall />
        </button>
      )}
      <div className="order-filters__selects">
        <SupplierSelect
          className="order-filters__select"
          setFilter={setFilter}
          filtering={filtering}
          contragentsSelect={contragentsSelect}
        />
        <StatusSelect
          className="order-filters__select"
          setFilter={setFilter}
          filtering={filtering}
          statusSelect={statusSelect}
        />
        <DateSelect
          setFilter={(date) => setFilter({ ...filtering, date })}
          filtering={filtering.date}
        />
      </div>
    </StyledOrdersFilter>
  );
};
export default OrdersFilter;
