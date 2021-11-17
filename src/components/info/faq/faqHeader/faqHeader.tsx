import React, { FC } from 'react';
import styled from 'styled/styled';
import FaqIcon from 'components/icons/faqIcon';
import Title from 'components/info/infoHeaderContent/title/title';
import Description from 'components/info/infoHeaderContent/description/description';
import InfoHeaderContent from 'components/info/infoHeaderContent/infoHeaderContent';

const StyledFaqHeader = styled.section`
  .faq-header__left {
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

  .faq-header__right {
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

  .faq-header__title {
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

type FaqHeaderProps = {
  title: string;
  description: string;
  email: string;
};

const FaqHeader: FC<FaqHeaderProps> = ({ title, description, email }) => (
  <StyledFaqHeader>
    <InfoHeaderContent img={<FaqIcon className="faq-header__right" />}>
      <div className="faq-header__left">
        <Title className="faq-header__title">{title}</Title>
        <Description>
          {description}
          <a href="mailto:zapokupki@team.vtbconnect.ru">&nbsp;{email}</a>
        </Description>
      </div>
    </InfoHeaderContent>
  </StyledFaqHeader>
);

export default FaqHeader;
