import React from 'react';
import Button from 'ui-kit/button/button';
import OutlineIcon from 'components/icons/outlineAnimatedIcon';
import SpiralIcon from 'components/icons/spiralAnimatedIcon';
import BoomIcon from 'components/icons/boomAnimatedIcon';
import LeafIcon from 'components/icons/leafAnimatedIcon';
import CandyIcon from 'components/icons/candyAnimatedIcon';
import ArrowRightIcon from 'components/icons/arrowRight';
import styled from 'styled/styled';
import ArrowRightSmallIcon from 'components/icons/arrowRightSmall';

const StyledContainer = styled.section`
  background: ${(props) => props.theme.colors.grey};

  .intro__block {
    position: relative;
    padding-top: 253px;
    padding-bottom: 160px;
    margin-bottom: 75px;
    background-image: url('/images/intro-banner.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: bottom right;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      background-size: auto 80%;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding-top: 172px;
      padding-bottom: 462px;
      margin-bottom: 63px;
      background-image: url('/images/intro-banner-tablet.png');
      background-size: auto 820px;
      background-position: right -190px bottom;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      padding-top: 301px;
      padding-bottom: 30px;
      margin-bottom: 60px;
      background-image: url('/images/intro-banner-mobile.png');
      background-position: top left;
      background-size: auto;
    }
  }

  .intro__title {
    ${({ theme }) => theme.typography.text80x80}
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 29px;
    max-width: 630px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      ${({ theme }) => theme.typography.text55x60}
      max-width: 600px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text55x60}
      max-width: 568px;
      margin-bottom: 21px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text30x30}
      margin-bottom: 15px;
    }
  }

  .intro__subtitle {
    ${({ theme }) => theme.typography.text18x25}
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 28px;
    max-width: 400px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 54px;
      max-width: 275px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 24px;
      ${({ theme }) => theme.typography.text16x20}
      max-width: 215px;
    }
  }

  .intro__outlineWrapper {
    position: relative;
    display: inline-block;
  }

  .intro__outlineIcon {
    position: absolute;
    left: -26px;
    top: -25px;
    pointer-events: none;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      width: 249px;
      height: 85px;
      top: -20px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: 128px;
      height: auto;
      top: -12px;
      left: -10px;
    }
  }

  .intro__button.intro__button-custom {
    height: 60px;
    padding-left: 40px;
    padding-right: 40px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      border-radius: 15px;
      font-size: 18px;
      line-height: 25px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 40px;
      padding-left: 15px;
      padding-right: 15px;
      font-size: 14px;
      line-height: 18px;
      border-radius: 8px;
    }
  }

  .intro__arrowRightIcon {
    margin-left: 10px;
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-left: 15px;
      height: 15px;
      width: 20px;
      display: none;
    }
  }

  .intro__arrowRightIconMobile {
    display: none;
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
      margin-left: 15px;
    }
  }

  .intro__spiralIcon {
    position: absolute;
    bottom: 440px;
    right: 226px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      bottom: 321px;
      right: 168px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      bottom: 563px;
      right: 94px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      bottom: auto;
      right: auto;
      top: 93px;
      left: 276px;
      height: 40px;
      width: 30px;
    }
  }

  .intro__boomIcon {
    position: absolute;
    bottom: 425px;
    right: 600px;
    pointer-events: none;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      bottom: 303px;
      right: 427px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      right: 339px;
      bottom: 428px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 52px;
      width: 52px;
      bottom: auto;
      right: auto;
      top: 111px;
      left: 102px;
    }
  }

  .intro__leafIcon {
    position: absolute;
    bottom: 283px;
    right: 253px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      bottom: 193px;
      right: 179px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      right: 17px;
      bottom: 272px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 40px;
      width: 37px;
      bottom: auto;
      right: auto;
      top: 233px;
      left: 175px;
    }
  }

  .intro__candyIcon {
    position: absolute;
    bottom: 25px;
    right: 394px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      bottom: 15px;
      right: 286px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      bottom: 25px;
      right: 190px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 45px;
      width: 45px;
      bottom: auto;
      right: auto;
      top: 243px;
      left: 263px;
    }
  }
`;

const Intro = () => {
  return (
    <StyledContainer data-aos="fade-in" data-aos-once="true">
      <div className="intro__block wrapper">
        <SpiralIcon className="intro__spiralIcon" />
        <BoomIcon className="intro__boomIcon" />
        <LeafIcon className="intro__leafIcon" />
        <CandyIcon className="intro__candyIcon" />
        <h1 className="intro__title">
          <span className="intro__outlineWrapper">
            Онлайн
            <OutlineIcon className="intro__outlineIcon" />
          </span>
          -сервис покупок для вашего бизнеса
        </h1>
        <p className="intro__subtitle">
          ЗАПОКУПКИ — полностью цифровой сервис для ИП и юридических лиц
        </p>
        <Button
          theme="secondary"
          onClick={() => null}
          className="intro__button intro__button-custom">
          Узнайте больше
          <ArrowRightIcon className="intro__arrowRightIcon" />
          <ArrowRightSmallIcon className="intro__arrowRightIconMobile" />
        </Button>
      </div>
    </StyledContainer>
  );
};

export default Intro;
