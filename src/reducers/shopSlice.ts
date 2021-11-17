import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Shop } from 'types/shop';
import { fetchShops } from 'api/sveta';
import { RootState } from 'store';

export type ShopState = {
  shops: Shop[];
  selected: Shop | null;
  isShopsLoading: boolean;
};

const initialState: ShopState = {
  shops: [],
  selected: null,
  isShopsLoading: false,
};

export const getShops = createAsyncThunk<Shop[], void, { state: RootState }>(
  'shop/getShops',
  async (_, { dispatch }) => {
    dispatch(setShopsLoading(true));

    try {
      const shops = await fetchShops();
      dispatch(setShops(shops));

      return shops;
    } catch (e) {
      alert(`Произошла ошибка при загрузке магазинов`);
      throw e;
    } finally {
      dispatch(setShopsLoading(false));
    }
  },
);

export const shopSlice = createSlice({
  name: 'shop',
  initialState: initialState as ShopState,
  reducers: {
    setShops(state, action: PayloadAction<Shop[]>) {
      state.shops = action.payload;
    },
    setSelectedShop(state, action: PayloadAction<Shop>) {
      state.selected = action.payload;
    },
    setShopsLoading(state, action: PayloadAction<boolean | undefined>) {
      state.isShopsLoading = action.payload || false;
    },
  },
});

export const { setShops, setSelectedShop, setShopsLoading } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
