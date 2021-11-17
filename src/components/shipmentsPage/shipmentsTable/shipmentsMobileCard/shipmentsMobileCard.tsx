import React, { FC } from 'react';

import CardCell from 'ui-kit/table/cardCell/cardCell';
import MobileCard from 'ui-kit/table/mobileCard/mobileCard';

import { ShipmentTable } from 'types/shipment';
interface IShipmentsMobileCard {
  row: ShipmentTable;
  onClick?: (id: number) => void;
}

const ShipmentsMobileCard: FC<IShipmentsMobileCard> = ({
  row: { id, date, documentNumber, sender, sum, movementStatus },
  onClick,
}) => {
  return (
    <MobileCard
      headerContent={
        <>
          <span>{documentNumber}</span>
          <span>{date}</span>
        </>
      }
      footerContent={
        <>
          <CardCell title="Сумма, ₽" text={sum} />
          <CardCell title="Статус" text={movementStatus} />
        </>
      }
      onClick={() => onClick && onClick(id)}>
      <CardCell title="Склад" text={sender} />
    </MobileCard>
  );
};

export default ShipmentsMobileCard;
