import React, { FC } from 'react';
import styled from 'styled/styled';
import MapMarker, { MapMarkerColor } from 'components/icons/mapMarker';
import Questions from 'components/indexPage/questions/questions';
import Description from '../infoHeaderContent/description/description';
import AboutServiceHeader from './aboutServiceHeader/aboutServiceHeader';
import { AboutServiceType } from 'types/aboutServiceTypes';

const StyledAboutServicePageContent = styled.section`
  .about-header-content {
    &__left {
      max-width: 584px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        max-width: 334px;
      }
    }

    .about-header-content__title {
      margin-bottom: 30px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        margin-bottom: 10px;
      }
    }

    &__right {
      width: 451px;
      height: 254px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        width: 264px;
        height: 140px;
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        margin-top: 20px;
      }
    }
  }
  .about-content {
    border-top: 2px solid #000;
    padding-top: 34px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__title {
      ${({ theme }) => theme.typography.text55x60};

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text30x30}
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        ${({ theme }) => theme.typography.text16x20Bold}
      }
    }

    &__text {
      margin-top: 16px;
      max-width: 409px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        max-width: 334px;
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        width: 100%;
      }
    }

    &__markers {
      margin-top: 36px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }

    &__marker {
      margin-right: 28px;
      display: flex;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        margin-top: 10px;
      }
    }
    &__marker-text {
      margin-left: 10px;
      ${({ theme }) => theme.typography.text14x18}
    }

    &__map-wrapper {
      margin-bottom: 175px;
      margin-top: 46px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        max-height: 331px;
        margin-top: 30px;
        margin-bottom: 140px;
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        margin-top: 20px;
        margin-bottom: 80px;
        padding: 0 15px;
      }
    }

    &__map {
      border: 1px solid ${({ theme }) => theme.colors.white};
      box-sizing: border-box;
      border-radius: 15px;
      height: 400px;
      width: 100%;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        max-height: 331px;
        margin-top: 30px;
        margin-bottom: 140px;
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        max-height: 300px;
      }
    }
  }
`;

type AboutServicePageContent = {
  data: AboutServiceType;
};

const AboutServicePageContent: FC<AboutServicePageContent> = ({
  data: { title, iframe, about, where, where_find },
}) => (
  <StyledAboutServicePageContent>
    <div className="wrapper">
      <AboutServiceHeader title={title} description={about} />
      <div className="about-content">
        <h3 className="about-content__title">{where}</h3>
        <Description className="about-content__text">{where_find}</Description>
        <div className="about-content__markers">
          <div className="about-content__marker">
            <MapMarker markerColor={MapMarkerColor.primary} />
            <span className="about-content__marker-text">Сервис запущен</span>
          </div>
          <div className="about-content__marker">
            <MapMarker markerColor={MapMarkerColor.secondary} />
            <span className="about-content__marker-text">
              Сервис будет запущен
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="layout-wrapper about-content__map-wrapper">
      <iframe src={iframe} className="about-content__map" frameBorder="0">
        Ваш браузер не поддерживается. Скачайте нормальный!
      </iframe>
    </div>
    <Questions isWhite />
  </StyledAboutServicePageContent>
);

export default AboutServicePageContent;
