import React, { FC, useState } from 'react';
import Button from 'ui-kit/button/button';
import styled from 'styled/styled';
import cn from 'classnames';
import OffIcon from 'components/icons/off';

const StyledContainer = styled.div`
  position: relative;
  padding-top: 30px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 20px;
  }

  .discountCard__discount {
    background: ${(props) => props.theme.colors.red};
    width: 60px;
    height: 60px;
    position: absolute;
    left: 20px;
    top: 0;
    transform: translateY(-50%);
    ${({ theme }) => theme.typography.text16x20}
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 1;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 40px;
      height: 40px;
      ${({ theme }) => theme.typography.text12x15}
      font-weight: bold;
    }
  }

  .discountCard__favorite {
    visibility: hidden;
    opacity: 0;
    color: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 0;
    right: 20px;
    transition: all 0.3s;
    cursor: pointer;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      visibility: visible;
      opacity: 1;
      top: 2px;
      right: 15px;
    }
  }

  .discountCard__favorite_active {
    color: ${({ theme }) => theme.colors.blue};
    visibility: visible;
    opacity: 1;
  }

  .discountCard__image-container {
    position: relative;
    background: ${(props) => props.color};
    border-radius: 15px;
    padding: 34px 24px 40px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 14px;
    }

    .discountCard__image {
      max-width: 100%;
      max-height: 300px;
      transition: all 0.3s;
    }
  }

  .discountCard__name {
    ${({ theme }) => theme.typography.text18x25}
    color: ${(props) => props.theme.colors['cocoa-brown']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    box-orient: vertical;
    height: 75px;
    margin-bottom: 9px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18}
      height: 54px;
      margin-bottom: 10px;
    }
  }

  .discountCard__price {
    display: flex;
    align-items: flex-end;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      align-items: center;
    }
    .discountCard__current-price {
      ${({ theme }) => theme.typography.text30x30Bold}
      color: ${(props) => props.theme.colors.black};
      margin-right: 20px;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text20x30Bold}
      }
    }

    .discountCard__old-price {
      ${({ theme }) => theme.typography.text16x20LineThrough}
      color: ${(props) => props.theme.colors.black};
      opacity: 0.3;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text12x15LineThrough}
      }
    }
  }

  .discountCard__button {
    margin-top: 14px;
    max-width: 100%;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      padding: 0 25px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 2px;
      height: 40px;
      width: auto;
      padding-left: 25px;
      padding-right: 25px;
      ${({ theme }) => theme.typography.text16x20}
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 30px;
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
      ${({ theme }) => theme.typography.text14x18}
    }
  }

  &:hover {
    .discountCard__favorite {
      opacity: 1;
      visibility: visible;
    }

    .discountCard__image {
      transform: scale(1.1);
    }
  }
`;

interface DiscountCardPropsType {
  image: string;
  background: string;
  name: string;
  currentPrice: number;
  oldPrice: number;
  discount: number;
}

const DiscountCard: FC<DiscountCardPropsType> = ({
  image,
  background,
  name,
  currentPrice,
  oldPrice,
  discount,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <StyledContainer color={background}>
      <div className="discountCard__image-container">
        <div className="discountCard__discount">{`-${discount}%`}</div>
        <button
          onClick={toggleFavorite}
          className={cn('discountCard__favorite', {
            ['discountCard__favorite_active']: isFavorite,
          })}>
          <OffIcon />
        </button>
        <img src={image} alt={name} className="discountCard__image" />
      </div>

      <div>
        <p className="discountCard__name">{name}</p>
        <div className="discountCard__price">
          <p className="discountCard__current-price">{`${currentPrice} ₽`}</p>
          <p className="discountCard__old-price">{`${oldPrice} ₽`}</p>
        </div>
        <Button
          theme="secondary"
          className="discountCard__button"
          onClick={() => null}>
          В корзину
        </Button>
      </div>
    </StyledContainer>
  );
};

export default DiscountCard;
