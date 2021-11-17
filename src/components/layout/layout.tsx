import { FC, useEffect } from 'react';
import Head from 'next/head';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import styled from 'styled/styled';
import useBodyBg from 'hooks/useBodyBg';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { ShopState } from 'reducers/shopSlice';
import { getCart } from 'reducers/cartSlice';

interface IStyledLayout {
  bgColor: string;
}

const StyledLayout = styled.div<IStyledLayout>`
  position: relative;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.bgColor};

  .layout__main {
    min-height: 100vh;
  }
`;

const Layout: FC = ({ children }) => {
  const bgColor = useBodyBg();

  const { selected } = useSelector<RootState, ShopState>((s) => s.shop);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selected) {
      dispatch(getCart({ loadGoods: true }));
    }
  }, [selected, dispatch]);

  return (
    <StyledLayout bgColor={bgColor}>
      <Head>
        <title>ЗаПокупки.рф</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
