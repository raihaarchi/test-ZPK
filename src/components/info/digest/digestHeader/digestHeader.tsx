import React, { FC } from 'react';
import InfoHeaderContent from 'components/info/infoHeaderContent/infoHeaderContent';
import Title from 'components/info/infoHeaderContent/title/title';
import Description from 'components/info/infoHeaderContent/description/description';
import styled from 'styled/styled';

const StyledDigestHeader = styled.div`
  .digest-header-content {
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      div {
        display: flex;
        flex-direction: column;
      }
    }
    &__left {
      height: 280px;
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        height: 150px;
      }
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        height: 100%;
      }
    }
    &__description {
      margin-top: 30px;
      max-width: 585px;
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        margin-top: 10px;
        max-width: 450px;
      }
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        max-width: 550px;
      }
    }
    &__right {
      width: 295px;
      height: 282px;
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        width: 166px;
        height: 160px;
      }
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        margin-top: 45px;
        width: 50%;
        min-width: 166px;
        height: auto;
      }
    }
  }
`;

type DigestHeaderProps = {
  title: string;
  description: string;
};

export const DigestHeader: FC<DigestHeaderProps> = ({ title, description }) => {
  return (
    <StyledDigestHeader>
      <InfoHeaderContent
        img={
          <img
            className="digest-header-content__right"
            src="/images/digest.svg"
            alt="digest"
          />
        }
        className="digest-header-content"
        isWrapper>
        <div className="digest-header-content__left">
          <Title className="digest-header-content__title">{title}</Title>
          <Description className="digest-header-content__description">
            {description}
          </Description>
        </div>
      </InfoHeaderContent>
    </StyledDigestHeader>
  );
};

export default DigestHeader;
