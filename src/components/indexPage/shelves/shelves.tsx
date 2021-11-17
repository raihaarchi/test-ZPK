import React from 'react';
import ArrowRightIcon from 'components/icons/arrowRight';
import Button from 'ui-kit/button/button';
import ShelfTabs from 'components/indexPage/shelfTabs/shelfTabs';
import styled from 'styled/styled';
import OutlineWhiteAnimatedIcon from 'components/icons/outlineWhiteAnimatedIcon';
import ArrowRightSmallIcon from 'components/icons/arrowRightSmall';
import Link from 'next/link';

const TempShelvesData = [
  {
    id: 1,
    image: '/images/shelf1.png',
    oldPrice: 2350,
    currentPrice: 2000,
    amount: 30,
    discount: 20,
  },
  {
    id: 2,
    image: '/images/shelf2.png',
    oldPrice: 3000,
    currentPrice: 3210,
    amount: 40,
    discount: 25,
  },
  {
    id: 3,
    image: '/images/shelf1.png',
    oldPrice: 4000,
    currentPrice: 4210,
    amount: 50,
    discount: 30,
  },
];

const StyledContainer = styled.section`
  margin-bottom: 120px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 80px;
    padding-left: 0;
    padding-right: 0;
  }

  .shelves__card {
    display: flex;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.blue};
    border-radius: 15px;
    padding: 40px 62px 60px 87px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      padding: 40px 50px 60px 40px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 37px 39px 29px 30px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      border-radius: 0;
      flex-direction: column;
      align-items: center;
      padding: 37px 15px 20px 15px;
    }

    .shelves__outline-wrapper {
      position: relative;
      display: inline-block;

      .shelves__outline {
        display: none;
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          height: 54px;
          width: 141px;
        }
        @media (max-width: ${(props) => props.theme.screens.mobile}) {
        }
      }
    }

    &.aos-animate {
      .shelves__outline {
        display: block;
        position: absolute;
        top: -21px;
        left: -25px;
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          top: -15px;
          left: -14px;
        }
      }
    }

    .shelves__text {
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: flex-start;
        margin-bottom: 28px;
      }
    }

    .shelves__title {
      ${({ theme }) => theme.typography.text55x60};
      color: ${(props) => props.theme.colors.white};
      max-width: 488px;
      margin-top: 11px;
      margin-bottom: 50px;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text30x30};
        max-width: 290px;
        margin-bottom: 40px;
        margin-top: 0;
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        max-width: 100%;
        margin-bottom: 23px;
      }
    }

    .shelves__description {
      ${({ theme }) => theme.typography.text18x25};
      color: ${(props) => props.theme.colors.white};
      max-width: 400px;
      margin-bottom: 39px;

      @media (max-width: ${(props) => props.theme.screens.desktop}) {
        max-width: 350px;
      }

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text14x18};
        margin-bottom: 40px;
        max-width: 245px;
      }
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        max-width: 288px;
        margin-bottom: 0;
      }
    }

    .shelves__button {
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        display: none;
      }
    }
    .shelves__button-mobile {
      display: none;
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        display: flex;
        margin: 24px auto auto;
      }
    }

    .shelves__arrow-icon {
      margin-left: 10px;
      color: ${(props) => props.theme.colors.blue};
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        display: none;
      }
    }

    .shelves__arrow-icon-small {
      display: none;
      color: ${(props) => props.theme.colors.blue};
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        display: block;
        margin-left: 15px;
      }
    }
  }
`;

const Shelves = () => {
  return (
    <StyledContainer className="wrapper">
      <div
        className="shelves__card"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500">
        <div className="shelves__text">
          <h2 className="shelves__title">
            <span className="shelves__outline-wrapper">
              Готовые
              <OutlineWhiteAnimatedIcon className="shelves__outline" />
            </span>{' '}
            полки товаров
          </h2>
          <p className="shelves__description">
            Мы укомплектовали наборы популярных у потребителей товаров.
            Выбирайте подходящий набор и экономьте свои время и деньги!
          </p>
          <Link href="/product-shelf">
            <a>
              <Button
                theme="secondary-accent"
                onClick={() => null}
                className="shelves__button">
                Смотреть полки
                <ArrowRightIcon className="shelves__arrow-icon" />
                <ArrowRightSmallIcon className="shelves__arrow-icon-small" />
              </Button>
            </a>
          </Link>
        </div>
        <div>
          <ShelfTabs data={TempShelvesData} />
          <Link href="/product-shelf">
            <a>
              <Button
                theme="secondary-accent"
                onClick={() => null}
                className="shelves__button-mobile">
                Смотреть полки
                <ArrowRightSmallIcon className="shelves__arrow-icon-small" />
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Shelves;
