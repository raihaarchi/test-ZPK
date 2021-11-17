import React, { FC, useState } from 'react';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { OrderState, removeProduct, addProduct } from 'reducers/orderSlice';
import BasketIcon from 'components/icons/basket';
import Reset from 'components/icons/reset';

import { RowHoverProps } from 'types/table';

import styled from 'styled/styled';

const StyledTableButton = styled.button`
  position: relative;
`;

const Basket: FC<RowHoverProps> = ({ idOrder }) => {
  const { products } = useSelector<RootState, OrderState>(({ order }) => order);
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
        <StyledTableButton onClick={deleteProdust}>
          <BasketIcon />
        </StyledTableButton>
      )}
      {product?.delete && (
        <StyledTableButton onClick={resetProdust}>
          <Reset />
        </StyledTableButton>
      )}
    </>
  );
};

export default Basket;
