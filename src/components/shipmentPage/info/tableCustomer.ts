import { typeInfo } from 'types/order-shipment';

export default function tableCustomer({
  customer,
  receiver,
}: typeInfo['data']) {
  return [
    {
      heading: 'Контрагент',
      content: customer.shortName,
    },
    {
      heading: 'ИНН',
      content: customer.inn,
    },
    {
      heading: 'Получатель',
      content: receiver.name,
    },
    {
      heading: 'Фактический адрес',
      content: receiver.address,
    },
  ];
}
