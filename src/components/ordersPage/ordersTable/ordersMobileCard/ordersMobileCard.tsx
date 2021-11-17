import React, { FC } from 'react';

import CardCell from 'ui-kit/table/cardCell/cardCell';
import MobileCard from '../../../../ui-kit/table/mobileCard/mobileCard';

import { OrderTable } from 'types/order';

interface IOrdersMobileCard {
  row: OrderTable;
  onClick?: (id: number) => void;
}

const OrdersMobileCard: FC<IOrdersMobileCard> = ({
  row: { id, date, documentNumber, supplier, sum, movementStatus },
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
      <CardCell title="Получатель" text={supplier} />
    </MobileCard>
  );
};

export default OrdersMobileCard;
