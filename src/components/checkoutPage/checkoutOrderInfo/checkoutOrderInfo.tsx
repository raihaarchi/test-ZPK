import React, { useState } from 'react';
import styled from 'styled/styled';
import CheckoutSummary from 'components/checkoutPage/checkoutSummary/checkoutSummary';
import CheckoutShortInfo from 'components/checkoutPage/checkoutShortInfo/checkoutShortInfo';
import CheckoutRadio from 'components/checkoutPage/checkoutRadio/checkoutRadio';
import { useFormContext } from 'react-hook-form';
import CheckoutComment from 'components/checkoutPage/checkoutComment/checkoutComment';
import Button from 'ui-kit/button/button';
import CheckoutDeliveryAddress from 'components/checkoutPage/checkoutDeliveryAddress/checkoutDeliveryAddress';
import BottomSheet from 'ui-kit/bottomSheet/bottomSheet';

const StyledContainer = styled.div`
  display: flex;
  margin-top: 5px;
  padding-bottom: 162px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-top: 30px;
    padding-bottom: 100px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-top: 20px;
    padding-bottom: 263px;
  }

  .checkout-order-info__delivery-wrapper {
    padding-top: 41px;
    flex: 1;
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: 39px;
      padding-top: 0;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 0;
    }
  }

  .checkout-order-info__receiving {
    border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    margin-bottom: 36px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 30px;
    }
  }

  .checkout-order-info__receiving-title {
    ${({ theme }) => theme.typography.text30x30};
    margin-bottom: 33px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 34px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 20px;
    }
  }

  .checkout-order-info__receiving-type {
    display: flex;
    margin-bottom: 61px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 30px;
    }
  }

  .checkout-order-info__pickup {
    margin-bottom: 79px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 30px;
    }
  }

  .checkout-order-info__pickup-radio {
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 10px;
    }
  }

  .checkout-order-info__pickup-store {
    ${({ theme }) => theme.typography.text18x26Bold};
    margin-bottom: 15px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 10px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18Bold};
    }
  }

  .checkout-order-info__pickup-address,
  .checkout-order-info__pickup-working-hours {
    ${({ theme }) => theme.typography.text18x25};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18};
    }
  }

  .checkout-order-info__pickup-period {
    margin-top: 29px;
    ${({ theme }) => theme.typography.text16x20};
    opacity: 0.5;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 20px;
      ${({ theme }) => theme.typography.text14x18};
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-top: 10px;
    }
  }

  .checkout-order-info__comment {
    margin-bottom: 59px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 40px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 0;
    }
  }

  .checkout-order-info__button-wrapper {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      flex-direction: column;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .checkout-order-info__button.checkout-order-info__custom-button {
    max-width: 322px;
    width: 100%;
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
      height: 60px;
      border-radius: 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 40px;
      border-radius: 8px;
      margin-bottom: 0;
    }
  }

  .checkout-order-info__submit-description {
    ${({ theme }) => theme.typography.text18x25};
    max-width: 410px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18};
      max-width: 100%;
    }
  }

  .checkout-order-info__summary {
    position: sticky;
    top: 40px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .checkout-order-info__button-mobile-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0 15px 10px 15px;
    background: ${({ theme }) => theme.colors.white};
  }
`;

const CheckoutOrderInfo = () => {
  const [isMobileSummaryOpen, setIsMobileSummaryOpen] = useState(false);

  const openMobileSummary = () => {
    setIsMobileSummaryOpen(true);
  };

  const closeMobileSummary = () => {
    setIsMobileSummaryOpen(false);
  };

  const { watch, register } = useFormContext();

  return (
    <StyledContainer>
      <div className="checkout-order-info__delivery-wrapper">
        <CheckoutShortInfo />

        <div className="checkout-order-info__receiving">
          <h3 className="checkout-order-info__receiving-title">
            Способ получения
          </h3>
          <div className="checkout-order-info__receiving-type">
            <CheckoutRadio
              className="checkout-order-info__pickup-radio"
              label="Самовывоз"
              description="Сегодня, бесплатно"
              value="pickup"
              name="receivingType"
              ref={register}
            />
            <CheckoutRadio
              label="Доставка"
              description="Завтра, 150 руб"
              value="delivery"
              name="receivingType"
              ref={register}
            />
          </div>
          {watch('receivingType') === 'pickup' && (
            <div className="checkout-order-info__pickup">
              <p className="checkout-order-info__pickup-store">
                Склад ТДМ Калининград
              </p>
              <p className="checkout-order-info__pickup-address">
                г. Калининград, Московское ш., 52, корп. 6{' '}
              </p>
              <p className="checkout-order-info__pickup-working-hours">
                Часы работы: пн-пт, 10:00 — 19:00
              </p>
              <p className="checkout-order-info__pickup-period">
                Срок хранения заказа 10 дней{' '}
              </p>
            </div>
          )}

          {watch('receivingType') === 'delivery' && <CheckoutDeliveryAddress />}
        </div>
        <CheckoutComment className="checkout-order-info__comment" />
        <div className="checkout-order-info__button-wrapper">
          <Button
            className="checkout-order-info__button checkout-order-info__custom-button"
            onClick={() => null}
            theme="secondary">
            Подтвердить заказ
          </Button>
          <p className="checkout-order-info__submit-description">
            После подтверждения заказа нашим специалистом, вам необходимо будет
            оплатить заказ с вашего электронного кошелька
          </p>
        </div>
      </div>
      <CheckoutSummary
        className="checkout-order-info__summary"
        isOpen={isMobileSummaryOpen}
      />
      <BottomSheet
        isOpen={isMobileSummaryOpen}
        open={openMobileSummary}
        close={closeMobileSummary}>
        <CheckoutSummary
          isOpen={isMobileSummaryOpen}
          className="checkout-order-info__summary-mobile"
        />
        <div className="checkout-order-info__button-mobile-wrapper">
          <Button
            className="checkout-order-info__button checkout-order-info__custom-button"
            onClick={() => null}
            theme="secondary">
            Подтвердить заказ
          </Button>
        </div>
      </BottomSheet>
    </StyledContainer>
  );
};

export default CheckoutOrderInfo;
