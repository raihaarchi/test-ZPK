import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Good } from 'types/good';
import {
  fetchAddToCart,
  fetchCart,
  fetchGoodsInCart,
  fetchRemoveFromCart,
} from 'api/sveta';
import { Shop } from 'types/shop';
import { Cart } from 'types/cart';
import { RootState } from 'store';
import { Pagination } from 'types/pagination';
import { GoodInCart, PartialGood } from 'types/goodInCart';
import { CancelToken } from 'axios';

export type CartState = {
  cart: Cart;
  hasMinOrderSum: boolean;
  goodsInCart: GoodInCart[] | null;
  pagination: Pagination | null;
  uuid: string;
  cartLoading: boolean;
  isCartGoodsLoading: boolean;
  goodLoading: Good | PartialGood | null;
};

const initialState: CartState = {
  cart: {
    id: 0,
    itemsCount: 0,
    sum: 0,
    minOrderSum: 0,
    sumWithoutVat: 0,
  },
  hasMinOrderSum: false,
  goodsInCart: null,
  pagination: null,
  uuid: '',
  cartLoading: false,
  isCartGoodsLoading: false,
  goodLoading: null,
};

const initUuid = createAsyncThunk<void, void, { state: RootState }>(
  'cart/uuid',
  async (_, { dispatch, getState }) => {
    const { uuid } = getState().cart;
    const localUuid = localStorage.getItem('user_uuid');

    if (!uuid && !localUuid) {
      const uuid = uuidv4();

      dispatch(setUuid({ uuid }));
      localStorage.setItem('user_uuid', uuid);
    } else if (!uuid && localUuid) {
      dispatch(setUuid({ uuid: localUuid }));
    }
  },
);

export const getCart = createAsyncThunk<
  void,
  | {
      cartLoading?: boolean;
      cancelToken?: CancelToken | undefined;
      loadGoods?: boolean;
    }
  | undefined,
  { state: RootState }
>('cart/get', async (props, { dispatch, getState }) => {
  await dispatch(initUuid());

  const shop = getState().shop.selected as Shop;
  const { uuid } = getState().cart;

  const cartLoading =
    props?.cartLoading !== undefined ? props.cartLoading : true;
  dispatch(setCartLoading(cartLoading));

  if (props?.loadGoods) dispatch(setCartGoodsLoading(cartLoading));

  try {
    const cart = await fetchCart({
      shop,
      uuid,
      cancelToken: props?.cancelToken,
    });

    dispatch(setCart(cart));

    if (props?.loadGoods) {
      const goodsInCart = await fetchGoodsInCart({ cart, uuid });
      dispatch(
        setGoodsInCart({
          goodsInCart: goodsInCart.data,
          pagination: goodsInCart.pagination,
        }),
      );
    }
  } catch (e) {
    throw e;
  } finally {
    dispatch(setCartLoading());

    if (props?.loadGoods) dispatch(setCartGoodsLoading());
  }
});

export const addToCart = createAsyncThunk<
  void,
  {
    good: Good | PartialGood;
    quantity: number;
    cartLoading?: boolean;
    cancelToken?: CancelToken | undefined;
  },
  { state: RootState }
>(
  'cart/add',
  async (
    { good, quantity, cartLoading = false, cancelToken },
    { getState, dispatch },
  ) => {
    const { cart, uuid, goodsInCart } = getState().cart;

    if (cartLoading) dispatch(setCartLoading(cartLoading));
    dispatch(setGoodLoading(good));

    try {
      if (goodsInCart) {
        const filtered = goodsInCart.filter((g) => g.good.id === good.id);
        const isGoodNew = filtered.length === 0;

        if (isGoodNew)
          dispatch(setCart({ ...cart, itemsCount: cart.itemsCount + 1 }));

        await fetchAddToCart({
          id: filtered[0]?.id || good.id,
          cart,
          quantity,
          uuid,
          isNew: isGoodNew,
          cancelToken,
        });

        if (cartLoading) await dispatch(getCart({ cartLoading }));

        if (isGoodNew) {
          const goodsInCart = await fetchGoodsInCart({
            cart,
            uuid,
            cancelToken,
          });
          dispatch(
            setGoodsInCart({
              goodsInCart: goodsInCart.data,
              pagination: goodsInCart.pagination,
            }),
          );
        }
      }
    } catch (e) {
      throw e;
    } finally {
      if (cartLoading) dispatch(setCartLoading());
      dispatch(setGoodLoading());
    }
  },
);

