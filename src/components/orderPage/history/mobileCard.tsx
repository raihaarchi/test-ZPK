import React, { FC } from 'react';
import { format } from 'date-fns';

import Status from './statusOrder';
import MobileCard from 'ui-kit/table/mobileCard/mobileCard';

import { typeHistory } from 'types/order-shipment';
import styled from 'styled/styled';

const StyledContent = styled.div`
  ${({ theme }) => theme.typography.text14x18}
  &:not(:first-of-type) {
    margin-top: 6px;
  }
`;

interface IMobileCard {
  row: typeHistory;
}

const ShipmentsMobileCard: FC<IMobileCard> = ({
  row: { modifyDateTime, movementStatusId, user },
}) => {
  return (
    <MobileCard
      headerContent={
        <>
          <StyledContent>{user.name}</StyledContent>
          <StyledContent>
            {format(new Date(modifyDateTime), 'dd.MM.yyyy,HH:mm')}
          </StyledContent>
        </>
      }
      footerContent={<></>}>
      <Status name={movementStatusId.name} id={user.id} />
    </MobileCard>
  );
};

export default ShipmentsMobileCard;
