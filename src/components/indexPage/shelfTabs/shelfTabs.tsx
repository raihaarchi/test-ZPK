import React, { FC, useState } from 'react';
import DiscountTab from 'ui-kit/discountTab/discountTab';
import styled from 'styled/styled';

interface StyledContainerProps {
  activeIndex: number;
}

const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  width: 555px;

  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    max-width: 450px;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 287px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
  }

  .shelfTabs__amount-wrapper {
    position: absolute;
    top: 140px;
    left: -100px;
    width: 153px;
    height: 153px;
    background: ${(props) => props.theme.colors.yellow};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: ${(props) => props.theme.colors.black};

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      width: 100px;
      height: 100px;
      top: 133px;
      left: -50px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 71px;
      height: 71px;
      top: 140px;
      left: -66px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      top: 88px;
      left: 0px;
    }

    .shelfTabs__amount {
      ${({ theme }) => theme.typography.text55x60}
      line-height: 1;

      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        ${({ theme }) => theme.typography.text30x30}
      }

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text18x20}
        line-height: 1;
      }
    }

    .shelfTabs__text {
      ${({ theme }) => theme.typography.text18x20}
      line-height: 1;
      text-align: center;
      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        ${({ theme }) => theme.typography.text16x20}
        line-height: 1;
      }

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        font-size: 12px;
        line-height: 10px;
      }
    }
  }

  .shelfTabs__discount {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: ${(props) => props.theme.colors.red};
    ${({ theme }) => theme.typography.text18x26Bold}
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 40px;
      height: 40px;
      top: 10px;
      ${({ theme }) => theme.typography.text12x15}
    }
  }

  .shelfTabs__list {
    overflow: hidden;
    margin-bottom: 55px;
    background-image: url('/images/shelf-icon.svg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 30px;
    }

    .shelfTabs__list-container {
      display: flex;
      transition: all 0.5s;
      transform: ${(props) => `translateX(${props.activeIndex * -100}%)`};

      .shelfTabs__image-wrapper {
        padding-bottom: 28px;
        height: 348px;
        width: 555px;
        min-width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          height: 180px;
          width: 287px;
          padding-bottom: 12px;
        }

        @media (max-width: ${(props) => props.theme.screens.mobile}) {
          max-height: 348px;
          max-width: 555px;
          height: 100%;
          width: 100%;
          height: auto;
        }

        .shelfTabs__image {
          max-height: 100%;
          max-width: 92%;
        }
      }
    }
  }

  .shelfTabs__tabs-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .shelfTabs__tab {
      margin-right: 10px;
      margin-left: 10px;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-right: 7.5px;
        margin-left: 7.5px;
        margin-bottom: 18px;
      }
    }
  }
`;

interface ShelfTabsPropsType {
  data: {
    id: number;
    image: string;
    oldPrice: number;
    currentPrice: number;
    amount: number;
    discount: number;
  }[];
}

const ShelfTabs: FC<ShelfTabsPropsType> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabClick = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <StyledContainer activeIndex={activeIndex}>
      {!!data.length && (
        <>
          <div className="shelfTabs__amount-wrapper">
            <p className="shelfTabs__amount">{data[activeIndex].amount}</p>
            <p className="shelfTabs__text">
              товаров <br /> на полке
            </p>
          </div>

          <div className="shelfTabs__discount">{`-${data[activeIndex].discount}%`}</div>
        </>
      )}

      <div className="shelfTabs__list">
        <div className="shelfTabs__list-container">
          {data.map(({ id, image }) => (
            <div key={id} className="shelfTabs__image-wrapper">
              <img
                src={image}
                alt=""
                className="shelfTabs__image"
                key={`shelfTabs__list-${id}`}
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="shelfTabs__tabs-wrapper">
        {data.map((item, i) => (
          <DiscountTab
            key={item.id}
            oldPrice={item.oldPrice}
            currentPrice={item.currentPrice}
            className="shelfTabs__tab"
            isActive={activeIndex === i}
            onClick={() => onTabClick(i)}
          />
        ))}
      </div>
    </StyledContainer>
  );
};

export default ShelfTabs;
