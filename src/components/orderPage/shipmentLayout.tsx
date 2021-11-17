import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { useRouter } from 'next/router';
import styled from 'styled/styled';
import Layout from 'components/personalAccount/containerPersonalAccount/containerPersonalAccount';
import Header from './header/header';
import Tabs from 'ui-kit/tabs/tabs';
import Loader from 'components/Loader/Loader';
import {
  setLoader as setLoaderHeader,
  HeaderState,
} from 'reducers/headerSlice';

const StyledTabs = styled(Tabs)`
  margin-bottom: 50px;
  margin-right: 40px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    margin-bottom: 30px;
    margin-right: 0px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-right: 0px;
  }
`;

const StyledLoading = styled.div`
  position: relative;
  min-height: 400px;
`;

const ShipmentId: FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { query, events } = useRouter();
  const dispatch = useAppDispatch();

  const startLoading = (url: string) => {
    if (url !== location.pathname) setLoading(true);
  };

  const stoptLoading = () => {
    setLoading(false);
  };

  const { loader: loaderHeader } = useSelector<RootState, HeaderState>(
    ({ header }) => header,
  );

  useEffect(() => {
    events.on('routeChangeStart', startLoading);
    events.on('routeChangeComplete', stoptLoading);
    events.on('routeChangeError', stoptLoading);

    dispatch(setLoaderHeader(false));

    return () => {
      events.off('routeChangeStart', startLoading);
      events.off('routeChangeComplete', stoptLoading);
      events.off('routeChangeError', stoptLoading);
    };
  }, []);

  const items = [
    {
      title: 'Инфо',
      link: `/orders/${query.id}/info`,
    },
    {
      title: 'Товары',
      link: `/orders/${query.id}/products`,
    },
    {
      title: 'Журнал изменений',
      link: `/orders/${query.id}/history`,
    },
  ];

  return (
    <Layout>
      {loaderHeader ? (
        <StyledLoading>
          <Loader />
        </StyledLoading>
      ) : (
        <>
          <Header />
          <StyledTabs items={items} />
          {loading ? (
            <StyledLoading>
              <Loader />
            </StyledLoading>
          ) : (
            children
          )}
        </>
      )}
    </Layout>
  );
};

export default ShipmentId;
