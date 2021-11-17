import { shopReducer } from 'reducers/shopSlice';
import { goodsFilterReducer } from 'reducers/goodsFilterSlice';
import { orderReducer } from 'reducers/orderSlice';
import { ordersReducer } from 'reducers/ordersSlice';
import { shipmentsReducer } from 'reducers/shipmentsSlice';
import { shipmentReducer } from 'reducers/shipmentSlice';
import { attachmentReducer } from 'reducers/attachmentSlice';
import { headerReducer } from 'reducers/headerSlice';
import { userReducer } from 'reducers/userSlice';
import { goodsReducer } from 'reducers/goodsSlice';
import { cartReducer } from 'reducers/cartSlice';

const rootReducer = {
  goods: goodsReducer,
  goodsFilter: goodsFilterReducer,
  shop: shopReducer,
  user: userReducer,
  order: orderReducer,
  orders: ordersReducer,
  shipments: shipmentsReducer,
  shipment: shipmentReducer,
  attachment: attachmentReducer,
  header: headerReducer,
  cart: cartReducer,
};

export default rootReducer;
