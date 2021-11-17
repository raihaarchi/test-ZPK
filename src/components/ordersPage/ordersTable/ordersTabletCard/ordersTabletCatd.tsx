import React, { FC } from 'react';

import TabletCard from 'ui-kit/table/tabletCard/tabletCard';
import CardCell from 'ui-kit/table/cardCell/cardCell';

import { OrderTable } from 'types/order';

interface IOrdersTabletCard {
  row: OrderTable;
  onClick?: (id: number) => void;
}

const OrdersTabletCard: FC<IOrdersTabletCard> = ({
  row: { id, date, documentNumber, supplier, sum, movementStatus },
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
          <CardCell width={177} isTablet title="Получатель" text={supplier} />
          <CardCell width={118} isTablet title="Сумма, ₽" text={sum} />
          <CardCell width={137} isTablet title="Статус" text={movementStatus} />
        </>
      }
      onClick={() => onClick && onClick(id)}
    />
  );
};

export default OrdersTabletCard;
