import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ShipmnetLayout from 'components/orderPage/shipmentLayout';
import TabletCard from 'components/orderPage/history/tabletCatd';
import MobileCard from 'components/orderPage/history/mobileCard';
import { fetchOrder } from 'api/sveta';
import { typeHistory } from 'types/order-shipment';
import { Params } from 'types/getStaticPropsParams';
import Table from 'ui-kit/table/table';
import { historyColumns as columns } from 'components/orderPage/history/historyColumns';
import Loader from 'components/Loader/Loader';

import styled from 'styled/styled';

const StyledLoading = styled.div`
  position: relative;
  min-height: 400px;
`;

const StyledMargin = styled.div`
  margin-right: 40px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    margin-right: 0px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-right: 0px;
  }
`;

type HistoryProps = {
  data: typeHistory[];
};

type HistoryType = FC<HistoryProps> & { Layout: FC };

const History: HistoryType = ({ data }) => {
  const { isFallback } = useRouter();

  if (!isFallback && !data) return <h1>Извините, произошла ошибка.</h1>;

  if (isFallback)
    return (
      <StyledLoading>
        <Loader />
      </StyledLoading>
    );

  return (
    <>
      <Head>
        <title>Заявка журнал изменений</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMargin>
        <Table
          tabletCard={(row) => <TabletCard row={row} />}
          mobileCard={(row) => <MobileCard row={row} />}
          columns={columns}
          data={data}
          getKey={({ id }) => id}
        />
      </StyledMargin>
    </>
  );
};

History.Layout = ShipmnetLayout;

export default History;

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps = async ({ params: { id } }: Params) => {
  try {
    const { data } = await fetchOrder(`${id}/History`);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};
