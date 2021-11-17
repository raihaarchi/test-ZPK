import React, { FC } from 'react';

import TabletCard from 'ui-kit/table/tabletCard/tabletCard';
import CardCell from 'ui-kit/table/cardCell/cardCell';

import { ShipmentTable } from 'types/shipment';

interface IShipmentsTabletCard {
  row: ShipmentTable;
  onClick?: (id: number) => void;
}

const ShipmentsTabletCard: FC<IShipmentsTabletCard> = ({
  row: { id, date, documentNumber, sender, sum, movementStatus },
  onClick,
}) => {
  return (
    <TabletCard
      widthLeft={177}
      leftContent={
        <>
          <span>{documentNumber}</span>
          <span>{date}</span>
        </>
      }
      rightContent={
        <>
          <CardCell width={177} isTablet title="Склад" text={sender} />
          <CardCell width={118} isTablet title="Сумма, ₽" text={sum} />
          <CardCell width={137} isTablet title="Склад" text={movementStatus} />
        </>
      }
      onClick={() => onClick && onClick(id)}
    />
  );
};

export default ShipmentsTabletCard;
