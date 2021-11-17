import React, { FC } from 'react';
import styled from 'styled/styled';
import Title from 'components/info/infoHeaderContent/title/title';
import InfoHeaderContent from 'components/info/infoHeaderContent/infoHeaderContent';
import Description from 'components/info/infoHeaderContent/description/description';

interface StyleSuppliersHeader {
  className: string;
}

const StyledSuppliersHeader = styled.section<StyleSuppliersHeader>`
  .suppliers-header__left {
    max-width: 420px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: 334px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 100%;
      align-self: start;
      margin-bottom: 19px;
    }
  }

  .suppliers-header__right {
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

  .suppliers-header__title {
    margin-bottom: 33px;

    & > br {
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        display: none;
      }
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 10px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 20px;
    }
  }
`;

type SuppliersHeader = {
  title: string;
  description: string;
};

const SuppliersHeader: FC<SuppliersHeader> = ({ title, description }) => (
  <StyledSuppliersHeader className="wrapper">
    <InfoHeaderContent
      img={
        <img
          src="/images/car-suppliers.svg"
          className="suppliers-header__right"
        />
      }>
      <div className="suppliers-header__left">
        <Title className="suppliers-header__title">{title}</Title>
        <Description>{description}</Description>
      </div>
    </InfoHeaderContent>
  </StyledSuppliersHeader>
);

export default SuppliersHeader;
