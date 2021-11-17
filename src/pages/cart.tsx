import CartContent from 'components/cartPage/cartContent/cartContent';
import Head from 'next/head';
import { useEffect } from 'react';
import { getCart } from 'reducers/cartSlice';
import { useAppDispatch } from 'store';

export const Cart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCart({ loadGoods: true }));
  }, []);

  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>
      <CartContent />
    </>
  );
};

export default Cart;
