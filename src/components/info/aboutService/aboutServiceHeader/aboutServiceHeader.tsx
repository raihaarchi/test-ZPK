import AboutServiceIcon from '../../../icons/aboutServiceIcon';
import Title from '../../infoHeaderContent/title/title';
import Description from '../../infoHeaderContent/description/description';
import InfoHeaderContent from '../../infoHeaderContent/infoHeaderContent';
import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledAboutServiceHeader = styled.div`
  .about-header-content {
    &__left {
      max-width: 584px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        max-width: 334px;
      }
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        max-width: 100%;
        align-self: start;
        margin-bottom: 19px;
      }
    }

    .about-header-content__title {
      margin-bottom: 30px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-bottom: 10px;
      }
    }

    &__right {
      width: 451px;
      height: 254px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        width: 264px;
        height: 140px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-top: 20px;
      }
    }
  }
`;

type AboutServiceHeaderProps = {
  title: string;
  description: string;
};

const AboutServiceHeader: FC<AboutServiceHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <StyledAboutServiceHeader>
      <InfoHeaderContent
        img={<AboutServiceIcon className="about-header-content__right" />}
        className="about-header-content">
        <div className="about-header-content__left">
          <Title className="about-header-content__title">{title}</Title>
          <Description>{description}</Description>
        </div>
      </InfoHeaderContent>
    </StyledAboutServiceHeader>
  );
};

export default AboutServiceHeader;
