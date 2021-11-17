import Head from 'next/head';
import React, { FC } from 'react';
import { FaqDataType } from 'types/faq';
import Faq from 'components/info/faq/faq';
import { fetchFaq } from 'api/integration-api';

type FaqPageProps = {
  data: FaqDataType;
};

export const FaqPage: FC<FaqPageProps> = ({ data }) => (
  <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <Faq data={data} />
  </>
);

export async function getStaticProps() {
  const { data } = await fetchFaq();

  return {
    props: { data },
  };
}

export default FaqPage;
