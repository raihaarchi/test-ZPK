import Status from './statusOrder';
import { IColumnsData } from 'types/table';
import { typeHistory } from 'types/order-shipment';
import { format } from 'date-fns';

export const historyColumns: IColumnsData<typeHistory>[] = [
  {
    Header: 'Дата',
    accessor: 'accessor 1',
    width: 150,
    render: ({ modifyDateTime }) =>
      format(new Date(modifyDateTime), 'dd.MM.yyyy,HH:mm'),
  },
  {
    Header: 'Статус заказа',
    accessor: 'accessor 1',
    width: 480,
    // eslint-disable-next-line react/display-name
    render: ({ movementStatusId: { name }, user: { id } }) => (
      <Status name={name} id={id} />
    ),
  },
  {
    Header: 'Инициатор изменений',
    accessor: 'accessor 1',
    width: 235,
    render: ({ user: { name } }) => name,
  },
];
