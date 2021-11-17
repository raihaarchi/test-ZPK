import styled from 'styled/styled';
import React from 'react';

const StyledProductShelfInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .product-shelf-info__quantity {
    ${({ theme }) => theme.typography.text18x25};
  }

  .product-shelf-info-prices {
    &__new {
      ${({ theme }) => theme.typography.text20x30Bold};
      margin-right: 10px;
    }
    &__old {
      ${({ theme }) => theme.typography.text16x20LineThrough};
      color: ${({ theme }) => theme.colors.black};
      opacity: 0.3;
    }
  }
`;

type ProductShelfInfoProps = {
  className?: string;
  count: number;
  currentPrice: number;
  oldPrice: number;
};

const ProductShelfInfo = ({
  className,
  count,
  currentPrice,
  oldPrice,
}: ProductShelfInfoProps) => (
  <StyledProductShelfInfo className={className}>
    <span className="product-shelf-info__quantity">{count} товаров</span>
    <div className="product-shelf-info-prices">
      <span className="product-shelf-info-prices__new">{currentPrice} ₽</span>
      <span className="product-shelf-info-prices__old">{oldPrice} ₽</span>
    </div>
  </StyledProductShelfInfo>
);

export default ProductShelfInfo;
