import React, { FC } from 'react';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';

const StyledContainer = styled.div`
  margin-top: 45px;
  max-width: 584px;
  width: 100%;
  padding-bottom: 179px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-top: 30px;
    max-width: 100%;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-bottom: 80px;
  }

  .checkout-accepted__title {
    ${({ theme }) => theme.typography.text18x26Bold};
    margin-bottom: 16px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 19px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18Bold}
      margin-bottom: 10px;
    }
  }

  .checkout-accepted__description {
    ${({ theme }) => theme.typography.text18x25}
    margin-bottom: 43px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 40px;
    }
  }

  .checkout-accepted__info {
    max-width: 497px;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    margin-bottom: 123px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      max-width: 100%;
      margin-bottom: 100px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 60px;
    }
  }

  .checkout-accepted__row {
    display: flex;
    padding: 17px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 20px 0;
    }

    .checkout-accepted__column {
      width: 50%;

      &:first-of-type {
        margin-right: 25px;

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          margin-right: 15px;
        }
      }
    }
  }

  .checkout-accepted__text {
    ${({ theme }) => theme.typography.text18x25}

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text18x20}
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18}
    }
  }

  .checkout-accepted__status-info {
    margin-bottom: 27px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 20px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text18x25}
    }
  }

  .checkout-accepted__button.checkout-accepted__custom-button {
    max-width: 322px;
    width: 100%;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 60px;
      border-radius: 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 40px;
      border-radius: 8px;
      padding: 0 47px;
      width: auto;
    }
  }
`;

const CheckoutAccepted: FC = () => {
  return (
    <StyledContainer>
      <p className="checkout-accepted__title">Ваша заявка принята!</p>
      <p className="checkout-accepted__description">
        Мы уже обрабатываем ваш заказ. Вся информация об изменениях статуса
        будет присылаться в СМС. Если вам требуется помощь или консультация,
        свяжитесь с нами по телефону 8 (945) 660-72-01 (9:30 – 20:30)
      </p>
      <div className="checkout-accepted__info">
        <div className="checkout-accepted__row">
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">№ заказа</p>
          </div>
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">6734-34</p>
          </div>
        </div>
        <div className="checkout-accepted__row">
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">Создан</p>
          </div>
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">30.09.2020, 15:23</p>
          </div>
        </div>
        <div className="checkout-accepted__row">
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">Способ получения</p>
          </div>
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">Доставка</p>
          </div>
        </div>
        <div className="checkout-accepted__row">
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">Получатель</p>
          </div>
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">Магазин «Весна»</p>
          </div>
        </div>
        <div className="checkout-accepted__row">
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">Адрес</p>
          </div>
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">
              г. Калининград, Московское ш., 52, корп. 6, магазин «Весна»{' '}
            </p>
          </div>
        </div>
        <div className="checkout-accepted__row">
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">Комментарии</p>
          </div>
          <div className="checkout-accepted__column">
            <p className="checkout-accepted__text">Въезд со двора</p>
          </div>
        </div>
      </div>
      <p className="checkout-accepted__status-info checkout-accepted__text">
        Отслеживать статус заказа можно в личном кабинете в разделе Мои заказы.
      </p>
      <Button
        theme="secondary"
        className="checkout-accepted__button checkout-accepted__custom-button">
        Мои заказы
      </Button>
    </StyledContainer>
  );
};

export default CheckoutAccepted;
