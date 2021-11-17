import OffIcon from 'components/icons/off';
import { FC, useEffect, useState } from 'react';
import styled from 'styled/styled';
import { Good } from 'types/good';
import Button from 'ui-kit/button/button';
import cn from 'classnames';
import MinusIcon from 'components/icons/minusIcon';
import PlusIcon from 'components/icons/plusIcon';
import Link from 'next/link';
import { RootState, useAppDispatch } from 'store';
import { addToCart, CartState, removeFromCart } from 'reducers/cartSlice';
import { useSelector } from 'react-redux';
import axios, { CancelTokenSource } from 'axios';
import { ShopState } from 'reducers/shopSlice';
import MinusIconMob from 'components/icons/minusIconMob';
import PlusIconMob from 'components/icons/plusIconMob';
import { GoodsFilterState } from 'reducers/goodsFilterSlice';

const StyledContainer = styled.div`
  padding: 25px 15px 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  position: relative;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 10px;
  }

  .good-item__discount {
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background: ${({ theme }) => theme.colors.red};
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ theme }) => theme.typography.text12x15Bold};
    color: ${({ theme }) => theme.colors.white};
  }

  .good-item__favorite {
    visibility: hidden;
    opacity: 0;
    color: ${({ theme }) => theme.colors['dark-grey']};
    position: absolute;
    top: 0;
    right: 10px;
    transition: all 0.3s;
    cursor: pointer;
    outline: none;
    display: flex;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      visibility: visible;
      opacity: 1;
    }
  }

  .good-item__favorite_active {
    color: ${({ theme }) => theme.colors.blue};
    visibility: visible;
    opacity: 1;
  }

  .good-item__link {
    display: block;
  }

  .good-item__image-wrapper {
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 31px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 115px;
      margin-bottom: 20px;
    }

    .good-item__image {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .good-item__name {
    ${({ theme }) => theme.typography.text16x20};
    color: ${({ theme }) => theme.colors.black};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    box-orient: vertical;
    margin-bottom: 12px;
    height: 60px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text12x15};
      margin-bottom: 7px;
      height: 45px;
    }
  }

  .good-item__price-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 11px;
    }

    .good-item__current-price {
      ${({ theme }) => theme.typography.text20x30Bold};

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text14x18};
        font-weight: bold;
      }
    }

    .good-item__old-price {
      ${({ theme }) => theme.typography.text16x20LineThrough};
      opacity: 0.3;
      margin-left: 10px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text12x15LineThrough};
      }
    }
  }

  .good-item__button {
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 100%;
    }
  }

  .good-item__amount-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .good-item__amount {
      ${({ theme }) => theme.typography.text16x20};
      color: ${({ theme }) => theme.colors.blue};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .good-item__amount-button-icon {
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        display: none;
      }
    }

    .good-item__amount-button-icon-mobile {
      display: none;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        display: block;
      }
    }
  }

  .good-item__count-button {
    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      padding: 0 10px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 0 6px;
    }
  }

  &:hover {
    .good-item__favorite {
      opacity: 1;
      visibility: visible;
    }
  }
`;

let increaseCancelToken: CancelTokenSource;
let decreaseCancelToken: CancelTokenSource;

interface GoodItemProps {
  good: Good;
  className?: string;
  isFavoriteDefault?: boolean;
  defaultCount?: number;
}

const GoodItem: FC<GoodItemProps> = ({
  good,
  className,
  isFavoriteDefault = false,
}) => {
  const { discount, photos, name, price, oldPrice, id, category } = good;

  const dispatch = useAppDispatch();
  const { goodsInCart, isCartGoodsLoading } = useSelector<RootState, CartState>(
    (s) => s.cart,
  );

  const { categories } = useSelector<RootState, GoodsFilterState>(
    (state) => state.goodsFilter,
  );

  const rootCategory = categories.find(
    (el) => !!el.children.find((item) => item.id === category.id),
  );

  const [isFavorite, setIsFavorite] = useState(isFavoriteDefault);
  const [count, setCount] = useState(0);

  const { selected: shop } = useSelector<RootState, ShopState>(
    (state) => state.shop,
  );

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleIncrease = () => {
    if (typeof increaseCancelToken !== 'undefined') {
      increaseCancelToken.cancel('Operation canceled due to new request.');
    }

    increaseCancelToken = axios.CancelToken.source();

    setCount(count + good.minQuantity);

    dispatch(
      addToCart({
        good,
        quantity: count + good.minQuantity,
        cancelToken: increaseCancelToken.token,
      }),
    );
  };

  const handleDecrease = () => {
    if (typeof decreaseCancelToken !== 'undefined') {
      decreaseCancelToken.cancel('Operation canceled due to new request.');
    }

    decreaseCancelToken = axios.CancelToken.source();

    setCount(count - good.minQuantity);

    dispatch(
      removeFromCart({
        good,
        quantity: count - good.minQuantity,
        cancelToken: decreaseCancelToken.token,
      }),
    );
  };

  useEffect(() => {
    if (goodsInCart) {
      setCount(goodsInCart.find((el) => el.good.id === good.id)?.quantity || 0);
    }
  }, [goodsInCart]);

  return (
    <StyledContainer className={className}>
      {!!discount && (
        <div className="good-item__discount">{`-${discount}%`}</div>
      )}
      <button
        onClick={toggleFavorite}
        className={cn('good-item__favorite', {
          ['good-item__favorite_active']: isFavorite,
        })}>
        <OffIcon />
      </button>

      <Link
        href={{
          pathname: '/good/[id]',
          query: {
            id,
            shop: shop?.id,
            rcat: rootCategory?.id,
            cat: category.id,
          },
        }}>
        <a className="good-item__link">
          <div className="good-item__image-wrapper">
            <img
              className="good-item__image"
              src={(photos && photos[0]?.previewUrl) || '/images/box.svg'}
              alt={name}
            />
          </div>
          <p className="good-item__name">{name}</p>
        </a>
      </Link>
      <div className="good-item__price-wrapper">
        <p className="good-item__current-price">{`${price}₽`}</p>
        {oldPrice && <p className="good-item__old-price">{`${oldPrice}₽`}</p>}
      </div>
      {!count && (
        <Button
          theme="primary"
          className={cn('good-item__button', {
            'loading-overlay': isCartGoodsLoading,
          })}
          onClick={handleIncrease}>
          В корзину
        </Button>
      )}
      {!!count && (
        <div
          className={cn('good-item__amount-wrapper', {
            'loading-overlay': isCartGoodsLoading,
          })}>
          <Button
            className="good-item__count-button"
            theme="small-accent"
            onClick={handleDecrease}>
            <MinusIcon className="good-item__amount-button-icon" />
            <MinusIconMob className="good-item__amount-button-icon-mobile" />
          </Button>

          <div className="good-item__amount">{`${count} шт`}</div>
          <Button
            className="good-item__count-button"
            theme="small"
            onClick={handleIncrease}>
            <PlusIcon className="good-item__amount-button-icon" />
            <PlusIconMob className="good-item__amount-button-icon-mobile" />
          </Button>
        </div>
      )}
    </StyledContainer>
  );
};

export default GoodItem;
