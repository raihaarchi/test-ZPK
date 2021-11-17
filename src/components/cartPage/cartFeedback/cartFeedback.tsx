import { FC } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  padding: 19px 40px 23px 40px;
  width: 323px;
  background: ${({ theme }) => theme.colors['light-grey']};
  border-radius: 8px;
  position: relative;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 236px;
    padding: 19px 20px 33px 20px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
    padding: 25px 25px 38px 25px;
  }

  .cart-feedback__text {
    ${({ theme }) => theme.typography.text12x15};
    margin-bottom: 17px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 12px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 30px;
    }
  }

  .cart-feedback__questions {
    ${({ theme }) => theme.typography.text14x18Bold};
  }

  .cart-feedback__button {
    position: absolute;
    bottom: 14px;
    right: 0;
    transform: translateX(50%);
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    width: 62px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      bottom: 25px;
      right: 25px;
      transform: none;
    }
  }
`;

const CartFeedback: FC = () => {
  return (
    <StyledContainer>
      <p className="cart-feedback__text">
        Минимальная сумма заказа 500 руб. Весь процесс покупки, включая оплату и
        документооборот, осуществляется ОНЛАЙН в личном кабинете. Доступные
        способы и день можно выбрать при оформлении заказа. Оплата только
        онлайн.
      </p>
      <p className="cart-feedback__questions">
        Есть вопросы?
        <br />
        Напишите нам в чат
      </p>
      <button className="cart-feedback__button">
        <img src="/images/question.svg" alt="question" />
      </button>
    </StyledContainer>
  );
};

export default CartFeedback;
