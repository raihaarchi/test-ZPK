import { FC, useEffect } from 'react';
import { useAppDispatch } from 'store';
import { initSelect } from 'reducers/shipmentsSlice';
import ContainerWithSidebar from 'components/personalAccount/containerPersonalAccount/containerPersonalAccount';
import ShipmentsFilter from 'components/shipmentsPage/shipmentsFilter/shipmentsFilter';
import ShipmentsSearch from 'components/shipmentsPage/shipmentsSearch/shipmentsSearch';
import ShipmentsTable from 'components/shipmentsPage/shipmentsTable/shipmentsTable';
import { setShipment } from 'reducers/shipmentSlice';
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

export const Shipments: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initSelect());
    dispatch(setShipment(null));
  }, []);

  return (
    <ContainerWithSidebar heading="Отгрузки" previous="Личный кабинет">
      <StylesContainer>
        <Head>
          <title>Отгрузки</title>
        </Head>
        <ShipmentsFilter />
        <ShipmentsSearch />
        <ShipmentsTable />
      </StylesContainer>
    </ContainerWithSidebar>
  );
};

export default Shipments;
