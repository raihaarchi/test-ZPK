import { FC } from 'react';
import Tabs, { TabType } from 'ui-kit/tabs/tabs';
import styled from 'styled/styled';

const StyledTabs = styled(Tabs)`
  margin: 70px 0 85px;
  margin-bottom: 85px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    margin: 41px 0 50px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin: 23px 0 32px;
  }
`;

const items: TabType[] = [
  {
    title: 'Пользователь',
    link: '/user/profile',
  },
  {
    title: 'Организация',
    link: '/user/organization-profile',
  },
];

const ProfileTabs: FC = () => <StyledTabs items={items} />;

export default ProfileTabs;
