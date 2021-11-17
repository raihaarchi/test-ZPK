import { FC } from 'react';
import Head from 'next/head';
import FavoritesContent from 'components/favoritesPage/favoritesContent/favoritesContent';

export const Favorites: FC = () => {
  return (
    <>
      <Head>
        <title>Избранное - ЗаПокупки.рф</title>
      </Head>
      <FavoritesContent />
    </>
  );
};

export default Favorites;
