import React, { FC } from 'react';
import { format } from 'date-fns';

import TabletCard from 'ui-kit/table/tabletCard/tabletCard';
import Status from './statusOrder';

import { typeHistory } from 'types/order-shipment';
import styled from 'styled/styled';

const StyledContent = styled.div`
  ${({ theme }) => theme.typography.text14x18}
  &:not(:first-of-type) {
    margin-top: 6px;
  }
`;

interface ITabletCard {
  row: typeHistory;
}

const HistoryTabletCard: FC<ITabletCard> = ({
  row: { modifyDateTime, movementStatusId, user },
}) => {
  return (
    <TabletCard
      widthLeft={177}
      leftContent={
        <>
          <StyledContent>{user.name}</StyledContent>
          <StyledContent>
            {format(new Date(modifyDateTime), 'dd.MM.yyyy,HH:mm')}
          </StyledContent>
        </>
      }
      rightContent={<Status name={movementStatusId.name} id={user.id} />}
    />
  );
};

export default HistoryTabletCard;
