import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ShipmnetLayout from 'components/orderPage/shipmentLayout';
import { fetchOrder } from 'api/sveta';
import { typeInfo } from 'types/order-shipment';
import { Params } from 'types/getStaticPropsParams';
import Table from 'components/personalAccount/table/table';
import infoTable from 'components/shipmentPage/info/infoTable';
// Styled Components
import { StyledInfo } from 'components/shipmentPage/info/styledInfo';
import { StyledBlock } from 'components/shipmentPage/info/styledBlock';
import { StyledHeading } from 'components/shipmentPage/info/styledHeading';
import { StyledName } from 'components/shipmentPage/info/styledName';
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

type InfoProps = {
  data: typeInfo['data'];
};

type InfoType = FC<InfoProps> & { Layout: FC };

const Info: InfoType = ({ data }) => {
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
        <title>Заявка информация</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMargin>
        {infoTable(data).map(({ heading, name, table }) => (
          <StyledInfo key={heading}>
            <StyledBlock>
              <StyledHeading>{heading}</StyledHeading>
              <StyledName>{name}</StyledName>
            </StyledBlock>
            <Table data={table} />
          </StyledInfo>
        ))}
      </StyledMargin>
    </>
  );
};

Info.Layout = ShipmnetLayout;

export default Info;

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps = async ({ params: { id } }: Params) => {
  try {
    const data = await fetchOrder(id);

    return {
      props: {
        data,
      },
    };
  } catch {
    return {
      props: {
        data: null,
      },
    };
  }
};
