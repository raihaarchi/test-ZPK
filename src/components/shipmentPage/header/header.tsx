import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { ShipmentState, getShipment } from 'reducers/shipmentSlice';
import { setShipment } from 'reducers/attachmentSlice';
import RequestShipmentHeader from 'components/requestShipmentHeader/requestShipmentHeader';
import { returnHeaderData } from 'data/dataHeaderPerson';
import Loader from 'components/Loader/Loader';

import styled from 'styled/styled';

const StyledLoading = styled.div`
  position: relative;
  min-height: 391px;
`;

const ShipmentHeader: FC = () => {
  const { query } = useRouter();
  const { shipment } = useSelector<RootState, ShipmentState>(
    ({ shipment }) => shipment,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    query.id && dispatch(getShipment({ id: Number(query.id) }));
    query.id && dispatch(setShipment({ id: Number(query.id) }));
  }, [query.id]);

  if (!shipment)
    return (
      <StyledLoading>
        <Loader />
      </StyledLoading>
    );

  return (
    <RequestShipmentHeader data={returnHeaderData(shipment, 'shipments')} />
  );
};

export default ShipmentHeader;
