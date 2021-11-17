import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { getShops, setSelectedShop } from 'reducers/shopSlice';
import { getUser } from './userSlice';
import { Shop } from 'types/shop';

export const initApp = createAsyncThunk<void, void, { state: RootState }>(
  'init/initApp',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const getUserPromise = new Promise(async (resolve, reject) => {
        try {
          const response = unwrapResult(await dispatch(getUser()));
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });
      const getShopsPromise = new Promise(async (resolve, reject) => {
        try {
          const response = unwrapResult(await dispatch(getShops()));
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });

      const [, shops] = await Promise.all([getUserPromise, getShopsPromise]);
      const newShopIdString = window.location.search
        .split('&')
        .find((el) => el.includes('shop'));
      const newShopId =
        newShopIdString && +newShopIdString.replace(/^\D+/g, '');
      const newShop = (shops as Shop[]).find((el) => el.id === newShopId);

      if (shops) {
        newShop
          ? dispatch(setSelectedShop(newShop))
          : dispatch(setSelectedShop((shops as Shop[])[0]));
      } else {
        alert('Города не найдены');
      }

      return Promise.resolve();
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
