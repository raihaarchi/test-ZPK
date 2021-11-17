import Head from 'next/head';
import { useRouter } from 'next/router';
import GoodContent from 'components/goodPage/goodContent/goodContent';
import { FC, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { fetchGood } from 'api/sveta';
import { Good } from 'types/good';

interface GoodPageProps {
  good: Good | null;
}

export const GoodPage: FC<GoodPageProps> = ({ good }) => {
  const router = useRouter();

  useEffect(() => {
    if (!good) {
      router.push('/');
    }
  }, []);

  if (!good) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{good.name} - ЗаПокупки.рф</title>
      </Head>
      <GoodContent good={good} />
    </>
  );
};

export default GoodPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  let good: Good | null = null;
  try {
    const response = await fetchGood(`${query.id}`, `${query.shop}`);
    good = response;
  } catch (e) {
    console.log('Произошла ошибка при загрузке товара');
  }

  return {
    props: { query, good },
  };
};
