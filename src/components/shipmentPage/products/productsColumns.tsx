import { IColumnsData } from 'types/table';
import { typeProducts } from 'types/order-shipment';
import CounterProducts from './counterProducts';
import StatusProduct from 'ui-kit/authZone/statusProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { UserState } from '../../../reducers/userSlice';

export const productsColumns: IColumnsData<typeProducts>[] = [
  {
    Header: 'Артикул',
    accessor: 'vendorCode',
    width: 159,
    render: ({ good: { vendorCode } }) => vendorCode,
    isSorted: true,
  },
  {
    Header: 'Наименование товара',
    accessor: 'name',
    width: 348,
    // eslint-disable-next-line react/display-name
    render: ({ linkedMovementQuantity, quantity, good: { name } }) => {
      const { isCustomer } = useSelector<RootState, UserState>(
        ({ user }) => user,
      );
      return (
        <div>
          {name}
          {isCustomer && (
            <StatusProduct
              prevQuantity={linkedMovementQuantity}
              quantity={quantity}
            />
          )}
        </div>
      );
    },
    isSorted: true,
  },
  {
    Header: 'Кол-во',
    accessor: 'quantity',
    width: 174,
    render: ({ quantity }) => quantity,
    isSorted: true,
  },
  {
    Header: 'Сумма, ₽',
    accessor: 'price',
    width: 174,
    render: ({ price }) => price.toFixed(2),
    isSorted: true,
  },
  {
    Header: 'Итого с НДС, ₽',
    accessor: 'total',
    width: 129,
    render: ({ price, quantity }) => (price * quantity).toFixed(2),
    isSorted: true,
  },
];

export const productsColumnsChanges: IColumnsData<typeProducts>[] = [
  {
    Header: 'Артикул',
    accessor: 'vendorCode',
    width: 159,
    render: ({ good: { vendorCode } }) => vendorCode,
    isSorted: true,
  },
  {
    Header: 'Наименование товара',
    accessor: 'name',
    width: 348,
    render: ({ good: { name } }) => name,
    isSorted: true,
  },
  {
    Header: 'Кол-во',
    accessor: 'quantity',
    width: 174,
    // eslint-disable-next-line react/display-name
    render: ({ quantity, id, good: { minQuantity, pickingQuantum } }) => (
      <CounterProducts
        quantity={quantity}
        id={id}
        minQuantity={minQuantity}
        pickingQuantum={pickingQuantum}
      />
    ),
    isSorted: true,
  },
  {
    Header: 'Сумма, ₽',
    accessor: 'price',
    width: 174,
    render: ({ price }) => price.toFixed(2),
    isSorted: true,
  },
  {
    Header: 'Итого с НДС, ₽',
    accessor: 'total',
    width: 129,
    render: ({ price, quantity }) => (price * quantity).toFixed(2),
    isSorted: true,
  },
];
