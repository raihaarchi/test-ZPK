import React, { Dispatch, HTMLAttributes, SetStateAction, FC } from 'react';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';
import Counter, { CounterPropsType } from 'ui-kit/counter/counter';
import productShelfType from 'types/productShelfDataType';
import ProductShelfInfo from '../productShelfInfo/productShelfInfo';

const StyledProductShelfPreview = styled.div`
  .product-shelf__wrapper {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  .product-shelf-tabs {
    display: flex;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }
  .product-shelf-preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 54px 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 15px 0 25px;
      flex-wrap: wrap;
    }

    &__left {
      position: relative;
    }

    &__img {
      width: 583px;
      height: 425px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        width: 334px;
        height: 243px;
      }

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        width: 290px;
        height: 210px;
      }
    }

    &__right {
      max-width: 410px;
      margin: 0 auto;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        max-width: 295px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        max-width: 100%;
        width: 100%;
      }
    }

    &__title {
      ${({ theme }) => theme.typography.text30x30};
      margin-bottom: 20px;
    }

    &__text {
      ${({ theme }) => theme.typography.text16x20};
      margin-bottom: 30px;
      max-width: 290px;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text14x18};
      }
    }

    &__discount {
      position: absolute;
      top: 43px;
      right: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      background: ${(props) => props.theme.colors.red};
      ${({ theme }) => theme.typography.text18x26Bold};
      text-align: center;
      color: ${(props) => props.theme.colors.white};
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        width: 60px;
        height: 60px;
        top: -30px;
        ${({ theme }) => theme.typography.text16x20}
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: 40px;
        height: 40px;
        top: 7px;
        ${({ theme }) => theme.typography.text12x15Bold}
      }
    }

    &__prices {
      display: flex;
      max-width: 243px;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 30px;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        max-width: 275px;
        justify-content: unset;
        margin-bottom: 20px;
      }
    }

    &__new-price {
      ${({ theme }) => theme.typography.text30x30Bold};
      order: 1;
    }

    &__old-price {
      ${({ theme }) => theme.typography.text16x20LineThrough};
      opacity: 0.3;
      width: 100%;
      margin-top: 6px;
      order: 3;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        order: 2;
        width: auto;
        height: fit-content;
        margin-top: 0;
        align-self: flex-end;
        margin-left: 10px;
      }
    }

    &__btn {
      max-width: 323px;
      width: 100%;
      height: 60px !important;

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        max-width: 275px;
        height: 40px !important;
      }

      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        max-width: 290px;
        width: 100%;
      }
    }
  }
`;

type StyledIsInStockProps = {
  isInStock: boolean;
};

const StyledIsInStock = styled.span<StyledIsInStockProps>`
  ${({ theme }) => theme.typography.text14x18};
  color: ${({ isInStock, theme }) =>
    isInStock ? theme.colors['dark-green'] : theme.colors.red};
  margin-top: 10px;
  order: 2;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    order: 3;
    margin-left: auto;
  }
`;

interface StyledTabProps extends HTMLAttributes<HTMLDivElement> {
  isSelected: boolean;
}

const StyledTab = styled.div<StyledTabProps>`
  padding: 18px 45px 17px 20px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-bottom: none;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  ${({ isSelected, theme }) =>
    isSelected ? `background-color: ${theme.colors.grey};` : ''}

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 18px 20px 9px 20px;
    min-width: 181px;
  }
`;

const StyledCounter = styled(Counter)`
  max-width: 323px;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    max-width: 275px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    max-width: 290px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

interface ProductShelfPreviewProps {
  data: productShelfType[];
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
  counterProps: CounterPropsType;
}

const ProductShelfPreview: FC<ProductShelfPreviewProps> = ({
  data,
  selectedTab,
  setSelectedTab,
  counterProps,
}) => {
  return (
    <StyledProductShelfPreview>
      <div className="product-shelf-tabs wrapper">
        {data.map(({ id, count, oldPrice, currentPrice }, i) => (
          <StyledTab
            isSelected={i === selectedTab}
            key={id}
            onClick={() => setSelectedTab(i)}>
            <ProductShelfInfo
              count={count}
              currentPrice={currentPrice}
              oldPrice={oldPrice}
            />
          </StyledTab>
        ))}
      </div>
      <section className="product-shelf__wrapper">
        <div className="wrapper">
          <div className="product-shelf-preview">
            <div className="product-shelf-preview__left">
              <img
                className="product-shelf-preview__img"
                src={data[selectedTab].image}
                alt=""
              />
              <div className="product-shelf-preview__discount">
                -{data[selectedTab].discount}%
              </div>
            </div>
            <div className="product-shelf-preview__right">
              <h4 className="product-shelf-preview__title">
                {data[selectedTab].count} товаров на полке
              </h4>
              <p className="product-shelf-preview__text">
                Мы укомплектовали наборы популярных у потребителей товаров.
                Выбирайте подходящий набор и экономьте свои время и деньги!
              </p>
              <div className="product-shelf-preview__prices">
                <span className="product-shelf-preview__new-price">
                  {data[selectedTab].currentPrice} ₽
                </span>
                <StyledIsInStock isInStock={data[selectedTab].isInStock}>
                  {data[selectedTab].isInStock ? 'в наличии' : 'нет в наличии'}
                </StyledIsInStock>
                <span className="product-shelf-preview__old-price">
                  {data[selectedTab].oldPrice} ₽
                </span>
              </div>
              <StyledCounter {...counterProps} />
              <Button className="product-shelf-preview__btn">
                {data[selectedTab].currentPrice} ₽ — В корзину
              </Button>
            </div>
          </div>
        </div>
      </section>
    </StyledProductShelfPreview>
  );
};

export default ProductShelfPreview;
