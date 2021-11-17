import React, { FC, useState } from 'react';
import styled from 'styled/styled';
import BottomSheet from 'ui-kit/bottomSheet/bottomSheet';
import CartSummary from 'components/cartPage/cartSummary/cartSummary';
import CartList from 'components/cartPage/cartList/cartList';
import CartFeedback from 'components/cartPage/cartFeedback/cartFeedback';
import PopularGoods from 'components/popularGoods/popularGoods';
import popularGoodsItems from 'data/goods';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { CartState } from 'reducers/cartSlice';
import Loader from 'components/Loader/Loader';
import CartAuthorization from '../cartAuthorization/cartAuthorization';

const StyledContainer = styled.section`
  padding-top: 255px;
  margin-bottom: 219px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 127px;
    margin-bottom: 289px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 85px;
    margin-bottom: 40px;
  }

  .cart-content__title {
    ${({ theme }) => theme.typography.text55x60};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30};
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
    }
  }

  .cart-content__loader {
    position: relative;
    min-height: 400px;
  }

  .cart-content__empty-cart {
    ${({ theme }) => theme.typography.text18x25};
    color: ${({ theme }) => theme.colors.black};
    margin-top: 38px;
    margin-bottom: 302px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 48px;
      margin-bottom: 367px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18};
      margin-top: 22px;
      margin-bottom: 105px;
    }
  }

  .cart-content__data {
    display: flex;
    margin-top: 45px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 30px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column;
    }

    .cart-content__items {
      width: 100%;
      margin-right: 25px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-right: 39px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-right: 0;
        margin-bottom: 19px;
      }
    }
  }

  .cart-content__copy-link-button {
    margin-bottom: 19px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .cart-content__cart {
    margin-bottom: 30px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 14px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 0;
    }
  }

  .cart-content__cart_desktop {
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .cart-content__unavailable {
    margin-top: 60px;

    .cart-content__unavailable-title {
      margin-bottom: 45px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-bottom: 30px;
      }
    }
  }

  .cart-content__popular-goods {
    margin-bottom: 80px;
  }

  .cart-content__autorization {
    margin-top: 25px;
  }
`;

const CartContent: FC = () => {
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const { goodsInCart, isCartGoodsLoading } = useSelector<RootState, CartState>(
    (s) => s.cart,
  );

  const openMobileCart = () => {
    setIsMobileCartOpen(true);
  };

  const closeMobileCart = () => {
    setIsMobileCartOpen(false);
  };

  return (
    <>
      <StyledContainer className="wrapper">
        <h2 className="cart-content__title">Корзина</h2>
        <CartAuthorization className="cart-content__autorization" />

        {(!goodsInCart || isCartGoodsLoading) && (
          <div className="cart-content__loader">
            <Loader />
          </div>
        )}
        {goodsInCart && !goodsInCart.length && !isCartGoodsLoading && (
          <p className="cart-content__empty-cart">
            Ни один товар не добавлен в корзину
          </p>
        )}
        {goodsInCart && !!goodsInCart.length && !isCartGoodsLoading && (
          <div className="cart-content__data">
            <div className="cart-content__items">
              <CartList goods={goodsInCart} />
            </div>
            <div className="cart-content__aside">
              {/* <Button // добавить, когда будет апи
                theme="underline"
                className="cart-content__copy-link-button">
                Скопировать ссылку на корзину
              </Button> */}
              <BottomSheet
                isOpen={isMobileCartOpen}
                open={openMobileCart}
                close={closeMobileCart}>
                <CartSummary
                  isOpen={isMobileCartOpen}
                  className="cart-content__cart"
                />
              </BottomSheet>
              <CartSummary
                isOpen={isMobileCartOpen}
                className="cart-content__cart cart-content__cart_desktop"
              />
              <CartFeedback />
            </div>
          </div>
        )}
      </StyledContainer>
      <PopularGoods
        title="Товары со скидкой"
        goods={popularGoodsItems}
        className="cart-content__popular-goods"
      />
    </>
  );
};

export default CartContent;
