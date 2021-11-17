import styled from 'styled/styled';
import Select from 'ui-kit/select/select';
import { SelectOption } from 'types/selectOption';
import Title from '../../infoHeaderContent/title/title';
import { OptionTypeBase, ValueType } from 'react-select';
import React, { FC, SetStateAction, Dispatch } from 'react';
import Description from '../../infoHeaderContent/description/description';
import InfoHeaderContent from '../../infoHeaderContent/infoHeaderContent';
import PaymentAndDeliveryIcon from 'components/icons/paymentAndDeliveryIcon';

const StyledPaymentAndDeliveryHeader = styled.div`
  .payment-and-delivery-header__left {
    max-width: 414px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: 334px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 100%;
      align-self: start;
      margin-bottom: 19px;
    }
  }

  .payment-and-delivery-header__title {
    margin-bottom: 33px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 10px;
    }
  }
  .payment-and-delivery-header__subtitle {
    display: inline;
  }

  .payment-and-delivery-header__right {
    max-width: 476px;
    max-height: 322px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: 207px;
      max-height: 140px;
    }
  }
  .payment-and-delivery-header__select {
    display: inline-block;
    width: fit-content;
    padding-left: 5px;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      display: block;
      padding-left: 0;
      font-size: ${({ theme }) => theme.typography.text16x20};
    }
  }
`;

type PaymentAndDeliveryHeaderProps = {
  title: string;
  cities: SelectOption[];
  city: ValueType<OptionTypeBase>;
  setCity: Dispatch<SetStateAction<SelectOption>>;
};

const PaymentAndDeliveryHeader: FC<PaymentAndDeliveryHeaderProps> = ({
  title,
  cities,
  city,
  setCity,
}) => {
  const handleCityChange = (val: SelectOption) => setCity(val);

  return (
    <StyledPaymentAndDeliveryHeader>
      <InfoHeaderContent
        img={
          <PaymentAndDeliveryIcon className="payment-and-delivery-header__right" />
        }>
        <div className="payment-and-delivery-header__left">
          <Title className="payment-and-delivery-header__title">{title}</Title>
          <Description>
            <p className="payment-and-delivery-header__subtitle">
              Информация о способах доставки и оплаты актуальна для города
            </p>
            <Select
              className="payment-and-delivery-header__select"
              options={cities}
              selectTheme="blue"
              instanceId={'city-select'}
              value={city}
              //@ts-ignore
              onChange={handleCityChange}
            />
          </Description>
        </div>
      </InfoHeaderContent>
    </StyledPaymentAndDeliveryHeader>
  );
};

export default PaymentAndDeliveryHeader;
