import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import format from 'date-fns/format';
import { RootState } from 'store';
import { loadState, removeState } from 'store/localStorage';
import {
  fetchOrders,
  fetchOrdersFile,
  fetchStatusSelectOrders,
  fetchContragentsSelect,
  fetchRefuseShipments,
  fetchFile,
} from 'api/sveta';

import { typeFiltering } from 'types/filtering';
import { Pagination } from 'types/pagination';
import { Order, SelectOptionFromApi } from 'types/order';
import { SelectOption } from 'types/selectOption';

const persistedState = loadState('filteringOrders');

const today = format(new Date(), 'MM.dd.yyyy');

export type OrdersState = {
  orders: Order[];
  pagination: Pagination | null;
  loading: boolean;
  statusSelect: SelectOption[];
  contragentsSelect: SelectOption[];
  sorting: string;
  filtering: typeFiltering;
  dowlandFile: string;
  isDirtFilter: boolean;
};

const defaultStatusSelect: SelectOption = { value: 0, label: 'Любой статус' };
const defaultContragentsSelect: SelectOption = {
  value: 0,
  label: 'Все получатели',
};
const defaultIsDirtFilter = Boolean(Object.keys(persistedState).length);

const initialState: OrdersState = {
  orders: [],
  pagination: null,
  loading: false,
  statusSelect: [defaultStatusSelect],
  contragentsSelect: [defaultContragentsSelect],
  sorting: '',
  filtering: persistedState,
  dowlandFile: '',
  isDirtFilter: defaultIsDirtFilter,
};

const mapSelect: (val: SelectOptionFromApi) => SelectOption = ({
  id,
  name,
}) => ({
  value: id,
  label: name,
});

export const initSelect = createAsyncThunk<void, void, { state: RootState }>(
  'orders/initSelect',
  async (_, { dispatch, getState }) => {
    const { statusSelect, contragentsSelect } = getState().orders;
    if (!(statusSelect.length > 1) && !(contragentsSelect.length > 1)) {
      try {
        const [statusSelect, contragentsSelect] = await Promise.all([
          fetchStatusSelectOrders(),
          fetchContragentsSelect(),
        ]);

        dispatch(setStatusSelect(statusSelect.map(mapSelect)));
        dispatch(setContragentSelect(contragentsSelect.data.map(mapSelect)));
      } catch (e) {
        console.error(e);
      }
    }
  },
);

export const getOrders = createAsyncThunk<
  void,
  { page?: number } | undefined,
  { state: RootState }
>('orders/get', async ({ page } = {}, { dispatch, getState }) => {
  const { filtering, sorting, pagination, loading } = getState().orders;

  if (loading) return Promise.resolve();

  dispatch(setLoading(true));

  try {
    const response = await fetchOrders({
      sorting,
      filtering,
      page: page || pagination?.page || 1,
    });
    await dispatch(setOrders(response));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(setLoading());
  }
});

export const getFile = createAsyncThunk<
  {
    file: Blob;
    fileName: string;
  },
  void,
  { state: RootState }
>('orders/getFile', async (_, { getState }) => {
  const { filtering, sorting } = getState().orders;
  const file = await fetchOrdersFile({
    sorting,
    filtering: {
      ...filtering,
    },
  });

  return {
    fileName: `orders ${today}.xlsx`,
    file,
  };
});

export const getFileOrder = createAsyncThunk<
  {
    file: Blob;
    fileName: string;
  },
  { path: string; name: string; ext: string },
  { state: RootState }
>('shipment/getFileOrder', async ({ path, name, ext }) => {
  const file = await fetchFile(path);
  return {
    fileName: `${name}.${ext}`,
    file,
  };
});

export const postOrder = createAsyncThunk<
  void,
  { id: string | number },
  { state: RootState }
>('orders/post', async ({ id }) => {
  try {
    await fetchRefuseShipments(id);
  } catch (e) {
    console.error(e);
  }
});

export const ordersSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrders(
      state,
      action: PayloadAction<{ data: Order[]; pagination: Pagination }>,
    ) {
      state.orders = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    setStatusSelect(state, action: PayloadAction<SelectOption[]>) {
      state.statusSelect = [defaultStatusSelect, ...action.payload];
    },
    setContragentSelect(state, action: PayloadAction<SelectOption[]>) {
      state.contragentsSelect = [defaultContragentsSelect, ...action.payload];
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
    setFiltering(state, action: PayloadAction<typeFiltering>) {
      state.filtering = action.payload;
      const values = Object.values(state.filtering);
      if (values.length && values.some((el) => el)) {
        state.isDirtFilter = true;
      } else {
        removeState('filteringOrders');
        state.isDirtFilter = false;
      }
    },
    resetFiltering(state) {
      state.filtering = {};
      removeState('filteringOrders');
      state.isDirtFilter = false;
    },
    setLoading(state, action: PayloadAction<boolean | undefined>) {
      state.loading = Boolean(action.payload);
    },
  },
});

export const {
  setOrders,
  setStatusSelect,
  setContragentSelect,
  setSorting,
  setFiltering,
  resetFiltering,
  setLoading,
} = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
