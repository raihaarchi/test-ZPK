import styled from 'styled/styled';
import { SelectOption } from 'types/selectOption';
import PaymentList from './paymentList/paymentList';
import React, { FC, useEffect, useState } from 'react';
import ContentSection from './contentSection/contentSection';
import DeliveryContent from './deliveryContent/deliveryContent';
import PaymentAndDeliveryTypes, { City } from 'types/paymentAndDelivery';
import PaymentAndDeliveryHeader from './paymentAndDeliveryHeader/paymentAndDeliveryHeader';

const StyledPaymentAndDeliveryContent = styled.div`
  .payment-img {
    margin-top: 30px;
    position: relative;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: 256px;
      max-height: 140px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 214px;
      max-height: 117px;
      align-self: flex-start;
      margin-top: 20px;
    }

    & > img {
      max-width: inherit;
    }

    &__text {
      ${({ theme }) => theme.typography.text30x30};
      position: absolute;
      left: 114px;
      top: 95px;
      max-width: 200px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        left: 61px;
        top: 51px;
        max-width: 104px;
        ${({ theme }) => theme.typography.text14x18};
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        left: 51px;
        top: 42px;
        max-width: 104px;
        ${({ theme }) => theme.typography.text12x15};
      }
    }
  }

  .payment-and-delivery__map {
    width: 100%;
    height: 400px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    margin-bottom: 175px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      height: 350px;
      margin-bottom: 30px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      height: 300px;
    }
  }
`;

type PaymentAndDeliveryContentProps = {
  data: PaymentAndDeliveryTypes;
};

const PaymentAndDeliveryContent: FC<PaymentAndDeliveryContentProps> = ({
  data: { title, title_payment, title_delivery, cities, ...otherData },
}) => {
  const selectOptions = cities.map((el) => ({
    value: el.name,
    label: el.name,
  }));
  const [option, setOption] = useState<SelectOption>(selectOptions[0]);

  const [city, setCity] = useState<City>();

  useEffect(() => {
    setCity(cities.find((el) => el.name === option?.value));
  }, [option]);

  const deliveryInfo = [
    { title: 'Адрес склада', description: city?.address },
    { title: 'Время работы', description: city?.work_time },
  ];

  const conditions = Object.values(otherData);
  return (
    <StyledPaymentAndDeliveryContent className="wrapper">
      <PaymentAndDeliveryHeader
        title={title}
        cities={selectOptions}
        city={option}
        setCity={setOption}
      />
      <ContentSection
        title={title_payment}
        leftChildren={
          <div className="payment-img">
            <img
              src={`images/paymentImg.svg`}
              alt="Минимальная сумма заказа 500 руб"
            />
            <span className="payment-img__text">
              Минимальная сумма заказа {city?.min_sum} рублей
            </span>
          </div>
        }
        rightChildren={<PaymentList data={conditions} />}
      />
      <ContentSection
        title={title_delivery}
        rightChildren={
          <DeliveryContent
            deliveryContent={city?.delivery}
            deliveryInfo={deliveryInfo}
          />
        }
      />
      <iframe src={city?.iframe} className="payment-and-delivery__map">
        Ваш браузер не поддерживает плавающие фреймы!
      </iframe>
    </StyledPaymentAndDeliveryContent>
  );
};

export default PaymentAndDeliveryContent;
