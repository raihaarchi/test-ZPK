import { FC, useState } from 'react';
import cn from 'classnames';
import axios, { CancelTokenSource } from 'axios';
import DeleteIcon from 'components/icons/delete';
import OffIcon from 'components/icons/off';
import styled from 'styled/styled';
import Counter from 'ui-kit/counter/counter';
import Checkbox from 'ui-kit/checkbox/checkbox';
import { GoodInCart } from 'types/goodInCart';
import { RootState, useAppDispatch } from 'store';
import { addToCart, removeFromCart } from 'reducers/cartSlice';
import { ShopState } from 'reducers/shopSlice';
import { formatPrice } from 'utils/price';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const StyledContainer = styled.div`
  padding: 19px 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  display: flex;
  position: relative;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    flex-direction: column;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding: 20px 15px;
    margin: 0 -15px;
  }

  .cart-item__checkbox {
    margin-right: 67px;
    align-self: flex-start;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      margin-right: 20px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .cart-item__checkbox-tablet {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 20px;
      display: inline-flex;
    }
  }

  .cart-item__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .cart-item__image-wrapper {
    position: relative;
    width: 149px;
    height: 155px;
    border: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 98px;
      height: 98px;
      margin-right: 20px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: 88px;
      height: 88px;
      padding: 10px;
    }

    .cart-item__image {
      max-width: 100%;
      max-height: 100%;
    }

    .cart-item__discount {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 40px;
      height: 40px;
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
      ${({ theme }) => theme.typography.text12x15};
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cart-item__favorite {
      position: absolute;
      top: 0;
      right: 10px;
      color: ${({ theme }) => theme.colors['dark-grey']};
      cursor: pointer;
      display: flex;
      outline: none;
    }

    .cart-item__favorite_active {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  .cart-item__description {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .cart-item__name-wrapper {
      margin-bottom: 10px;
      display: flex;

      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        margin-bottom: 20px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 10px;
      }

      .cart-item__name {
        color: ${({ theme }) => theme.colors.black};
        flex: 1;
        ${({ theme }) => theme.typography.text18x25};
        margin-top: 3px;
        margin-right: 69px;

        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          ${({ theme }) => theme.typography.text14x18};
          margin-right: 30px;
        }

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          margin: 0;
        }
      }
    }
  }

  .cart-item__price-wrapper {
    align-self: flex-end;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      align-self: auto;
    }

    .cart-item__price {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 10px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text14x18Bold};
      }
    }
  }

  .cart-item__counter-wrapper {
    display: flex;
    align-items: center;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
    }

    .cart-item__counter {
      margin-right: 49px;

      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        margin-right: 22px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-right: 0;
        margin-bottom: 15px;
        width: 100%;
        max-width: 200px;
      }
    }

    .cart-item__total-price-wrapper {
      width: 162px;

      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        width: 110px;
      }

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        width: 75px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: 100%;
        display: flex;
        align-items: center;
      }

      .cart-item__total-price {
        ${({ theme }) => theme.typography.text20x30Bold};

        @media (max-width: ${(props) => props.theme.screens.desktop}) {
          ${({ theme }) => theme.typography.text16x20Bold};
        }

        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          ${({ theme }) => theme.typography.text14x18Bold};
        }

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          ${({ theme }) => theme.typography.text18x26Bold};
        }
      }

      .cart-item__total-price-old {
        ${({ theme }) => theme.typography.text16x20LineThrough};
        opacity: 0.3;

        @media (max-width: ${(props) => props.theme.screens.desktop}) {
          ${({ theme }) => theme.typography.text14x18Bold};
          margin-top: 5px;
        }

        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          ${({ theme }) => theme.typography.text12x15};
        }

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          ${({ theme }) => theme.typography.text16x20LineThrough};
          margin: 0 0 0 10px;
        }
      }
    }
  }

  .cart-item__delete-button {
    display: flex;
    cursor: pointer;
    outline: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      position: absolute;
      top: 21px;
      right: 15px;
    }

    .cart-item__delete-icon {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

let increaseCancelToken: CancelTokenSource;
let decreaseCancelToken: CancelTokenSource;

interface CartItemProps {
  goodInCart: GoodInCart;
  isSelected: boolean;
  handleCheckboxClick: (id: number) => void;
}

const CartItem: FC<CartItemProps> = ({
  goodInCart,
  isSelected,
  handleCheckboxClick,
}) => {
  const dispatch = useAppDispatch();
  const { selected: shop } = useSelector<RootState, ShopState>(
    (state) => state.shop,
  );

  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(goodInCart.quantity);

  const {
    id,
    good: { name, photo, id: goodId },
    price,
    oldPrice,
    discount,
  } = goodInCart;

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const addItemToCart = () => {
    if (typeof increaseCancelToken !== 'undefined') {
      increaseCancelToken.cancel('Operation canceled due to new request.');
    }

    increaseCancelToken = axios.CancelToken.source();

    setCount(count + goodInCart.good.minQuantity);

    dispatch(
      addToCart({
        good: goodInCart.good,
        quantity: count + goodInCart.good.minQuantity,
        cartLoading: true,
        cancelToken: increaseCancelToken.token,
      }),
    );
  };

  const removeItemFromCart = () => {
    if (typeof decreaseCancelToken !== 'undefined') {
      decreaseCancelToken.cancel('Operation canceled due to new request.');
    }

    decreaseCancelToken = axios.CancelToken.source();
    setCount(count - goodInCart.good.minQuantity);

    dispatch(
      removeFromCart({
        good: goodInCart.good,
        quantity: count - goodInCart.good.minQuantity,
        cartLoading: true,
        cancelToken: decreaseCancelToken.token,
      }),
    );
  };

  const deleteItemFromCart = () => {
    setCount(0);
    dispatch(
      removeFromCart({
        good: goodInCart.good,
        quantity: 0,
        cartLoading: true,
      }),
    );
  };

  return (
    <StyledContainer>
      <Checkbox
        checked={isSelected}
        onChange={() => handleCheckboxClick(id)}
        className="cart-item__checkbox"
      />
      <Checkbox
        checked={isSelected}
        onChange={() => handleCheckboxClick(id)}
        className="cart-item__checkbox-tablet"
        label="Выбрать"
      />
      <div className="cart-item__info">
        <div className="cart-item__image-wrapper">
          {!!discount && (
            <div className="cart-item__discount">{`-${discount}%`}</div>
          )}
          <button
            onClick={toggleFavorite}
            className={cn('cart-item__favorite', {
              ['cart-item__favorite_active']: isFavorite,
            })}>
            <OffIcon />
          </button>
          <img className="cart-item__image" src={photo.previewUrl} alt={name} />
        </div>
        <div className="cart-item__description">
          <div className="cart-item__name-wrapper">
            <Link
              href={{
                pathname: '/good/[id]',
                query: { id: goodId, shop: shop?.id },
              }}>
              <a className="cart-item__name">{name}</a>
            </Link>
            <div>
              <button
                className="cart-item__delete-button"
                onClick={deleteItemFromCart}>
                <DeleteIcon className="cart-item__delete-icon" />
              </button>
            </div>
          </div>

          <div className="cart-item__price-wrapper">
            <p className="cart-item__price">{`${formatPrice(price)} ₽/шт`}</p>
            <div className="cart-item__counter-wrapper">
              <Counter
                className="cart-item__counter"
                value={count}
                increase={addItemToCart}
                decrease={removeItemFromCart}
                min={goodInCart.good.minQuantity}
              />
              <div className="cart-item__total-price-wrapper">
                <p className="cart-item__total-price">
                  {`${formatPrice(price * count)} ₽`}
                </p>
                {!!oldPrice && (
                  <p className="cart-item__total-price-old">
                    {`${formatPrice(oldPrice * count)} ₽`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CartItem;
