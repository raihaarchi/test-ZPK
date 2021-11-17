import styled from 'styled/styled';

const StyledContainer = styled.div`
  padding-bottom: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  display: flex;
  margin-bottom: 36px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-bottom: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    flex-direction: column;
  }

  .checkout-short-info__customer,
  .checkout-short-info__provider {
    max-width: 323px;
    width: 100%;
  }

  .checkout-short-info__customer {
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  .checkout-short-info__title {
    ${({ theme }) => theme.typography.text18x26Bold};
    margin-bottom: 16px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 15px;
    }
  }

  .checkout-short-info__name {
    ${({ theme }) => theme.typography.text18x25};
    margin-bottom: 8px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text16x20};
      margin-bottom: 10px;
    }
  }

  .checkout-short-info__inn,
  .checkout-short-info__shop {
    ${({ theme }) => theme.typography.text16x20};
    opacity: 0.5;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18};
    }
  }
`;

const CheckoutShortInfo = () => {
  return (
    <StyledContainer>
      <div className="checkout-short-info__customer">
        <p className="checkout-short-info__title">Покупатель</p>
        <p className="checkout-short-info__name">ООО «Лето»</p>
        <p className="checkout-short-info__inn">ИНН 7714390623</p>
        <p className="checkout-short-info__shop">Магазин «Весна»</p>
      </div>
      <div className="checkout-short-info__provider">
        <p className="checkout-short-info__title">Поставщик</p>
        <p className="checkout-short-info__name">ООО «ТДМ»</p>
        <p className="checkout-short-info__inn">ИНН 97150089903</p>
        <p className="checkout-short-info__shop">Склад ТДМ Калининград</p>
      </div>
    </StyledContainer>
  );
};

export default CheckoutShortInfo;
