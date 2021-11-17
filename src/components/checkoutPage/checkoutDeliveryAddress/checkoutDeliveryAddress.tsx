import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';
import Input from 'ui-kit/input/input';
import Radio from 'ui-kit/radio/radio';
import Select from 'ui-kit/select/select';

const StyledContainer = styled.div`
  padding-bottom: 55px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-bottom: 39px;
  }

  .checkout-delivery-address__existing {
    margin-bottom: 54px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 41px;
    }
  }

  .checkout-delivery-address__radio-existing {
    margin-bottom: 13px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 17px;
    }
  }

  .checkout-delivery-address__radio-new {
    margin-bottom: 30px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 19px;
    }
  }

  .checkout-delivery-address__city {
    ${({ theme }) => theme.typography.text14x18};
    opacity: 0.5;
    margin-bottom: 32px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .checkout-delivery-address__form {
    max-width: 497px;
    width: 100%;
  }

  .checkout-delivery-address__form-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12.5px;
    margin-left: -12.5px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: -10px;
      margin-left: -10px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: -8px;
      margin-left: -8px;
    }

    .checkout-delivery-address__field {
      width: 33.333%;
      padding: 0 12.5px;
      margin-bottom: 12px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        padding: 0 10px;
        margin-bottom: 20px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        padding: 0 8px;
        width: 50%;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    .checkout-delivery-address__street,
    .checkout-delivery-address__name {
      width: 100%;
    }
  }

  .checkout-delivery-address__select-existing-wrapper {
    display: flex;
    margin-bottom: 9px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      flex-direction: column-reverse;
      margin-bottom: 22px;
    }
  }

  .checkout-delivery-address__select-existing {
    max-width: 497px;
    width: 100%;
    margin-right: 25px;
  }

  .checkout-delivery-address__existing-text {
    ${({ theme }) => theme.typography.text14x18};
    opacity: 0.5;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      margin-bottom: 22px;
    }
  }
`;

const CheckoutDeliveryAddress: FC = () => {
  const { register, control, watch } = useFormContext();

  return (
    <StyledContainer>
      <div className="checkout-delivery-address__existing">
        <Radio
          value="existing"
          label="Выберите адрес доставки"
          name="addressType"
          ref={register}
          className="checkout-delivery-address__radio-existing"
        />
        <div className="checkout-delivery-address__select-existing-wrapper">
          <Controller
            control={control}
            name="existingAddress"
            render={({ onChange, value }) => (
              <Select
                onChange={onChange}
                value={value}
                className="checkout-delivery-address__select-existing"
                selectTheme="secondary"
                options={[
                  { label: 'Магазин «Весна»', value: 'test1' },
                  { label: 'Магазин «Лето»', value: 'test2' },
                  { label: 'Магазин «Осень»', value: 'test3' },
                  { label: 'Магазин «Зима»', value: 'test4' },
                ]}
              />
            )}
          />
          <p className="checkout-delivery-address__existing-text">
            Вы можете оформить доставку этого заказа только по городу
            Калининграду
          </p>
        </div>
        <Button type="button" theme="underline">
          Редактировать данные
        </Button>
      </div>
      <div className="checkout-delivery-address__new">
        <Radio
          value="new"
          label="Указать новый адрес"
          name="addressType"
          ref={register}
          className="checkout-delivery-address__radio-new"
        />
        <div className="checkout-delivery-address__form">
          <p className="checkout-delivery-address__city">г. Калининград</p>
          <div className="checkout-delivery-address__form-wrapper">
            <Input
              className="checkout-delivery-address__field checkout-delivery-address__street"
              theme="secondary"
              label="Улица"
              ref={register}
              name="street"
              disabled={watch('addressType') !== 'new'}
            />
            <Input
              className="checkout-delivery-address__field"
              theme="secondary"
              label="Дом"
              ref={register}
              name="houseNumber"
              disabled={watch('addressType') !== 'new'}
            />
            <Input
              className="checkout-delivery-address__field"
              theme="secondary"
              label="Корпус"
              ref={register}
              name="housebuilding"
              disabled={watch('addressType') !== 'new'}
            />
            <Input
              className="checkout-delivery-address__field"
              theme="secondary"
              label="Строение"
              ref={register}
              name="structure"
              disabled={watch('addressType') !== 'new'}
            />
            <Input
              className="checkout-delivery-address__field"
              theme="secondary"
              label="Этаж"
              ref={register}
              name="floor"
              disabled={watch('addressType') !== 'new'}
            />
            <Input
              className="checkout-delivery-address__field"
              theme="secondary"
              label="Офис"
              ref={register}
              name="office"
              disabled={watch('addressType') !== 'new'}
            />

            <Input
              className="checkout-delivery-address__field checkout-delivery-address__name"
              theme="secondary"
              label="Наименование организации (вывеска)"
              ref={register}
              name="organizationName"
              disabled={watch('addressType') !== 'new'}
            />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CheckoutDeliveryAddress;
