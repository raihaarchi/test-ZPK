import React from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.section`
  background: transparent;
  margin-bottom: 120px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 80px;
  }

  .ourClients__text-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 88px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 41px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column;
      margin-bottom: 40px;
    }
  }

  .ourClients__title {
    ${({ theme }) => theme.typography.text55x60}
    color: ${(props) => props.theme.colors['cocoa-brown']};
    margin-right: 20px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30}
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }

  .ourClients__description {
    margin-top: 12px;
    ${({ theme }) => theme.typography.text18x25}
    color: ${(props) => props.theme.colors.black};
    max-width: 409px;
    margin-right: 88px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text16x20}
      margin-right: 0;
      max-width: 334px;
      margin-top: 0;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18}
      max-width: 100%;
    }
  }

  .ourClients__list-wrapper {
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
    .ourClients__list {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        align-items: baseline;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        align-items: flex-end;
        margin-left: -15px;
        margin-right: -15px;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }

  .ourClients__list-item {
    display: flex;
    flex-direction: column;
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: 38px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 15px;
      width: auto;
    }
    &:last-child {
      margin-right: 0;
    }

    .ourClients__icon {
      width: 100%;
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: auto;
        max-height: 160px;
      }
    }
  }

  .ourClients__item-name {
    ${({ theme }) => theme.typography.text30x30}
    text-align: center;
    margin-top: 36px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 8px;
      ${({ theme }) => theme.typography.text18x20}
      text-align: center;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-top: 20px;
    }
  }
`;

const OurClients = () => {
  return (
    <StyledContainer className="wrapper">
      <div
        className="ourClients__text-block"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500">
        <h2 className="ourClients__title">Для кого наш сервис</h2>
        <p className="ourClients__description">
          Вы можете быть юридическим лицом или ИП. Если закупка товаров для
          бизнеса — это ваша задача, то у нас вы всегда найдете подходящее
          предложение.
        </p>
      </div>
      <div className="ourClients__list-wrapper">
        <div className="ourClients__list">
          <div
            className="ourClients__list-item"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="300"
            data-aos-duration="500">
            <img
              src="/images/hotel.svg"
              alt="Гостиницы и отели"
              className="ourClients__icon"
            />
            <p className="ourClients__item-name">
              Гостиницы
              <br />и отели
            </p>
          </div>
          <div
            className="ourClients__list-item"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
            data-aos-duration="500">
            <img
              src="/images/cafe.svg"
              alt="Рестораны и кафе"
              className="ourClients__icon"
            />
            <p className="ourClients__item-name">
              Рестораны
              <br />и кафе
            </p>
          </div>
          <div
            className="ourClients__list-item"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="500"
            data-aos-duration="500">
            <img
              src="/images/shop.svg"
              alt="Магазин у дома"
              className="ourClients__icon"
            />
            <p className="ourClients__item-name">
              Магазин
              <br />у дома
            </p>
          </div>
          <div
            className="ourClients__list-item"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
            data-aos-duration="500">
            <img
              src="/images/market.svg"
              alt="Мини-маркет"
              className="ourClients__icon"
            />
            <p className="ourClients__item-name">
              Мини-
              <br />
              маркет
            </p>
          </div>
          <div
            className="ourClients__list-item"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            data-aos-duration="500">
            <img
              src="/images/office.svg"
              alt="Бизнес центры и офисы"
              className="ourClients__icon"
            />
            <p className="ourClients__item-name">
              Бизнес центры
              <br />и офисы
            </p>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default OurClients;
