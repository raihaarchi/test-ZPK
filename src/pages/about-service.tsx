import Head from 'next/head';
import React, { FC } from 'react';
import { fetchAboutService } from 'api/integration-api';
import { AboutServiceType } from 'types/aboutServiceTypes';
import AboutServicePageContent from 'components/info/aboutService/aboutServicePageContent';

type AboutServiceProps = {
  data: AboutServiceType;
};

const AboutService: FC<AboutServiceProps> = ({ data }) => (
  <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <AboutServicePageContent data={data} />
  </>
);

export async function getStaticProps() {
  const { data } = await fetchAboutService();
  return {
    props: { data },
  };
}

export default AboutService;
