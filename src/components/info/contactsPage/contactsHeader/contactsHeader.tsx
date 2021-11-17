import React, { FC } from 'react';
import Title from 'components/info/infoHeaderContent/title/title';
import InfoHeaderContent from 'components/info/infoHeaderContent/infoHeaderContent';
import styled from 'styled/styled';

interface StyledContactsHeader {
  className: string;
}

const StyledContactsHeader = styled.section<StyledContactsHeader>`
  .contacts-header {
    align-items: start;
  }

  .contacts-header__left {
    margin-top: 70px;
    width: 100%;
    align-self: start;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-top: 30px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 100%;
      align-self: start;
      margin-top: 0;
      margin-bottom: 19px;
    }
  }

  .contacts-header__right {
    width: 413px;
    height: 219px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      width: 275px;
      height: 146px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 20px;
    }
  }

  .contacts-header__title {
    margin-bottom: 33px;

    & > br {
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        display: none;
      }
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 10px;
    }
  }
`;

type ContactsHeaderProps = {
  title: string;
};

const ContactsHeader: FC<ContactsHeaderProps> = ({ title }) => (
  <StyledContactsHeader className="wrapper">
    <InfoHeaderContent
      img={
        <img src="/images/contacts.svg" className="contacts-header__right" />
      }>
      <div className="contacts-header__left">
        <Title className="contacts-header__title">{title}</Title>
      </div>
    </InfoHeaderContent>
  </StyledContactsHeader>
);

export default ContactsHeader;
