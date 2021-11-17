import { FC, useEffect } from 'react';
import { useAppDispatch } from 'store';
import { initSelect } from 'reducers/ordersSlice';
import ContainerWithSidebar from 'components/personalAccount/containerPersonalAccount/containerPersonalAccount';
import OrdersFilter from 'components/ordersPage/ordersFilter/ordersFilter';
import OrdersSearch from 'components/ordersPage/ordersSearch/ordersSearch';
import OrdersTable from 'components/ordersPage/ordersTable/ordersTable';
import { setOrder } from 'reducers/orderSlice';
import Head from 'next/head';

import styled from 'styled/styled';

const StylesContainer = styled.div`
  margin-right: 40px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-right: 0px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-right: 0px;
  }
`;

export const Orders: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initSelect());
    dispatch(setOrder(null));
  }, []);

  return (
    <ContainerWithSidebar heading="Заявки" previous="Личный кабинет">
      <StylesContainer>
        <Head>
          <title>Заявки</title>
        </Head>
        <OrdersFilter />
        <OrdersSearch />
        <OrdersTable />
      </StylesContainer>
    </ContainerWithSidebar>
  );
};

export default Orders;
