import React, { FC } from 'react';

import Basket from 'components/shipmentPage/products/basket';
import TabletCard from 'ui-kit/table/tabletCard/tabletCard';
import StatusProduct from 'ui-kit/authZone/statusProduct';
import CardCell from 'ui-kit/table/cardCell/cardCell';
import { typeProducts } from 'types/order-shipment';

import styled from 'styled/styled';

const StyledContent = styled.span`
  &:first-of-type {
    margin-bottom: 5px;
  }
  &:last-of-type {
    margin-bottom: 15px;
  }
`;

const StyledContentCounter = styled.span`
  position: relative;
  margin-top: 15px;
  align-items: center;
  display: flex;
  padding-right: 10px;

  .basket {
    position: absolute;
    right: 25px;
  }
`;

interface IShipmentTabletCard {
  row: typeProducts;
  isCustomer: boolean;
  getCounter: (
    value: number,
    id: number,
    minQuantity: number,
    pickingQuantum: number,
  ) => number | JSX.Element;
  isCorrection: boolean;
}

const ShipmentTabletCard: FC<IShipmentTabletCard> = ({
  row: { id, good, quantity, price, linkedMovementQuantity },
  isCustomer,
  isCorrection,
  getCounter,
}) => {
  const counter = getCounter(
    quantity,
    id,
    good.minQuantity,
    good.pickingQuantum,
  );
  return (
    <TabletCard
      widthLeft={275}
      leftContent={
        <>
          <StyledContent>{good.vendorCode}</StyledContent>
          <StyledContent>
            {good.name}
            {isCustomer && (
              <StatusProduct
                prevQuantity={linkedMovementQuantity}
                quantity={quantity}
              />
            )}
          </StyledContent>
          <StyledContentCounter>
            {counter !== quantity && <CardCell title="" text={counter} />}
            {isCorrection && (
              <div className="basket">
                <Basket idOrder={id} isHovered />
              </div>
            )}
          </StyledContentCounter>
        </>
      }
      rightContent={
        <>
          {counter === quantity && (
            <CardCell width={118} isTablet title="Кол-во" text={counter} />
          )}
          <CardCell
            width={117}
            isTablet
            title="Сумма, ₽"
            text={price.toFixed(2)}
          />
          <CardCell
            width={156}
            isTablet
            title="Итого с НДС, ₽"
            text={(price * quantity).toFixed(2)}
          />
        </>
      }
    />
  );
};

export default ShipmentTabletCard;
