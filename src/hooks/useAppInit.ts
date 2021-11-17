import { useEffect } from 'react';
import { initApp } from 'reducers/initSlice';
import store from 'store';

export const useAppInit = () => {
  useEffect(() => {
    store.dispatch(initApp());
  }, []);
};