export const removeFromCart = createAsyncThunk<
  void,
  {
    good: Good | PartialGood;
    quantity?: number;
    cartLoading?: boolean;
    cancelToken?: CancelToken | undefined;
  },
  { state: RootState }
>(
  'cart/remove',
  async (
    { good, quantity, cartLoading = false, cancelToken },
    { dispatch, getState },
  ) => {
    const {
      cart: { cart, goodsInCart, pagination, uuid },
    } = getState();

    if (cartLoading) dispatch(setCartLoading(cartLoading));
    dispatch(setGoodLoading(good));

    try {
      if (goodsInCart) {
        const removeGood = goodsInCart.filter((g) => g.good.id === good.id)[0];

        if (!quantity) {
          dispatch(
            setCart({
              ...cart,
              itemsCount: cart.itemsCount > 0 ? cart.itemsCount - 1 : 0,
            }),
          );

          dispatch(
            setGoodsInCart({
              goodsInCart: goodsInCart.filter((g) => g.good.id !== good.id),
              pagination,
            }),
          );
        }

        await fetchRemoveFromCart({
          cart,
          goodInCart: removeGood,
          uuid,
          quantity,
          cancelToken,
        });
      }
      if (cartLoading) await dispatch(getCart({ cartLoading }));
    } catch (e) {
      throw e;
    } finally {
      if (cartLoading) dispatch(setCartLoading());
      dispatch(setGoodLoading());
    }
  },
);

export const purgeCart = createAsyncThunk<
  void,
  { ids?: number[] },
  { state: RootState }
>('cart/purge', async ({ ids }, { dispatch, getState }) => {
  const { goodsInCart } = getState().cart;
  dispatch(setCartLoading(true));

  try {
    if (goodsInCart) {
      const promises = ids
        ? goodsInCart
            .filter((goodInCart) => ids.includes(goodInCart.id))
            .map((goodInCart) =>
              dispatch(removeFromCart({ good: goodInCart.good })),
            )
        : goodsInCart.map((goodInCart) =>
            dispatch(removeFromCart({ good: goodInCart.good })),
          );

      await Promise.all(promises);
    }

    await dispatch(getCart());
  } catch (e) {
    throw e;
  } finally {
    dispatch(setCartLoading());
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUuid(state, action: PayloadAction<{ uuid: string }>) {
      state.uuid = action.payload.uuid;
    },
    setCart(state, action: PayloadAction<Cart>) {
      const cart = action.payload;
      state.cart = cart;
      state.hasMinOrderSum = cart.minOrderSum <= cart.sum;
    },
    setGoodsInCart(
      state,
      action: PayloadAction<{
        goodsInCart: GoodInCart[];
        pagination: Pagination | null;
      }>,
    ) {
      state.goodsInCart = action.payload.goodsInCart;
      state.pagination = action.payload.pagination;
    },
    setCartLoading(state, action: PayloadAction<boolean | undefined>) {
      state.cartLoading = action.payload || false;
    },
    setCartGoodsLoading(state, action: PayloadAction<boolean | undefined>) {
      state.isCartGoodsLoading = action.payload || false;
    },
    setGoodLoading(
      state,
      action: PayloadAction<Good | PartialGood | undefined>,
    ) {
      state.goodLoading = action.payload || null;
    },
  },
});

export const {
  setUuid,
  setCart,
  setGoodsInCart,
  setCartLoading,
  setCartGoodsLoading,
  setGoodLoading,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
