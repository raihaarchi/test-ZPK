import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import format from 'date-fns/format';
import { RootState } from 'store';
import { loadState, removeState } from 'store/localStorage';
import {
  fetchShipments,
  fetchStatusSelectShipments,
  fetchDepartmentsSelect,
  fetchContragentsSelect,
  fetchRefuseShipments,
  fetchShipmentsFile,
  fetchFile,
} from 'api/sveta';

import { typeFiltering } from 'types/filtering';
import { Pagination } from 'types/pagination';
import { Shipment, SelectOptionFromApi } from 'types/shipment';
import { SelectOption } from 'types/selectOption';

const persistedState = loadState('filteringShipments');
const today = format(new Date(), 'dd.MM.yyyy');

export type ShipmentsState = {
  shipments: Shipment[];
  pagination: Pagination | null;
  loading: boolean;
  statusSelect: SelectOption[];
  departmentsSelect: SelectOption[];
  contragentsSelect: SelectOption[];
  sorting: string;
  filtering: typeFiltering;
  dowlandFile: string;
  isDirtFilter: boolean;
};

const defaultStatusSelect: SelectOption = { value: 0, label: 'Любой статус' };
const defaultDepartmentsSelect: SelectOption = {
  value: 0,
  label: 'Все склады',
};
const defaultContragentsSelect: SelectOption = {
  value: 0,
  label: 'Все получатели',
};
const defaultIsDirtFilter = Boolean(Object.keys(persistedState).length);

const initialState: ShipmentsState = {
  shipments: [],
  pagination: null,
  loading: false,
  statusSelect: [defaultStatusSelect],
  departmentsSelect: [defaultDepartmentsSelect],
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
  'shipments/initSelect',
  async (_, { dispatch, getState }) => {
    const {
      statusSelect,
      contragentsSelect,
      departmentsSelect,
    } = getState().shipments;
    if (
      !(statusSelect.length > 1) &&
      !(contragentsSelect.length > 1) &&
      !(departmentsSelect.length > 1)
    ) {
      try {
        const [
          statusSelect,
          departmentsSelect,
          contragentsSelect,
        ] = await Promise.all([
          fetchStatusSelectShipments(),
          fetchDepartmentsSelect(),
          fetchContragentsSelect(),
        ]);

        dispatch(setStatusSelect(statusSelect.map(mapSelect)));
        dispatch(setDepartmentsSelect(departmentsSelect.data.map(mapSelect)));
        dispatch(setContragentsSelect(contragentsSelect.data.map(mapSelect)));
      } catch (e) {
        console.error(e);
      }
    }
  },
);

export const getShipments = createAsyncThunk<
  void,
  { page?: number } | undefined,
  { state: RootState }
>('shipments/get', async ({ page } = {}, { dispatch, getState }) => {
  const { filtering, sorting, pagination, loading } = getState().shipments;

  if (loading) return Promise.resolve();

  dispatch(setLoading(true));

  try {
    const response = await fetchShipments({
      sorting,
      filtering,
      page: page || pagination?.page || 1,
    });

    await dispatch(setShipments(response));
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
>('shipments/getFile', async (_, { getState }) => {
  const { filtering, sorting } = getState().orders;
  const file = await fetchShipmentsFile({
    sorting,
    filtering: {
      ...filtering,
    },
  });

  return {
    fileName: `shipments ${today}.xlsx`,
    file,
  };
});

export const getFileShipment = createAsyncThunk<
  {
    file: Blob;
    fileName: string;
  },
  { path: string; name: string; ext: string },
  { state: RootState }
>('shipment/getFileShipment', async ({ path, name, ext }) => {
  const file = await fetchFile(path);
  return {
    fileName: `${name}.${ext}`,
    file,
  };
});

export const postShipments = createAsyncThunk<
  void,
  { id?: string | number },
  { state: RootState }
>('shipments/post', async ({ id }) => {
  try {
    await fetchRefuseShipments(id);
  } catch (e) {
    console.error(e);
  }
});

export const shipmentsSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    setShipments(
      state,
      action: PayloadAction<{ data: Shipment[]; pagination: Pagination }>,
    ) {
      state.shipments = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    setStatusSelect(state, action: PayloadAction<SelectOption[]>) {
      state.statusSelect = [...state.statusSelect, ...action.payload];
    },
    setDepartmentsSelect(state, action: PayloadAction<SelectOption[]>) {
      state.departmentsSelect = [...state.departmentsSelect, ...action.payload];
    },
    setContragentsSelect(state, action: PayloadAction<SelectOption[]>) {
      state.contragentsSelect = [...state.contragentsSelect, ...action.payload];
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
        removeState('filteringShipments');
        state.isDirtFilter = false;
      }
    },
    resetFiltering(state) {
      state.filtering = {};
      removeState('filteringShipments');
      state.isDirtFilter = false;
    },
    setLoading(state, action: PayloadAction<boolean | undefined>) {
      state.loading = action.payload || false;
    },
  },
});

export const {
  setShipments,
  setStatusSelect,
  setDepartmentsSelect,
  setContragentsSelect,
  setSorting,
  setFiltering,
  resetFiltering,
  setLoading,
} = shipmentsSlice.actions;
export const shipmentsReducer = shipmentsSlice.reducer;
