import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { UserState } from 'reducers/userSlice';
import styled from 'styled/styled';
import Table from 'components/personalAccount/table/table';
import UserProfileEdit from './userProfileEdit';

const StyledUser = styled.div`
  display: flex;

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    flex-direction: column;
  }
`;

const StyledTable = styled(Table)`
  margin-right: 112px;
  max-width: 584px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    margin-right: 20px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    max-width: none;
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const UserProfile: FC = () => {
  const { user } = useSelector<RootState, UserState>(({ user }) => user);

  const table = !user
    ? []
    : [
        {
          heading: '№',
          content: user.id,
        },
        {
          heading: 'Фамилия',
          content: user.lastName,
        },
        {
          heading: 'Имя',
          content: user.firstName,
        },
        {
          heading: 'Отчество',
          content: user.middleName,
        },
        {
          heading: 'Логин',
          content: user.login,
        },
        {
          heading: 'Электронная почта',
          content: user.email,
        },
        {
          heading: 'Должность',
          content: user.position,
        },
        {
          heading: 'Контрагент',
          content: user.contragent.fullName,
        },
      ];

  return (
    <StyledUser>
      <StyledTable isOrganization data={table} />
      <UserProfileEdit />
    </StyledUser>
  );
};

export default UserProfile;
