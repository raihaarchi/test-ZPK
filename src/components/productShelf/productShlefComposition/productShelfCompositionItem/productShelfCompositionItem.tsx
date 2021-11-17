import React, { FC } from 'react';
import styled from 'styled/styled';
import { good } from 'types/productShelfDataType';

const StyledProductShelfCompositionItem = styled.div`
  padding: 25px 15px 22px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  position: relative;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 10px;
  }

  .good-item__count {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    width: 50px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors['dark-grey']};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    ${({ theme }) => theme.typography.text14x18}
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    height: 60px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text12x15};
      margin-bottom: 7px;
      height: 45px;
    }
  }

  .good-item__price-wrapper {
    display: flex;
    height: fit-content;
  }

  .good-item__total-price {
    ${({ theme }) => theme.typography.text20x30Bold};
    margin-right: 10px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18Bold};
    }
  }

  .good-item__price-per-one {
    ${({ theme }) => theme.typography.text14x18};
    align-self: center;
    margin-top: 2px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text12x15};
    }
  }
`;

type ProductShelfCompositionItemProps = {
  data: good;
};

const ProductShelfCompositionItem: FC<ProductShelfCompositionItemProps> = ({
  data: { photos, name, totalPrice, pricePerOne, count },
}) => (
  <StyledProductShelfCompositionItem>
    <div className="good-item__count">{count} шт</div>
    <div className="good-item__image-wrapper">
      <img
        className="good-item__image"
        src={(photos && photos[0]?.previewUrl) || '/images/box.svg'}
        alt={name}
      />
    </div>
    <p className="good-item__name">{name}</p>
    <div className="good-item__price-wrapper">
      <p className="good-item__total-price">{totalPrice} ₽</p>
      <p className="good-item__price-per-one">{pricePerOne} ₽/шт</p>
    </div>
  </StyledProductShelfCompositionItem>
);

export default ProductShelfCompositionItem;
