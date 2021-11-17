import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled/styled';
import Loader from 'components/Loader/Loader';
import ContainerWithSidebar from 'components/personalAccount/containerPersonalAccount/containerPersonalAccount';
import UserTabs from './userTabs';

const StyledLoading = styled.div`
  position: relative;
  min-height: 400px;
`;

const Profile: FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const { events } = useRouter();

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
  return (
    <ContainerWithSidebar heading="Профиль" previous="Личный кабинет">
      <UserTabs />
      {loading ? (
        <StyledLoading>
          <Loader />
        </StyledLoading>
      ) : (
        children
      )}
    </ContainerWithSidebar>
  );
};

export default Profile;
