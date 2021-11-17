import styled from 'styled/styled';
import React from 'react';
import FaqIcon from 'components/icons/faqIcon';
import Title from 'components/info/infoHeaderContent/title/title';
import InfoHeaderContent from 'components/info/infoHeaderContent/infoHeaderContent';
import Description from 'components/info/infoHeaderContent/description/description';

const StyledContainer = styled.section`
  background: ${({ theme }) => theme.colors.grey};

  .header-content__left {
    max-width: 420px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: 334px;
    }
  }

  .header-content__right {
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

  .header-content__title {
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

const FaqPageContent = () => (
  <StyledContainer>
    <InfoHeaderContent
      isWrapper
      img={<FaqIcon className="header-content__right" />}>
      <div className="header-content__left">
        <Title className="header-content__title">
          Частые <br /> вопросы
        </Title>
        <Description>
          Если вы не нашли ответ на какой-то вопрос, напишите на
          <a href="mailto:zapokupki@team.vtbconnect.ru">
            &nbsp;zapokupki@team.vtbconnect.ru
          </a>
        </Description>
      </div>
    </InfoHeaderContent>
  </StyledContainer>
);

export default FaqPageContent;
