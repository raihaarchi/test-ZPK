import React, { FC } from 'react';

import Basket from 'components/shipmentPage/products/basket';
import CardCell from 'ui-kit/table/cardCell/cardCell';
import MobileCard from 'ui-kit/table/mobileCard/mobileCard';
import StatusProduct from 'ui-kit/authZone/statusProduct';
import { typeProducts } from 'types/order-shipment';

import styled from 'styled/styled';

const StyledContent = styled.span`
  position: relative;
  padding-right: 10px;
  display: flex;
  align-items: center;

  &:first-of-type {
    margin-bottom: 5px;
  }
  &:last-of-type {
    margin-bottom: 15px;
    padding-right: 10px;
  }
  .basket {
    position: absolute;
    right: 25px;
  }
`;

const StyledContentCounter = styled.span`
  position: relative;
  margin-top: 15px;
  align-items: center;
  display: flex;

  .basket {
    position: absolute;
    right: 0;
  }
`;

interface IShipmentMobileCard {
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

const ShipmentMobileCard: FC<IShipmentMobileCard> = ({
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
    <MobileCard
      headerContent={
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
      footerContent={
        <>
          <CardCell title="Сумма, ₽" text={price.toFixed(2)} />
          <CardCell
            title="Итого с НДС, ₽"
            text={(price * quantity).toFixed(2)}
          />
        </>
      }>
      {counter === quantity ? <CardCell title="Кол-во" text={counter} /> : null}
    </MobileCard>
  );
};

export default ShipmentMobileCard;
