import {
  Content,
  RequestShipmentHeaderData,
} from 'types/requestShipmentHeader';
import { Order } from 'types/order';
import { Shipment } from 'types/shipment';

export type shipmentHeaderDataProps = {
  id: string;
  sum: number;
  actions: Content[];
  sumWithoutVat: number;
  movementStatus: {
    [key: string]: string;
  };
  documentNumber: string;
};

export function returnHeaderData(
  data: Order | Shipment,
  puth: string,
): RequestShipmentHeaderData {
  return {
    btnBack: {
      name: 'Назад к списку',
      link: `/${puth}`,
    },
    title: {
      text: `${puth === 'orders' ? 'Заявка' : 'Отгрузка'}`,
      serial: `№ ${data.documentNumber}`,
    },
    subtitle: {
      text: `${puth === 'orders' ? '' : 'Перейти к заявке-основанию'}`,
      link: `/orders/${data.parentId || 0}`,
    },
    buttons: [
      {
        id: 1,
        name: 'Отказаться',
      },
      {
        id: 2,
        name: 'Создать копию',
      },
    ],
    status: {
      title: 'Статус',
      content: data.movementStatus.name,
      isSuccess: !(
        data.movementStatus.name.includes('Отказ') ||
        data.movementStatus.name.includes('Отмен')
      ),
    },
    sum: {
      title: 'Сумма',
      content: [
        { amount: `${Number(data.sum).toFixed(2)} ₽`, duty: 'с НДС 20%' },
        {
          amount: `${data.sumWithoutVat.toFixed(2)} ₽`,
          duty: 'без НДС',
        },
      ],
    },
    download: {
      title: 'Скачать',
      content: data.actions,
      fileName: data.documentNumber,
    },
    message: {
      bold: 'Внимание: ',
      normal: 'заказ был изменен поставщиком',
    },
    isEdited: data.wasEdited,
  };
}
