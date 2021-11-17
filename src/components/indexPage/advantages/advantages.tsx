import React from 'react';
import AdvantagesCard from 'components/indexPage/advantagesCard/advantagesCard';
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

  .advantages__text-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 90px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 19px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column;
      margin-bottom: 25px;
    }
  }

  .advantages__title {
    ${({ theme }) => theme.typography.text55x60}
    color: ${(props) => props.theme.colors['cocoa-brown']};
    margin-right: 20px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30}
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 0px;
      margin-bottom: 25px;
    }
  }

  .advantages__description {
    margin-top: 12px;
    ${({ theme }) => theme.typography.text18x25};
    color: ${(props) => props.theme.colors.black};
    max-width: 409px;
    margin-right: 88px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 0;
      ${({ theme }) => theme.typography.text16x20}
      margin-right: 0;
      max-width: 334px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18}
    }
  }

  .advantages__list {
    display: flex;
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column;
    }
  }

  .advantages__item {
    height: 100%;
    width: 100%;
    &:nth-of-type(1) {
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 15px;
      }
    }
    &:nth-of-type(2) {
      margin-right: -20px;
      margin-left: -20px;
      z-index: 2;
      margin-top: 60px;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-left: -59px;
        margin-top: 105px;
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-right: 0px;
        margin-left: 0px;
        margin-top: 0px;
        margin-bottom: 15px;
      }
    }
    &:nth-of-type(3) {
      z-index: 3;
      margin-top: 20px;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-top: 45px;
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-top: 0px;
      }
    }
  }
`;

const Advantages = () => {
  return (
    <StyledContainer className="wrapper">
      <div
        className="advantages__text-block"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500">
        <h2 className="advantages__title">Наши преимущества</h2>
        <p className="advantages__description">
          Сегодня сервис ЗАПОКУПКИ – это товары от ведущих брендов, по выгодным
          ценам и на привлекательных условиях. Нам важно, чтобы сервис был не
          просто удобным для каждого клиента, но и приносил реальную выгоду.
        </p>
      </div>
      <div className="advantages__list">
        <div
          className={'advantages__item'}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="500">
          <AdvantagesCard
            title="Выгодные цены"
            description="Широкий ассортимент товаров по привлекательным ценам"
            icon="/images/favorable-prices.svg"
            background={theme.colors['light-purple']}
            imageAlt="хорошие цены для вашей корзины"
          />
        </div>
        <div
          className={'advantages__item'}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="200">
          <AdvantagesCard
            title="Онлайн и без комиссии"
            description="Процесс покупки товара, включая оплату и документооборот, осуществляется онлайн"
            icon="/images/online.svg"
            background={theme.colors.green}
            imageAlt="покупайте не выходя из дома"
          />
        </div>
        <div
          className={'advantages__item'}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="300">
          <AdvantagesCard
            title="Удобная логистика"
            description="Курьерская доставка или самовывоз укомплектованного заказа"
            icon="/images/logistics.svg"
            background={theme.colors.yellow}
            imageAlt="быстрая доставка"
          />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Advantages;
