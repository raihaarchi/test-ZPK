import styled from 'styled/styled';
import Button from 'ui-kit/button/button';
import React, { FC } from 'react';
import productShelfType from 'types/productShelfDataType';
import Counter, { CounterPropsType } from 'ui-kit/counter/counter';
import ProductShelfInfo from '../productShelfInfo/productShelfInfo';

const StyledProductShelfPanel = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.colors.grey};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    height: 90px;
  }

  .panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    flex-wrap: wrap;

    &-left {
      display: flex;
      height: 100%;

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: 100%;
        height: fit-content;
        justify-content: center;
      }

      &__info {
        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          flex-direction: row;
          align-items: center;

          .product-shelf-info__quantity {
            ${({ theme }) => theme.typography.text14x18};
            margin-right: 105px;
          }
          .product-shelf-info-prices__new {
            ${({ theme }) => theme.typography.text14x18Bold};
          }
          .product-shelf-info-prices__old {
            ${({ theme }) => theme.typography.text12x15LineThrough};
          }
        }
      }

      &__discount {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        background: ${(props) => props.theme.colors.red};
        text-align: center;
        color: ${(props) => props.theme.colors.white};
        ${({ theme }) => theme.typography.text18x26Bold};
        margin-top: 11px;
        margin-right: 30px;

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          display: none;
        }
      }
    }

    &-right {
      display: flex;
      flex-direction: row;
      justify-content: center;

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: 100%;
        justify-content: center;
      }

      &__counter {
        width: 185px;
        height: 40px;
        margin-right: 10px;
      }

      &__btn {
        width: 118px;
        height: 40px;
      }
    }
  }
`;

interface ProductShelfPanelProps {
  data: productShelfType;
  counterProps: CounterPropsType;
}

const ProductShelfPanel: FC<ProductShelfPanelProps> = ({
  data,
  counterProps,
}) => {
  return (
    <StyledProductShelfPanel>
      <div className="panel wrapper">
        <div className="panel-left">
          <div className="panel-left__discount">-{data.discount}%</div>
          <ProductShelfInfo
            className="panel-left__info"
            count={data.count}
            currentPrice={data.currentPrice}
            oldPrice={data.oldPrice}
          />
        </div>
        <div className="panel-right">
          <Counter className="panel-right__counter" {...counterProps} />
          <Button className="panel-right__btn" theme="small">
            В корзину
          </Button>
        </div>
      </div>
    </StyledProductShelfPanel>
  );
};

export default ProductShelfPanel;
