import { typeInfo } from 'types/order-shipment';

export default function tableOrder({
  sum,
  itemsCount,
  deliveryType,
  sumWithoutVat,
  prepaimentSum,
  creationDateTime,
  prepaimentPercent,
}: typeInfo['data']) {
  return [
    {
      heading: 'Количество товаров',
      content: `${itemsCount} шт.`,
    },
    {
      heading: 'Создан',
      content: new Date(creationDateTime).toLocaleString(),
    },
    {
      heading: 'Сумма предоплаты',
      content: `${prepaimentSum} ₽`,
    },
    {
      heading: 'Размер предоплаты',
      content: `${prepaimentPercent}%`,
    },
    {
      heading: 'Сумма с НДС',
      content: `${sum.toFixed(2)} ₽`,
    },
    {
      heading: 'Сумма без НДС',
      content: `${sumWithoutVat.toFixed(2)} ₽`,
    },
    {
      heading: 'Способ получения',
      content: deliveryType?.name,
    },
  ];
}
