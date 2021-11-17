import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { UserState } from 'reducers/userSlice';
import styled from 'styled/styled';
import Table from 'components/personalAccount/table/table';
import UserProfileEdit from './userProfileEdit';

const StyledOrganization = styled.div`
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

const Organization: FC = () => {
  const { user } = useSelector<RootState, UserState>(({ user }) => user);

  const table = !user
    ? []
    : [
        {
          heading: 'Полное наименование',
          content: user.contragent.fullName,
        },
        {
          heading: 'Сокращенное наименование',
          content: user.contragent.shortName,
        },
        {
          heading: 'Телефон',
          content: user.contragent.phoneNumber,
        },
        {
          heading: 'Электронная почта',
          content: user.contragent.email,
        },
        {
          heading: 'Сайт',
          content: user.contragent.webSite,
        },
        {
          heading: 'Юридический адрес',
          content: user.contragent.juridicAddress.fullAddress,
        },
        {
          heading: 'Фактический адрес',
          content: user.contragent.physicAddress.fullAddress,
        },
        {
          heading: 'Руководитель',
          content: user.contragent.owner,
        },
        {
          heading: 'Главный бухгалтер',
          content: user.contragent.chiefAccountant,
        },
        {
          heading: 'ИНН',
          content: user.contragent.inn,
        },
        {
          heading: 'ОГРН',
          content: user.contragent.ogrn,
        },
        {
          heading: 'КПП',
          content: user.contragent.kpp,
        },
        {
          heading: 'ОКАТО',
          content: user.contragent.okato,
        },
        {
          heading: 'Система налогообложения',
          content: user.contragent.taxSystemCRM,
        },
        {
          heading: 'ОКВЭД',
          content: user.contragent.okved,
        },
      ];

  return (
    <StyledOrganization>
      <StyledTable isOrganization data={table} />
      <UserProfileEdit />
    </StyledOrganization>
  );
};

export default Organization;
