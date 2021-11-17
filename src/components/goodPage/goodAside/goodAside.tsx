import cn from 'classnames';
import CheckmarkIcon from 'components/icons/checkmarkIcon';
import Loader from 'components/Loader/Loader';
import useGoodsAside from 'hooks/goodPage/useGoodAside';
import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled/styled';
import { Good } from 'types/good';
import Button from 'ui-kit/button/button';
import Counter from 'ui-kit/counter/counter';
import Input from 'ui-kit/input/input';
import { formatPrice } from 'utils/price';

interface StyledContainerProps {
  isOpen: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  width: 323px;
  border-radius: 8px;
  height: 100%;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 236px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .good-aside__add-to-cart {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    padding: 35px 40px 37px 40px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 35px 20px 33px 20px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      padding: 0 15px 15px 15px;
    }
  }

  .good-aside__counter {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 40px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
    }
  }

  .good-aside__price-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .good-aside__price-wrapper-shelf {
    margin-bottom: 67px;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
      margin-bottom: 10px;
    }
  }

  .good-aside__info-per-one {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .good-aside__quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 30px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.grey};
    ${({ theme }) => theme.typography.text16x20}
  }

  .good-aside__price-per-one {
    margin-left: 25px;
    ${({ theme }) => theme.typography.text16x20}
  }

  .good-aside__price-current {
    ${({ theme }) => theme.typography.text30x30Bold};
  }

  .good-aside__price-old {
    ${({ theme }) => theme.typography.text16x20LineThrough};
    opacity: 0.3;
    margin-top: 5px;
  }

  .good-aside__availability {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.emerald};
    ${({ theme }) => theme.typography.text14x18};
    max-width: 80px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-left: 0;
      margin-top: 12px;
      max-width: 100%;
    }
  }

  .good-aside__button.good-aside__custom-button {
    ${({ theme }) => theme.typography.text16x20};
    position: relative;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 27px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 32px;
      ${({ theme }) => theme.typography.text14x18};
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
    }
  }

  .good-aside__city {
    ${({ theme }) => theme.typography.text14x18};
    margin-bottom: 7px;
  }

  .good-aside__description {
    ${({ theme }) => theme.typography.text14x18};
    margin-bottom: 16px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 19px;
    }
  }

  .good-aside__link {
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  .good-aside__feedback {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: ${({ theme }) => theme.colors.grey};
    padding: 26px 40px 38px 40px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 10px 20px 29px 20px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      padding: 64px 15px 58px 15px;
    }
  }

  .good-aside__feedback {
    position: relative;
  }

  .good-aside__feedback-text {
    ${({ theme }) => theme.typography.text14x18Bold};
  }

  .good-aside__feedback-button {
    position: absolute;
    bottom: 14px;
    right: 0;
    transform: translateX(50%);
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    width: 62px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      bottom: 0;
      right: 0;
      transform: translateY(50%);
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      bottom: 20px;
      right: 16px;
      transform: none;
    }
  }

  .good-aside__title {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
      text-align: center;
      margin-bottom: 31px;
      ${({ theme }) => theme.typography.text16x20Bold};
    }
  }

  .good-aside__green {
    color: ${({ theme }) => theme.colors.emerald};
  }

  .good-aside__orange {
    color: ${({ theme }) => theme.colors.california};
  }
  .good-aside__red {
    color: ${({ theme }) => theme.colors.red};
  }

  .good-aside__email {
    margin-bottom: 10px;
  }

  .good-aside__report-button {
    margin-bottom: 67px;
    width: 100%;
  }

  .good-aside__checkmark {
    position: absolute;
    left: 17px;
    top: 24px;
    color: ${({ theme }) => theme.colors.emerald};
  }

  .goods-aside__loader {
    top: 50%;
    transform: translate(50%, -50%);
  }

  .good-aside__title-shelf {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
      ${({ theme }) => theme.typography.text14x18};
      text-decoration: underline;
      margin-bottom: 10px;

      & > br {
        display: none;
      }
    }
  }
`;

interface GoodAsideProps {
  className?: string;
  isOpen?: boolean;
  good: Good;
  isShelf?: boolean;
}

const GoodAside: FC<GoodAsideProps> = ({
  className,
  isOpen = false,
  good,
  isShelf,
}) => {
  const { price, oldPrice, restQuantity, minQuantity } = good;
  const {
    count,
    goodsInCart,
    isGoodInCart,
    isCartGoodsLoading,
    handleIncrease,
    handleDecrease,
    handleAddToCart,
    handleRedirectToCart,
  } = useGoodsAside(good);

  return (
    <StyledContainer className={className} isOpen={isOpen}>
      {(isCartGoodsLoading || !goodsInCart) && (
        <Loader className="goods-aside__loader" />
      )}
      <div
        className={cn('good-aside__add-to-cart', {
          'loading-overlay': isCartGoodsLoading || !goodsInCart,
        })}>
        <div className="good-aside__price-wrapper">
          <div className="good-aside__price">
            <p className="good-aside__price-current">{`${formatPrice(
              price,
            )} ₽`}</p>
            {!!oldPrice && (
              <p className="good-aside__price-old">{`${formatPrice(
                oldPrice,
              )} ₽`}</p>
            )}
          </div>
          {restQuantity > 3 && (
            <p className="good-aside__availability good-aside__green">
              в наличии
            </p>
          )}
          {restQuantity < 3 && restQuantity > 0 && (
            <p className="good-aside__availability good-aside__orange">
              скоро закончится
            </p>
          )}
          {!restQuantity && (
            <p className="good-aside__availability good-aside__red">
              закончился
            </p>
          )}
        </div>
        {!!restQuantity ? (
          <>
            <Counter
              className="good-aside__counter"
              value={count}
              min={minQuantity}
              max={restQuantity}
              increase={handleIncrease}
              decrease={handleDecrease}
            />
            <Button
              theme="secondary"
              className="good-aside__button good-aside__custom-button"
              onClick={isGoodInCart ? handleRedirectToCart : handleAddToCart}>
              {isGoodInCart ? (
                <>
                  <CheckmarkIcon className="good-aside__checkmark" />
                  {`${formatPrice(price * count)} ₽ — В корзине`}
                </>
              ) : (
                `${formatPrice(price * count)} ₽ — В корзину`
              )}
            </Button>
          </>
        ) : (
          <>
            <Input
              theme="small"
              placeholder="Email"
              className="good-aside__email"
            />
            <Button className="good-aside__report-button">
              Сообщить о поступлении
            </Button>
          </>
        )}

        <p className={`good-aside__title${isShelf ? '-shelf' : ''}`}>
          Способы <br />
          получения заказа
        </p>
        <p className="good-aside__city">Ваш город: Калининград</p>
        <p className="good-aside__description">
          — минимальный заказ 500 ₽<br />
          — доставка бесплатно и самовывоз
          <br />— оплата по счёту или онлайн
        </p>
        <Link href="/payment-and-delivery">
          <a className="good-aside__link">
            Подробнее о способах получения заказа
          </a>
        </Link>
      </div>
      <div className="good-aside__feedback">
        <p className="good-aside__feedback-text">
          Есть вопросы по товару?
          <br />
          Напишите нам в чат
        </p>
        <button className="good-aside__feedback-button">
          <img src="/images/question.svg" alt="question" />
        </button>
      </div>
    </StyledContainer>
  );
};

export default GoodAside;
