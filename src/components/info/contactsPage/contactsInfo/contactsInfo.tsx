import Card from './card/card';
import React, { FC } from 'react';
import styled from 'styled/styled';
import { Contacts } from 'types/dataContacts';
import { ContactsProps } from 'pages/contacts';

interface StyledContactsInfo {
  className: string;
}

const StyledContactsInfo = styled.div<StyledContactsInfo>`
  padding-bottom: 170px;
  :before {
    content: '';
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.colors.black};
    top: 0;
  }

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding-bottom: 90px;
  }

  .contacts-info__header {
    margin-top: 55px;
    ${({ theme }) => theme.typography.text30x30};

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-top: 40px;
      ${({ theme }) => theme.typography.text18x20};
    }
  }

  .container {
    padding-top: 56px;
    display: flex;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      padding-top: 30px;
      flex-direction: column;
    }
  }
`;

const ContactsInfo: FC<ContactsProps> = ({ data }) => {
  const newData: Contacts[] = [
    {
      titles: [data.number, data.email],
      description: 'Поддержка',
    },
    {
      titles: [data.address],
      description: 'Адрес',
    },
    {
      titles: [data.ogrn],
      description: 'ОГРН',
    },
  ];
  return (
    <StyledContactsInfo className="wrapper">
      <p className="contacts-info__header">{data.organization}</p>
      <div className="container">
        {newData.map(({ titles, description }, index) => (
          <Card titles={titles} description={description} key={index} />
        ))}
      </div>
    </StyledContactsInfo>
  );
};

export default ContactsInfo;
