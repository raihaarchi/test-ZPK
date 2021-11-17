import { RequestShipmentHeaderData } from 'types/requestShipmentHeader';

const requestHeaderData: RequestShipmentHeaderData = {
  btnBack: {
    name: 'Назад к списку',
    link: '#linkBack',
  },
  title: {
    text: 'Заявка',
    serial: '№ OR00001095',
  },
  subtitle: {
    text: '',
    link: '',
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
    content: 'В очереди на обработку',
    isSuccess: true,
  },
  sum: {
    title: 'Сумма',
    content: [
      { amount: '2 430 ₽', duty: 'с НДС 20%' },
      { amount: '3 080 ₽', duty: 'без НДС' },
    ],
  },
  download: {
    title: 'Скачать',
    content: [
      {
        name: '.XLSX',
        link: 'files/info.xlsx',
      },
      {
        name: '.CVS',
        link: 'files/info.cvs',
      },
      {
        name: '.PDF',
        link: 'files/info.pdf',
      },
    ],
    fileName: '',
  },
  message: {
    bold: 'Внимание: ',
    normal: 'заказ был изменен поставщиком',
  },
  isEdited: false,
};

export default requestHeaderData;
