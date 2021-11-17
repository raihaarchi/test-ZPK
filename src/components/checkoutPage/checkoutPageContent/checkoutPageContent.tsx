import React, { FC, useState } from 'react';
import cn from 'classnames';
import TickLeftIcon from 'components/icons/tickLeftIcon';
import Link from 'next/link';
import styled from 'styled/styled';
import CheckoutOrderInfo from 'components/checkoutPage/checkoutOrderInfo/checkoutOrderInfo';
import { FormProvider, useForm } from 'react-hook-form';
import CheckoutAccepted from '../checkoutAccepted/checkoutAccepted';

const StyledContainer = styled.div`
  padding-top: 225px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 121px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 80px;
  }

  .checkout-page-content__title {
    ${({ theme }) => theme.typography.text55x60};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30}
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold}
    }
  }

  .checkout-page-content__back-link {
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 15px;
    ${({ theme }) => theme.typography.text12x15}
    display: inline-flex;
    align-items: center;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 10px;
    }

    .checkout-page-content__back-icon {
      margin-right: 5px;
    }
  }

  .checkout-page-content__back-link-hidden {
    visibility: hidden;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .checkout-page-content__data {
    display: flex;
  }
`;

const CheckoutPageContent: FC = () => {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const methods = useForm<{
    receivingType: 'pickup' | 'delivery';
    comments: string;
    addressType: 'existing' | 'new';
    street: string;
    houseNumber: string;
    housebuilding: string;
    structure: string;
    floor: string;
    office: string;
    organizationName: string;
    existingAddress: { label: string; value: string };
  }>({
    defaultValues: {
      receivingType: 'pickup',
      comments: '',
      addressType: 'existing',
      street: '',
      houseNumber: '',
      housebuilding: '',
      structure: '',
      floor: '',
      office: '',
      organizationName: '',
      existingAddress: { label: 'Магазин «Весна»', value: 'test1' },
    },
    mode: 'onChange',
    shouldUnregister: false,
  });

  const { handleSubmit } = methods;

  const submitForm = handleSubmit(() => {
    setIsOrderConfirmed(true);
  });

  return (
    <StyledContainer className="wrapper">
      <Link href="/cart">
        <a
          className={cn('checkout-page-content__back-link', {
            'checkout-page-content__back-link-hidden': isOrderConfirmed,
          })}>
          <TickLeftIcon className="checkout-page-content__back-icon" />
          Вернуться в корзину
        </a>
      </Link>
      <h2 className="checkout-page-content__title">Оформление заказа</h2>
      {!isOrderConfirmed && (
        <FormProvider {...methods}>
          <form onSubmit={submitForm}>
            <CheckoutOrderInfo />
          </form>
        </FormProvider>
      )}
      {isOrderConfirmed && <CheckoutAccepted />}
    </StyledContainer>
  );
};

export default CheckoutPageContent;
