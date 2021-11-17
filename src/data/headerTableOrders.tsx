import { IColumnsData } from 'types/table';
import { OrderTable } from 'types/order';

export const headerTableOrder: IColumnsData<OrderTable>[] = [
  {
    Header: '№',
    accessor: 'documentNumber',
    render: ({ documentNumber }) => documentNumber,
    width: 157,
    isSorted: true,
  },
  {
    Header: 'Создана',
    accessor: 'creationDateTime',
    render: ({ date }) => date,
    width: 174,
    isSorted: true,
  },
  {
    Header: 'Получатель',
    accessor: 'supplier',
    render: ({ supplier }) => supplier,
    width: 261,
    isSorted: true,
  },
  {
    Header: 'Сумма, ₽',
    accessor: 'sum',
    render: ({ sum }) => sum,
    width: 174,
    isSorted: true,
  },
  {
    Header: 'Статус',
    accessor: 'movementStatus',
    render: ({ movementStatus }) => movementStatus,
    width: 226,
    isSorted: true,
  },
];
