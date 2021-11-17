import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterCategory } from 'types/filterCategory';
import { Shop } from 'types/shop';
import { RootState } from 'store';
import { fetchCatalogFilters, fetchFilterCategories } from 'api/sveta';
import { CatalogFilters } from 'types/catalogFilters';

export type GoodsFilterState = {
  filters: CatalogFilters | null;
  categories: FilterCategory[];
  selected: FilterCategory | null;
  isFiltersLoading: boolean;
  isCategoriesLoading: boolean;
};

const initialState: GoodsFilterState = {
  filters: null,
  isFiltersLoading: false,
  categories: [],
  isCategoriesLoading: false,
  selected: null,
};

export const getCategories = createAsyncThunk<
  void,
  { shop: Shop },
  { state: RootState }
>('goodFilters/getCategories', async ({ shop }, { dispatch }) => {
  dispatch(setCategoryLoading(true));

  try {
    const categories = await fetchFilterCategories({ shop });
    dispatch(setCategories(categories));
  } catch (e) {
    alert(`Произошла ошибка при загрузке категорий`);
  } finally {
    dispatch(setCategoryLoading(false));
  }
});

export const getGoodsFilters = createAsyncThunk<
  void,
  { shop: Shop; rootCategory: number | undefined },
  { state: RootState }
>(
  'goodFilters/getGoodsFilters',
  async ({ shop, rootCategory }, { dispatch, getState }) => {
    const { selected: category } = getState().goodsFilter;
    dispatch(setFiltersLoading(true));

    try {
      if (category && !!rootCategory) {
        const catalogFilters = await fetchCatalogFilters(shop.id, category?.id);
        dispatch(setFilters(catalogFilters));
      } else {
        dispatch(setFilters(null));
        dispatch(setSelectedCategory(null));
      }
    } catch (e) {
      alert(`Произошла ошибка при загрузке фильтров`);
    } finally {
      dispatch(setFiltersLoading(false));
    }
  },
);

const goodsFilterSlice = createSlice({
  name: 'goodFilters',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<FilterCategory[]>) {
      state.categories = action.payload;
    },
    setFilters(state, action: PayloadAction<CatalogFilters | null>) {
      state.filters = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<FilterCategory | null>) {
      state.selected = action.payload;
    },
    setFiltersLoading(state, action: PayloadAction<boolean>) {
      state.isFiltersLoading = action.payload;
    },
    setCategoryLoading(state, action: PayloadAction<boolean>) {
      state.isCategoriesLoading = action.payload;
    },
  },
});

export const {
  setCategories,
  setFilters,
  setSelectedCategory,
  setFiltersLoading,
  setCategoryLoading,
} = goodsFilterSlice.actions;
export const goodsFilterReducer = goodsFilterSlice.reducer;
