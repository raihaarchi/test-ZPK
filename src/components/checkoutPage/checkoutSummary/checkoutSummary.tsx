import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  padding: 45px 40px 24px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  width: 323px;
  height: 100%;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 236px;
    padding: 30px 20px 20px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
    box-shadow: none;
    height: auto;
    padding: 0 0 70px 0;
  }

  .checkout-summary__info {
    padding-bottom: 21px;
    border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    margin-bottom: 26px;
  }

  .checkout-summary__price {
    padding-bottom: 21px;
    border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    margin-bottom: 17px;
  }

  .checkout-summary__title {
    ${({ theme }) => theme.typography.text16x20Bold};
    margin-bottom: 16px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 3px;
    }
  }

  .checkout-summary__row {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }

    .checkout-summary__column {
      width: 50%;

      &:first-of-type {
        margin-right: 25px;

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          margin-right: 15px;
        }
      }
    }
  }

  .checkout-summary__field-name {
    ${({ theme }) => theme.typography.text14x18};
  }

  .checkout-summary__value {
    ${({ theme }) => theme.typography.text14x18Bold};
  }

  .checkout-summary__total {
    ${({ theme }) => theme.typography.text20x30Bold};
  }

  .checkout-summary__mobile-amount {
    display: none;
    ${({ theme }) => theme.typography.text12x15};
    opacity: 0.5;
    margin-bottom: 17px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
    }
  }

  .checkout-summary__mobile-header {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      .checkout-summary__mobile-header_amount {
        ${({ theme }) => theme.typography.text14x18};
      }

      .checkout-summary__mobile-header_total {
        ${({ theme }) => theme.typography.text20x30Bold};
      }
    }
  }
`;

interface CheckoutSummaryProps {
  className?: string;
  isOpen: boolean;
}

const CheckoutSummary: FC<CheckoutSummaryProps> = ({ className, isOpen }) => {
  return (
    <StyledContainer className={className}>
      {!isOpen && (
        <div className="checkout-summary__mobile-header">
          <p className="checkout-summary__mobile-header_amount">
            10 товаров, 10,5 кг
          </p>
          <p className="checkout-summary__mobile-header_total">1 230 ₽</p>
        </div>
      )}
      <p className="checkout-summary__title">Заказ</p>
      <p className="checkout-summary__mobile-amount">10 товаров, 10,5 кг</p>
      <div className="checkout-summary__info">
        <div className="checkout-summary__row">
          <div className="checkout-summary__column">
            <p className="checkout-summary__field-name">10 товаров</p>
          </div>
          <div className="checkout-summary__column">
            <p className="checkout-summary__value">3 730 ₽</p>
          </div>
        </div>

        <div className="checkout-summary__row">
          <div className="checkout-summary__column">
            <p className="checkout-summary__field-name">Скидки</p>
          </div>
          <div className="checkout-summary__column">
            <p className="checkout-summary__value">600 ₽</p>
          </div>
        </div>

        <div className="checkout-summary__row">
          <div className="checkout-summary__column">
            <p className="checkout-summary__field-name">Самовывоз</p>
          </div>
          <div className="checkout-summary__column">
            <p className="checkout-summary__value">бесплатно</p>
          </div>
        </div>
      </div>

      <div className="checkout-summary__price">
        <div className="checkout-summary__row">
          <div className="checkout-summary__column">
            <p className="checkout-summary__field-name">С НДС 20%</p>
          </div>
          <div className="checkout-summary__column">
            <p className="checkout-summary__value">2 430 ₽</p>
          </div>
        </div>

        <div className="checkout-summary__row">
          <div className="checkout-summary__column">
            <p className="checkout-summary__field-name">Без НДС</p>
          </div>
          <div className="checkout-summary__column">
            <p className="checkout-summary__value">3 080 ₽</p>
          </div>
        </div>

        <div className="checkout-summary__row">
          <div className="checkout-summary__column">
            <p className="checkout-summary__field-name">Предоплата</p>
          </div>
          <div className="checkout-summary__column">
            <p className="checkout-summary__value">100%</p>
          </div>
        </div>
      </div>
      <div className="checkout-summary__row">
        <div className="checkout-summary__column">
          <p className="checkout-summary__field-name">Итого к оплате</p>
        </div>
        <div className="checkout-summary__column">
          <p className="checkout-summary__total">3 080 ₽</p>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CheckoutSummary;
