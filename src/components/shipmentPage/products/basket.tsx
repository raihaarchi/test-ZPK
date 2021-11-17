import React, { FC } from 'react';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import {
  ShipmentState,
  removeProduct,
  addProduct,
} from 'reducers/shipmentSlice';
import BasketIcon from 'components/icons/basket';
import Reset from 'components/icons/reset';

import { RowHoverProps } from 'types/table';

import styled from 'styled/styled';

const StyledButton = styled.button`
  position: relative;
`;

const Basket: FC<RowHoverProps> = ({ idOrder }) => {
  const { products } = useSelector<RootState, ShipmentState>(
    ({ shipment }) => shipment,
  );
  const dispatch = useAppDispatch();

  const [obj] = products.filter(({ id }) => id === Number(idOrder));
  const product = { ...obj };

  const deleteProdust = () => {
    dispatch(removeProduct({ id: Number(idOrder) }));
  };

  const resetProdust = () => {
    delete product?.delete;

    dispatch(addProduct({ id: Number(idOrder), product }));
  };

  return (
    <>
      {!product?.delete && (
        <StyledButton onClick={deleteProdust}>
          <BasketIcon />
        </StyledButton>
      )}
      {product?.delete && (
        <StyledButton onClick={resetProdust}>
          <Reset />
        </StyledButton>
      )}
    </>
  );
};

export default Basket;
