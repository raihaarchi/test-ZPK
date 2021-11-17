import { FC } from 'react';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';

const StyledContainer = styled.div`
  padding: 38px 69px 32px 32px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    flex-direction: column;
    padding: 25px 30px 25px 30px;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 20px 35px 20px 15px;
  }

  .cart-authorization__text-wrapper {
    display: flex;
    align-items: flex-start;
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  .cart-authorization__text {
    ${({ theme }) => theme.typography.text18x25};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text16x20};
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18};
    }
  }

  .cart-authorization__buttons-wrapper {
    display: flex;
    align-items: flex-start;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      align-self: flex-end;
    }
  }

  .cart-authorization__sign-up {
    margin-right: 33px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: 15px;
    }
  }

  .cart-authorization__icon {
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 15px;
    }
  }
`;

interface CartAuthorizationProps {
  className?: string;
}

const CartAuthorization: FC<CartAuthorizationProps> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <div className="cart-authorization__text-wrapper">
        <img
          src="/images/attantion.svg"
          alt="внимание"
          className="cart-authorization__icon"
        />
        <p className="cart-authorization__text">
          Для доступа к полному каталогу и оформлению заказа вам необходимо
          зарегистрироваться или войти, если у вас уже есть личный кабинет.
        </p>
      </div>
      <div className="cart-authorization__buttons-wrapper">
        <Button className="cart-authorization__sign-up" theme="primary">
          Регистрация
        </Button>
        <Button theme="primary">Вход</Button>
      </div>
    </StyledContainer>
  );
};

export default CartAuthorization;
