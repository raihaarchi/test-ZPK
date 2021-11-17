import React from 'react';
import StepCard from 'components/indexPage/stepCard/stepCard';
import ArrowRoundedBottomAnimated from 'components/icons/arrowRoundedBottomAnimated';
import ArrowRoundedTopAnimated from 'components/icons/arrowRoundedTopAnimated';
import styled from 'styled/styled';
import theme from 'styled/theme';

const StyledContainer = styled.section`
  background: transparent;
  margin-bottom: 175px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 80px;
  }

  .steps__text-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 67px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 54px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column;
    }
  }

  .steps__title {
    ${({ theme }) => theme.typography.text55x60}
    color: ${(props) => props.theme.colors['cocoa-brown']};
    margin-right: 20px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30}
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 0;
      margin-bottom: 25px;
    }
  }

  .steps__description {
    margin-top: 12px;
    ${({ theme }) => theme.typography.text18x25}
    color: ${(props) => props.theme.colors.black};
    max-width: 409px;
    margin-right: 88px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 0;
      margin-right: 0;
      max-width: 334px;
      ${({ theme }) => theme.typography.text16x20}
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18}
    }
  }

  .steps__list-wrapper {
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      overflow: auto;
      margin-left: -15px;
      margin-right: -15px;
      padding-left: 15px;
      padding-right: 15px;
      display: flex;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        width: 0;
        display: none;
      }
    }

    .steps__list {
      display: flex;
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-left: -15px;
        margin-right: -15px;
        padding-left: 15px;
        padding-right: 15px;
      }

      .steps__item {
        position: relative;
        height: 100%;
        width: 100%;

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          min-width: 214px;
        }
        &:nth-of-type(1) {
          @media (max-width: ${(props) => props.theme.screens.mobile}) {
            margin-right: 15px;
          }
        }
        &:nth-of-type(2) {
          margin-right: -20px;
          margin-left: -20px;
          z-index: 2;
          margin-top: 60px;
          @media (max-width: ${(props) => props.theme.screens.tablet}) {
            margin-right: 20px;
            margin-left: 20px;
            margin-top: 0;
          }
          @media (max-width: ${(props) => props.theme.screens.mobile}) {
            margin-right: 15px;
            margin-left: 0;
          }
        }
        &:nth-of-type(3) {
          z-index: 3;
          margin-top: 20px;
          @media (max-width: ${(props) => props.theme.screens.tablet}) {
            margin-top: 0;
          }
        }

        .steps__first-step-card {
          @media (max-width: ${(props) => props.theme.screens.tablet}) {
            padding-left: 15px;
          }
        }

        .steps__next-icon-first {
          display: none;
          position: absolute;
          top: 68px;
          left: 35px;
          width: 210px;
          transform: translateX(-100%);
          pointer-events: none;
          @media (max-width: ${(props) => props.theme.screens.desktop}) {
            width: 150px;
            left: 60px;
          }
        }

        .steps__next-icon-second {
          display: none;
          position: absolute;
          top: 108px;
          left: 43px;
          transform: translateX(-100%);
          pointer-events: none;
          @media (max-width: ${(props) => props.theme.screens.desktop}) {
            width: 150px;
            left: 80px;
          }
        }

        &.aos-animate {
          .steps__next-icon-first {
            display: block;
            @media (max-width: ${(props) => props.theme.screens.tablet}) {
              display: none;
            }
          }

          .steps__next-icon-second {
            display: block;
            @media (max-width: ${(props) => props.theme.screens.tablet}) {
              display: none;
            }
          }
        }
      }
    }
  }
`;

const Steps = () => {
  return (
    <StyledContainer className="wrapper">
      <div
        className="steps__text-block"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500">
        <h2 className="steps__title">Зарабатывать просто</h2>
        <p className="steps__description">
          На сайте представлены товары без наценок напрямую от ведущих
          производителей, по минимальной цене, не зависящей от объёма партии
          заказа. Прямые поставки выбранного ассортимента осуществляются единым
          заказом.
        </p>
      </div>
      <div className="steps__list-wrapper">
        <div className="steps__list">
          <div
            className={'steps__item'}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="500">
            <StepCard
              stepIndex={'1'}
              title="Выберите товар"
              description="Откройте нужную категорию, выберите нужные вам товары и добавьте их в корзину"
              icon="/images/product.svg"
              background={theme.colors['light-purple']}
              imageAlt="хорошие цены для вашей корзины"
              buttonText="В каталог"
              onButtonClick={() => null}
              className="steps__first-step-card"
            />
          </div>
          <div
            className={'steps__item'}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="500"
            data-aos-delay="200">
            <StepCard
              stepIndex={'2'}
              title="Регистри&shy;руйтесь"
              description="Введите данные о вашей организации (понадобится ИНН) и перейдите к оформлению заказа"
              icon="/images/registration.svg"
              background={theme.colors.green}
              imageAlt="покупайте не выходя из дома"
              buttonText="Регистрация"
              onButtonClick={() => null}
            />
            <ArrowRoundedBottomAnimated className="steps__next-icon-first" />
          </div>
          <div
            className={'steps__item'}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="500"
            data-aos-delay="300">
            <StepCard
              stepIndex={'3'}
              title="Покупайте выгодно!"
              description="После регистрации получайте предложения по сниженным ценам и участвуйте в промоакциях"
              icon="/images/buy.svg"
              background={theme.colors.yellow}
              imageAlt="быстрая доставка"
              buttonText="Акции"
              onButtonClick={() => null}
            />
            <ArrowRoundedTopAnimated className="steps__next-icon-second" />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Steps;
