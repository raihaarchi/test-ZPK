import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { loadState, removeState } from 'store/localStorage';
import {
  fetchProducts,
  fetchChangeProduct,
  fetchRemoveProduct,
  fetchAddProduct,
  fetchShipmentsItem,
} from 'api/sveta';

import { typeProducts } from 'types/order-shipment';
import { Shipment } from 'types/shipment';
import { Pagination } from 'types/pagination';

const persistedState = loadState('filteringShipment');

export type ShipmentState = {
  shipment: Shipment | null;
  shipmentStatus: string;
  products: typeProducts[];
  filterProducts: { filter?: string };
  sortingProducts: string;
  pagination: Pagination | null;
  loading: boolean;
};

const initialState: ShipmentState = {
  shipment: null,
  shipmentStatus: '',
  products: [],
  filterProducts: persistedState,
  sortingProducts: '',
  pagination: null,
  loading: false,
};

export const getShipment = createAsyncThunk<
  void,
  { id: number },
  { state: RootState }
>('shipment/getShipment', async ({ id }, { dispatch }) => {
  try {
    const response = await fetchShipmentsItem(id);
    const status = response.movementStatus.name;
    dispatch(setShipment(response));
    dispatch(setShipmentStatus(status));
  } catch (e) {
    console.error(e);
    dispatch(setLoading());
  }
});

export const getProducts = createAsyncThunk<
  void,
  { page?: number } | undefined,
  { state: RootState }
>('shipment/getProdusts', async ({ page } = {}, { dispatch, getState }) => {
  const {
    shipment,
    filterProducts,
    sortingProducts,
    pagination,
  } = getState().shipment;
  dispatch(setLoading(true));
  try {
    const response = await fetchProducts<{
      data: typeProducts[];
      pagination: Pagination;
    }>({
      id: shipment?.id || 0,
      filtering: filterProducts,
      sorting: sortingProducts || 'id',
      page: page || pagination?.page || 1,
      puth: 'Shipments',
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
>(
  'shipment/changeProduct',
  async ({ id, quantity }, { dispatch, getState }) => {
    const { shipment } = getState().shipment;
    const request = { quantity };
    try {
      await fetchChangeProduct({
        id: shipment?.id || 0,
        itemId: id,
        request,
        puth: 'Shipments',
      });
      await dispatch(setChengeProduct({ id, quantity }));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(setLoading());
    }
  },
);

export const removeProduct = createAsyncThunk<
  void,
  { id: number },
  { state: RootState }
>('shipment/removeProduct', async ({ id }, { dispatch, getState }) => {
  const { shipment } = getState().shipment;
  try {
    await fetchRemoveProduct({
      id: shipment?.id || 0,
      itemId: id,
      puth: 'Shipments',
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
>('shipment/addProduct', async ({ id, product }, { dispatch, getState }) => {
  const { shipment } = getState().shipment;
  const request = {
    goodId: product.good.id,
    quantity: product.quantity,
  };
  try {
    await fetchAddProduct({
      id: shipment?.id || 0,
      puth: 'Shipments',
      request,
    });
    await dispatch(setResetStatusDelete({ id, product }));
  } catch (e) {
    console.error(e);
  }
});

export const shipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    setShipment(state, action: PayloadAction<Shipment | null>) {
      state.shipment = action.payload;
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
    setShipmentStatus(state, action: PayloadAction<string>) {
      state.shipmentStatus = action.payload;
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
        removeState('filteringShipment');
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
  setShipment,
  setProducts,
  setChengeProduct,
  setStatusDeleteProduct,
  setResetStatusDelete,
  setShipmentStatus,
  setFilterProducts,
  setSortingProducts,
  setLoading,
} = shipmentSlice.actions;
export const shipmentReducer = shipmentSlice.reducer;
