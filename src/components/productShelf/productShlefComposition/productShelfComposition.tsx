import React, { FC } from 'react';
import styled from 'styled/styled';
import { good } from 'types/productShelfDataType';
import ProductShelfCompositionItem from './productShelfCompositionItem/productShelfCompositionItem';

const StyledProductShelfComposition = styled.div`
  .shelf-composition__title {
    ${({ theme }) => theme.typography.text30x30};
    margin-top: 55px;
    margin-bottom: 55px;
  }

  .shelf-composition-list {
    display: flex;
    flex-wrap: wrap;
  }

  .shelf-composition-list__item {
    flex-basis: calc(20% - 25px);
    margin-right: 25px;
    margin-bottom: 25px;
    color: unset;

    &:nth-of-type(5n) {
      margin-right: 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      flex-basis: calc(25% - 25px);

      &:nth-of-type(n) {
        margin-right: 25px;
      }

      &:nth-of-type(4n) {
        margin-right: 0;
      }
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      flex-basis: calc(25% - 20px);
      margin-bottom: 20px;

      &:nth-of-type(n) {
        margin-right: 20px;
      }
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex-basis: calc(33% - 14px);
      margin-bottom: 14px;

      &:nth-of-type(n) {
        margin-right: 14px;
      }

      &:nth-of-type(3n) {
        margin-right: 0;
      }
    }

    @media (max-width: 576px) {
      flex-basis: calc(50% - 14px);

      &:nth-of-type(n) {
        margin-right: 14px;
      }

      &:nth-of-type(2n) {
        margin-right: 0;
      }
    }
  }
`;

type ProductShelfCompositionProps = {
  goods: good[];
};

const ProductShelfComposition: FC<ProductShelfCompositionProps> = ({
  goods,
}) => (
  <StyledProductShelfComposition className="wrapper">
    <h3 className="shelf-composition__title">Состав полки</h3>
    <div className="shelf-composition-list">
      {goods.map((el) => (
        <div key={el.id} className="shelf-composition-list__item">
          <ProductShelfCompositionItem data={el} />
        </div>
      ))}
    </div>
  </StyledProductShelfComposition>
);

export default ProductShelfComposition;
