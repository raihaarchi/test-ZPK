import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled/styled';
import Layout from 'components/personalAccount/containerPersonalAccount/containerPersonalAccount';
import Loader from 'components/Loader/Loader';
import Header from './header/header';
import Tabs, { TabType } from 'ui-kit/tabs/tabs';

const StyledTabs = styled(Tabs)`
  margin-bottom: 50px;
  margin-right: 40px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    margin-bottom: 30px;
    margin-right: 0px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-bottom: 30px;
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

  const startLoading = (url: string) => {
    if (url !== location.pathname) setLoading(true);
  };

  const stoptLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    events.on('routeChangeStart', startLoading);
    events.on('routeChangeComplete', stoptLoading);
    events.on('routeChangeError', stoptLoading);

    return () => {
      events.off('routeChangeStart', startLoading);
      events.off('routeChangeComplete', stoptLoading);
      events.off('routeChangeError', stoptLoading);
    };
  }, []);

  const items: TabType[] = [
    {
      title: 'Инфо',
      link: `/shipments/${query.id}/info`,
    },
    {
      title: 'Товары',
      link: `/shipments/${query.id}/products`,
    },
    {
      title: 'Вложения',
      link: `/shipments/${query.id}/attachments`,
    },
    {
      title: 'Журнал изменений',
      link: `/shipments/${query.id}/history`,
    },
  ];

  return (
    <Layout>
      <Header />
      <StyledTabs items={items} />
      {loading ? (
        <StyledLoading>
          <Loader />
        </StyledLoading>
      ) : (
        children
      )}
    </Layout>
  );
};

export default ShipmentId;
