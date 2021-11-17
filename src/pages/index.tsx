import { FC } from 'react';
import Intro from 'components/indexPage/intro/intro';
import Advantages from 'components/indexPage/advantages/advantages';
import OurClients from 'components/indexPage/ourClients/ourClients';
import JoinUs from 'components/indexPage/joinUs/joinUs';
import Steps from 'components/indexPage/steps/steps';
import Questions from 'components/indexPage/questions/questions';
import Promotions from 'components/indexPage/promotions/promotions';
import Discounts from 'components/indexPage/discounts/discounts';
import Categories from 'components/indexPage/categories/categories';
import Shelves from 'components/indexPage/shelves/shelves';

export const Home: FC = () => {
  return (
    <>
      <Intro />
      <Advantages />
      <OurClients />
      <Promotions />
      <Discounts />
      <Categories />
      <Shelves />
      <Steps />
      <JoinUs />
      <Questions />
    </>
  );
};

export default Home;
