import Head from 'next/head';
import React, { FC } from 'react';
import { fetchDigestInfo } from '../api/integration-api';
import DigestPageContent from 'components/info/digest/digestPageContent';
import DigestHeader from 'components/info/digest/digestHeader/digestHeader';

export type DigestProps = {
  headerData: {
    title: string;
    description: string;
  };
};

const Digest: FC<DigestProps> = ({ headerData }) => {
  return (
    <>
      <Head>
        <title>Дайджест PROЗА</title>
      </Head>
      <DigestHeader
        title={headerData.title}
        description={headerData.description}
      />
      <DigestPageContent />
    </>
  );
};

export async function getStaticProps() {
  const header = await fetchDigestInfo();
  return {
    props: { headerData: header.data },
  };
}

export default Digest;
