import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Good } from 'types/good';
import { fetchGoods } from 'api/sveta';
import { Pagination } from 'types/pagination';
import { RootState } from 'store';
import { Shop } from 'types/shop';
import axios, { CancelToken } from 'axios';

export type GoodsState = {
  goods: Good[];
  pagination: Pagination | null;
  isGoodsLoading: boolean;
  requestId: string | undefined;
};

const initialState: GoodsState = {
  goods: [],
  pagination: null,
  isGoodsLoading: false,
  requestId: undefined,
};

export const getGoods = createAsyncThunk<
  void,
  {
    shop: Shop;
    brands?: string[];
    priceFrom?: string;
    priceTo?: string;
    page?: number;
    sort?: string;
    cancelToken?: CancelToken | undefined;
    categoryId?: number;
    filter?: string;
  },
  { state: RootState }
>(
  'goods/getGoods',
  async (
    {
      shop,
      brands = [],
      page = 1,
      priceFrom,
      priceTo,
      sort = 'price',
      cancelToken,
      categoryId = 0,
      filter,
    },
    { dispatch },
  ) => {
    dispatch(setGoodsLoading(true));

    try {
      const response = await fetchGoods({
        page: page,
        department: shop.id,
        category: categoryId,
        brands: brands,
        priceFrom,
        priceTo,
        sort: sort || '',
        cancelToken,
        filter,
      });
      dispatch(setGoods(response));
      dispatch(setGoodsLoading(false));
    } catch (e) {
      if (!axios.isCancel(e)) {
        alert(`Произошла ошибка при загрузке товаров`);
        dispatch(setGoodsLoading(false));
        throw e;
      }
    }
  },
);

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoods(
      state,
      action: PayloadAction<{
        data: Good[];
        pagination: Pagination | null;
      }>,
    ) {
      state.goods = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    setGoodsLoading(state, action: PayloadAction<boolean>) {
      state.isGoodsLoading = action.payload || false;
    },
  },
});

export const { setGoods, setGoodsLoading } = goodsSlice.actions;
export const goodsReducer = goodsSlice.reducer;
