import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { fetchFile } from 'api/sveta';

export type HeaderState = {
  loader: boolean;
};

const initialState: HeaderState = {
  loader: false,
};

export const getFile = createAsyncThunk<
  {
    file: Blob;
    fileName: string;
  },
  { path: string; name: string; ext: string },
  { state: RootState }
>('shipment/getFile', async ({ path, name, ext }) => {
  const file = await fetchFile(path);
  return {
    fileName: `${name}.${ext}`,
    file,
  };
});

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setLoader(state, action: PayloadAction<boolean>) {
      state.loader = action.payload;
    },
  },
});

export const { setLoader } = headerSlice.actions;
export const headerReducer = headerSlice.reducer;
