import { typeInfo } from 'types/order-shipment';
import tableSupplier from './tableSupplier';
import tableCustomer from './tableCustomer';
import tableOrder from './tableOrder';

export default function infoTable(data: typeInfo['data']) {
  return [
    {
      heading: 'Поставщик',
      name: data.supplier.shortName,
      table: tableSupplier(data),
    },
    {
      heading: 'Покупатель',
      name: data.customer.shortName,
      table: tableCustomer(data),
    },
    {
      heading: 'Заказ',
      table: tableOrder(data),
    },
  ];
}
