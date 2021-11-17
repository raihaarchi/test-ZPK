import { FC } from 'react';
import Head from 'next/head';
import { PromoDataType } from 'types/promo';
import { fetchPromo, fetchPromos } from 'api/integration-api';
import PromoLayout from 'components/promoPage/promoLayout/promoLayout';

type PromoPageProps = {
  data: PromoDataType;
};

export const PromoPage: FC<PromoPageProps> = ({ data }) => (
  <>
    <Head>
      <title>{data.name}</title>
    </Head>
    <PromoLayout promo={data} />
  </>
);

export async function getStaticPaths() {
  const { data } = await fetchPromos();

  return {
    paths: data.map(({ slug }) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params: { slug } }: Params) => {
  const { data } = await fetchPromo(slug);

  return {
    props: { data },
  };
};

export default PromoPage;
