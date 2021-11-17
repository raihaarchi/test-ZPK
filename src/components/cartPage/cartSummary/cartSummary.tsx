import { FC } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { CartState } from 'reducers/cartSlice';
import Loader from 'components/Loader/Loader';
import { formatPrice } from 'utils/price';

const StyledContainer = styled.div`
  position: relative;
  padding: 46px 40px 30px;
  width: 323px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 236px;
    padding: 30px 20px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: auto;
    padding: 0 0 70px 0;
    box-shadow: none;
  }

  .cart-summary__title {
    ${({ theme }) => theme.typography.text16x20Bold};
    margin-bottom: 3px;
  }

  .cart-summary__subtitle {
    ${({ theme }) => theme.typography.text12x15};
    margin-bottom: 17px;
    opacity: 0.5;
  }

  .cart-summary__row {
    display: flex;
    align-items: center;

    .cart-summary__column {
      width: 50%;
      margin-right: 25px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-right: 9px;

        &:first-of-type {
          width: 57%;
        }

        &:last-child {
          width: 43%;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .cart-summary__amount {
    margin-bottom: 12px;
  }

  .cart-summary__discount {
    margin-bottom: 31px;
  }

  .cart-summary__field-name {
    ${({ theme }) => theme.typography.text14x18};
  }

  .cart-summary__field-value {
    ${({ theme }) => theme.typography.text14x18Bold};
  }

  .cart-summary__promocode-input-wrapper {
    margin-top: 10px;
  }

  .cart-summary__promocode {
    padding: 16px 0 24px;
    border-top: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    margin-bottom: 25px;

    .cart-summary__promocode-button-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .cart-summary__promocode-button {
      outline: none;
      cursor: pointer;
      ${({ theme }) => theme.typography.text14x18};
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }

    .cart-summary__promocode-button_active {
      border: none;
    }

    .cart-summary__promocode-button-close {
      display: flex;
      cursor: pointer;
      outline: none;
      height: 18px;
      width: 18px;
      align-items: center;
      justify-content: center;
    }

    .cart-summary__promocode-input-block {
      position: relative;

      .cart-summary__promocode-input {
        width: 100%;
        height: 40px;
        border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
        border-radius: 8px;
        outline: none;
        padding: 0 29px 0 10px;
        ${({ theme }) => theme.typography.text14x18};
      }

      .cart-summary__promocode-apply {
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  .cart-summary__total {
    margin-bottom: 39px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      margin-bottom: 32px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 0;
    }

    .cart-summary__total_title {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 8px;
    }

    .cart-summary__total_nds {
      margin-bottom: 8px;
    }

    .cart-summary__total_value-nds {
      ${({ theme }) => theme.typography.text20x30Bold};
    }
  }

  .cart-summary__button-wrapper {
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 0 15px 10px;
      background: ${({ theme }) => theme.colors.white};
    }

    .cart-summary__button {
      width: 100%;
    }
  }

  .cart-summary__mobile-header {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      .cart-summary__mobile-header_amount {
        ${({ theme }) => theme.typography.text14x18};
      }

      .cart-summary__mobile-header_total {
        ${({ theme }) => theme.typography.text20x30Bold};
      }
    }
  }

  .cart-summary__loader {
    top: 50%;
    transform: translateX(50%) translateY(-50%);
  }
`;

interface CartSummaryProps {
  className?: string;
  isOpen: boolean;
}

const CartSummary: FC<CartSummaryProps> = ({ className, isOpen }) => {
  const { cart, cartLoading } = useSelector<RootState, CartState>(
    (s) => s.cart,
  );

  // добавить, когда будет апи
  // const [isPromocodeShow, setIsPromocodeShow] = useState(false);
  // const [promocode, setPromocode] = useState('');

  // const openPromocode = () => {
  //   setIsPromocodeShow(true);
  // };

  // const closePromocode = () => {
  //   setIsPromocodeShow(false);
  //   setPromocode('');
  // };

  // const handlePromocode = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPromocode(e.target.value);
  // };

  const router = useRouter();

  const checkout = () => {
    router.push('/checkout');
  };

  return (
    <StyledContainer className={className}>
      {cartLoading && <Loader className="cart-summary__loader" />}
      <div className={cn({ 'loading-overlay': cartLoading })}>
        {!isOpen && (
          <div className="cart-summary__mobile-header">
            <p className="cart-summary__mobile-header_amount">
              {`${cart.itemsCount} товаров`}
            </p>
            <p className="cart-summary__mobile-header_total">{`${formatPrice(
              cart.sum,
            )} ₽`}</p>
          </div>
        )}
        <p className="cart-summary__title">Ваша корзина</p>
        <p className="cart-summary__subtitle">{`${cart.itemsCount} товаров`}</p>
        <div className="cart-summary__row cart-summary__amount">
          <div className="cart-summary__column">
            <p className="cart-summary__field-name">{`${cart.itemsCount} товаров`}</p>
          </div>
          <div className="cart-summary__column">
            <p className="cart-summary__field-value">{`${formatPrice(
              cart.sum,
            )} ₽`}</p>
          </div>
        </div>
        {/* <div className="cart-summary__row cart-summary__discount"> // добавить, когда будет апи
          <div className="cart-summary__column">
            <p className="cart-summary__field-name">Скидки</p>
          </div>
          <div className="cart-summary__column">
            <p className="cart-summary__field-value">600 ₽</p>
          </div>
        </div>
        <div className="cart-summary__promocode">
          <div className="cart-summary__promocode-button-wrapper">
            <button
              onClick={openPromocode}
              className={cn('cart-summary__promocode-button', {
                'cart-summary__promocode-button_active': isPromocodeShow,
              })}>
              Добавить промокод
            </button>
            {isPromocodeShow && (
              <button
                onClick={closePromocode}
                className="cart-summary__promocode-button-close">
                <img src="/images/close-small.svg" alt="close" />
              </button>
            )}
          </div>
          {isPromocodeShow && (
            <div className="cart-summary__row cart-summary__promocode-input-wrapper">
              <div className="cart-summary__column">
                <div className="cart-summary__promocode-input-block">
                  <input
                    value={promocode}
                    onChange={handlePromocode}
                    className="cart-summary__promocode-input"
                  />
                  {!!promocode && (
                    <button className="cart-summary__promocode-apply">
                      <TickRightIcon />
                    </button>
                  )}
                </div>
              </div>
              <div className="cart-summary__column">
                <p className="cart-summary__field-value">- 450 ₽</p>
              </div>
            </div>
          )}
        </div> */}
        <div className="cart-summary__total">
          <p className="cart-summary__total_title">Итого</p>
          <div className="cart-summary__row cart-summary__total_nds">
            <div className="cart-summary__column">
              <p className="cart-summary__field-name">С НДС 20%</p>
            </div>
            <div className="cart-summary__column">
              <p className="cart-summary__total_value-nds">{`${formatPrice(
                cart.sum,
              )} ₽`}</p>
            </div>
          </div>
          <div className="cart-summary__row">
            <div className="cart-summary__column">
              <p className="cart-summary__field-name">Без НДС</p>
            </div>
            <div className="cart-summary__column">
              <p className="cart-summary__field-value">{`${formatPrice(
                cart.sumWithoutVat,
              )} ₽`}</p>
            </div>
          </div>
        </div>
        <div className="cart-summary__button-wrapper">
          <Button
            className="cart-summary__button"
            theme="secondary"
            onClick={checkout}>
            К оформлению
          </Button>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CartSummary;
