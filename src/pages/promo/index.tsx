import { FC } from 'react';
import Head from 'next/head';
import { PromosDataType } from 'types/promo';
import { fetchPromos } from 'api/integration-api';
import PromosLayout from 'components/promoPage/promosLayout/promosLayout';

type PromoProps = {
  data: PromosDataType[];
};

export const Promo: FC<PromoProps> = ({ data }) => (
  <>
    <Head>
      <title>Акции</title>
    </Head>
    <PromosLayout promos={data} />
  </>
);

export async function getStaticProps() {
  const { data } = await fetchPromos();

  return {
    props: { data },
  };
}

export default Promo;
