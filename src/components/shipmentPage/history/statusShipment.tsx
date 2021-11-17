import React, { FC } from 'react';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { ShipmentState } from 'reducers/shipmentSlice';

import CardCell from 'ui-kit/table/cardCell/cardCell';

import styled from 'styled/styled';

const StyledContainer = styled.div`
  .text {
    padding-top: 9px;
    ${({ theme }) => theme.typography.text14x18}
  }
`;

interface IStatusShipment {
  name: string;
  id: number;
}

const StatusShipment: FC<IStatusShipment> = ({ name, id }) => {
  const { shipment } = useSelector<RootState, ShipmentState>(
    ({ shipment }) => shipment,
  );
  const note =
    shipment?.notes?.length &&
    shipment.notes.find(({ user }) => user?.id || 0 === id);

  return (
    <StyledContainer>
      <CardCell width={177} isTablet title="" text={name} />
      <span className="text">{note ? note?.body : ''}</span>
    </StyledContainer>
  );
};

export default StatusShipment;
