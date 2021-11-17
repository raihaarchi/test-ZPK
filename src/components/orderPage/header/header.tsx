import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { OrderState, getOrder } from 'reducers/orderSlice';

import RequestShipmentHeader from 'components/requestShipmentHeader/requestShipmentHeader';
import { returnHeaderData } from 'data/dataHeaderPerson';
import Loader from 'components/Loader/Loader';

import styled from 'styled/styled';

const StyledLoading = styled.div`
  position: relative;
  min-height: 400px;
`;

const ShipmentHeader: FC = () => {
  const { query } = useRouter();
  const { order } = useSelector<RootState, OrderState>(({ order }) => order);
  const dispatch = useAppDispatch();

  useEffect(() => {
    query.id && dispatch(getOrder({ id: Number(query.id) }));
  }, [query.id]);

  if (!order)
    return (
      <StyledLoading>
        <Loader />
      </StyledLoading>
    );

  return <RequestShipmentHeader data={returnHeaderData(order, 'orders')} />;
};

export default ShipmentHeader;
