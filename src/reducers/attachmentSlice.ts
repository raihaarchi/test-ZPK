import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import {
  fetchFileUploadAttachment,
  fetchFileAttachment,
  fetchRemoveFileAttachment,
} from 'api/sveta';

import { Pagination } from 'types/pagination';
import { typeFile } from 'types/typeFileAttachment';

export type AttachmentState = {
  shipment: number;
  shipmentStatus: string;
  fileAttachment: typeFile[];
  pagination: Pagination | null;
  loadingAttachment: boolean;
  loading: boolean;
};

const initialState: AttachmentState = {
  shipment: 0,
  shipmentStatus: '',
  fileAttachment: [],
  pagination: null,
  loadingAttachment: false,
  loading: false,
};

export const getFileAttachment = createAsyncThunk<
  void,
  void,
  { state: RootState }
>('shipment/getAttachment', async (_, { dispatch, getState }) => {
  const { shipment } = getState().attachment;
  try {
    const response = await fetchFileAttachment(shipment);
    await dispatch(setAttachment(response));
  } catch (e) {
    console.error(e);
  }
});

export const addFileAttachment = createAsyncThunk<
  void,
  { file: File },
  { state: RootState }
>('shipment/addFileAttachment', async ({ file }, { dispatch, getState }) => {
  const { shipment } = getState().attachment;
  const formData = new FormData();
  formData.append('file', file);

  dispatch(setLoadingAttachment(true));

  const id = Math.floor(Math.random() * 100);
  const addedFile = {
    id,
    name: file.name,
    extension: file.name.split('.').pop() || '',
    loading: true,
  };
  dispatch(setNewAttachment([addedFile]));

  try {
    await fetchFileUploadAttachment({
      id: shipment,
      file: formData,
    });
    await dispatch(setLoadingAttachment(false));
    await dispatch(getFileAttachment());
  } catch (e) {
    console.error(e);
  }
});

export const removeFileAttachment = createAsyncThunk<
  void,
  { id: number },
  { state: RootState }
>('shipment/removeFileAttachment', async ({ id }, { dispatch, getState }) => {
  const { shipment } = getState().attachment;
  try {
    await fetchRemoveFileAttachment({
      id: shipment,
      request: { attachmentId: id },
    });
    await dispatch(setRemoveAttachment(id));
  } catch (e) {
    console.error(e);
  }
});

export const attachmentSlice = createSlice({
  name: 'attacment',
  initialState,
  reducers: {
    setShipment(state, action: PayloadAction<{ id: number }>) {
      state.shipment = action.payload.id;
    },
    setAttachment(
      state,
      action: PayloadAction<{ data: typeFile[]; pagination: Pagination }>,
    ) {
      state.fileAttachment = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    setNewAttachment(state, action: PayloadAction<typeFile[]>) {
      state.fileAttachment = [...state.fileAttachment, ...action.payload];
    },
    setRemoveAttachment(state, action: PayloadAction<number>) {
      state.fileAttachment = state.fileAttachment.filter(
        ({ id }) => id !== action.payload,
      );
    },
    setLoadingAttachment(state, action: PayloadAction<boolean>) {
      state.loadingAttachment = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const {
  setShipment,
  setAttachment,
  setNewAttachment,
  setRemoveAttachment,
  setLoadingAttachment,
  setLoading,
} = attachmentSlice.actions;
export const attachmentReducer = attachmentSlice.reducer;
