import rootReducer from 'reducers';
import isEmpty from 'lodash.isempty';
import throttle from 'lodash.throttle';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { saveState } from './localStorage';

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(
  throttle(() => {
    const { shipments, orders, shipment, order } = store.getState();

    if (!isEmpty(orders.filtering))
      saveState(orders.filtering, 'filteringOrders');
    if (!isEmpty(shipments.filtering))
      saveState(shipments.filtering, 'filteringShipments');
    if (!isEmpty(shipment.filterProducts))
      saveState(shipment.filterProducts, 'filteringShipment');
    if (!isEmpty(order.filterProducts))
      saveState(order.filterProducts, 'filteringOrder');
  }, 1000),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
