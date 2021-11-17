import { typeInfo } from 'types/order-shipment';

export default function tableSupplier({ supplier, sender }: typeInfo['data']) {
  return [
    {
      heading: 'ИНН',
      content: supplier.inn,
    },
    {
      heading: 'Склад',
      content: sender.name,
    },
    {
      heading: 'Фактический адрес',
      content: sender.address,
    },
  ];
}
