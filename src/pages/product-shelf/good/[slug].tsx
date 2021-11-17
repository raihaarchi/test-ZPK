import goods from 'data/goods';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import GoodContent from 'components/goodPage/goodContent/goodContent';

export const ProductShelfGood = () => {
  const router = useRouter();
  const { slug } = router.query;
  const good = goods.find((good) => `${good.id}` === slug);

  if (!good) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Готовые полки {good.name} - ЗаПокупки.рф</title>
      </Head>
      {/*Вернуть при интеграции апи*/}
      {/*<GoodContent isShelf />*/}
    </>
  );
};

export default ProductShelfGood;
