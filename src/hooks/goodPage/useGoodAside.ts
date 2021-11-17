import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios, { CancelTokenSource } from 'axios';
import { Good } from 'types/good';
import { addToCart, CartState, removeFromCart } from 'reducers/cartSlice';

let increaseCancelToken: CancelTokenSource;
let decreaseCancelToken: CancelTokenSource;

const useGoodsAside = (good: Good) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [isGoodInCart, setIsGoodInCart] = useState(false);
  const { goodsInCart, isCartGoodsLoading } = useSelector<RootState, CartState>(
    (s) => s.cart,
  );

  const handleIncrease = () => {
    setCount(count + good.minQuantity);

    if (isGoodInCart) {
      if (typeof increaseCancelToken !== 'undefined') {
        increaseCancelToken.cancel('Operation canceled due to new request.');
      }

      increaseCancelToken = axios.CancelToken.source();

      dispatch(
        addToCart({
          good,
          quantity: count + good.minQuantity,
          cancelToken: increaseCancelToken.token,
        }),
      );
    }
  };

  const handleDecrease = () => {
    setCount(count - good.minQuantity);

    if (isGoodInCart) {
      if (typeof decreaseCancelToken !== 'undefined') {
        decreaseCancelToken.cancel('Operation canceled due to new request.');
      }

      decreaseCancelToken = axios.CancelToken.source();

      dispatch(
        removeFromCart({
          good,
          quantity: count - good.minQuantity,
          cancelToken: decreaseCancelToken.token,
        }),
      );
    }
  };

  const handleAddToCart = () => {
    setIsGoodInCart(true);

    dispatch(
      addToCart({
        good,
        quantity: count,
      }),
    );
  };

  const handleRedirectToCart = () => {
    router.push('/cart');
  };

  useEffect(() => {
    if (goodsInCart) {
      setIsGoodInCart(
        goodsInCart.map((cartGood) => cartGood.good.id).includes(good.id),
      );
      const currentGood = goodsInCart.find(
        (cartGood) => cartGood.good.id === good.id,
      );
      if (currentGood) setCount(currentGood.quantity);
    }
  }, [goodsInCart]);

  return {
    count,
    goodsInCart,
    isGoodInCart,
    isCartGoodsLoading,
    handleIncrease,
    handleDecrease,
    handleAddToCart,
    handleRedirectToCart,
  };
};

export default useGoodsAside;
