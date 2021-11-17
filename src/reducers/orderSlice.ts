import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { loadState, removeState } from 'store/localStorage';
import {
  fetchProducts,
  fetchChangeProduct,
  fetchRemoveProduct,
  fetchAddProduct,
  fetchOrdersItem,
} from 'api/sveta';

import { Order } from 'types/order';
import { typeProducts } from 'types/order-shipment';
import { Pagination } from 'types/pagination';

const persistedState = loadState('filteringOrder');

export type OrderState = {
  order: Order | null;
  orderStatus: string;
  products: typeProducts[];
  filterProducts: { filter?: string };
  sortingProducts: string;
  pagination: Pagination | null;
  loading: boolean;
};

const initialState: OrderState = {
  order: null,
  orderStatus: '',
  products: [],
  filterProducts: persistedState,
  sortingProducts: '',
  pagination: null,
  loading: false,
};

export const getOrder = createAsyncThunk<
  void,
  { id: number },
  { state: RootState }
>('orders/getOrder', async ({ id }, { dispatch }) => {
  try {
    const response = await fetchOrdersItem(id);
    const status = response.movementStatus.name;
    dispatch(setOrder(response));
    dispatch(setOrderStatus(status));
  } catch (e) {
    console.error(e);
    dispatch(setLoading());
  }
});

export const getProducts = createAsyncThunk<
  void,
  { page?: number } | undefined,
  { state: RootState }
>('orders/getProdusts', async ({ page } = {}, { dispatch, getState }) => {
  const {
    order,
    filterProducts,
    sortingProducts,
    pagination,
  } = getState().order;

  dispatch(setLoading(true));
  try {
    const response = await fetchProducts<{
      data: typeProducts[];
      pagination: Pagination;
    }>({
      id: order?.id || 0,
      filtering: filterProducts,
      sorting: sortingProducts || 'id',
      page: page || pagination?.page || 1,
      puth: 'Orders',
    });
    await dispatch(setProducts(response));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoading());
  }
});

export const changeProduct = createAsyncThunk<
  void,
  { id: number; quantity: number },
  { state: RootState }
>('orders/changeProduct', async ({ id, quantity }, { dispatch, getState }) => {
  const { order } = getState().order;
  const request = { quantity };
  try {
    await fetchChangeProduct({
      id: order?.id || 0,
      itemId: id,
      request,
      puth: 'Orders',
    });
    await dispatch(setChengeProduct({ id, quantity }));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoading());
  }
});

export const removeProduct = createAsyncThunk<
  void,
  { id: number },
  { state: RootState }
>('order/removeProduct', async ({ id }, { dispatch, getState }) => {
  const { order } = getState().order;
  try {
    await fetchRemoveProduct({
      id: order?.id || 0,
      itemId: id,
      puth: 'Orders',
    });
    await dispatch(setStatusDeleteProduct(id));
  } catch (e) {
    console.error(e);
  }
});

export const addProduct = createAsyncThunk<
  void,
  { id: number; product: typeProducts },
  { state: RootState }
>('order/addProduct', async ({ id, product }, { dispatch, getState }) => {
  const { order } = getState().order;
  const request = {
    goodId: product.good.id,
    quantity: product.quantity,
  };
  try {
    const response = await fetchAddProduct({
      id: order?.id || 0,
      puth: 'Orders',
      request,
    });
    await dispatch(setResetStatusDelete({ id, product: response }));
  } catch (e) {
    console.error(e);
  }
});

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<Order | null>) {
      state.order = action.payload;
    },
    setChengeProduct(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? Object.assign({}, product, { quantity: action.payload.quantity })
          : product,
      );
    },
    setStatusDeleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? Object.assign({}, product, { delete: true })
          : product,
      );
    },
    setResetStatusDelete(
      state,
      action: PayloadAction<{ id: number; product: typeProducts }>,
    ) {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload.product : product,
      );
    },
    setOrderStatus(state, action: PayloadAction<string>) {
      state.orderStatus = action.payload;
    },
    setProducts(
      state,
      action: PayloadAction<{
        data: typeProducts[];
        pagination: Pagination;
      }>,
    ) {
      state.products = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    setFilterProducts(state, action: PayloadAction<{ filter?: string }>) {
      state.filterProducts = action.payload;
      if (!Object.keys(state.filterProducts).length)
        removeState('filteringOrder');
    },
    setSortingProducts(state, action: PayloadAction<string>) {
      state.sortingProducts = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean | undefined>) {
      state.loading = action.payload || false;
    },
  },
});

export const {
  setProducts,
  setChengeProduct,
  setStatusDeleteProduct,
  setResetStatusDelete,
  setOrderStatus,
  setOrder,
  setFilterProducts,
  setSortingProducts,
  setLoading,
} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
