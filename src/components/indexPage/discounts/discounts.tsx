import React from 'react';
import DiscountCard from 'components/indexPage/discountCard/discountCard';
import styled from 'styled/styled';
import theme from 'styled/theme';
import Carousel from 'ui-kit/carousel/carousel';

const TempData = [
  {
    id: 111,
    discount: 10,
    image: '/images/shampoo.png',
    background: theme.colors['hawkes-blue'],
    name: 'Шампунь мужской Ежедневный уход',
    currentPrice: 280,
    oldPrice: 300,
  },
  {
    id: 222,
    discount: 20,
    image: '/images/detergent.png',
    background: theme.colors.onahau,
    name: 'Чистящее средство для унитаза Туалетный утёнок',
    currentPrice: 99,
    oldPrice: 120,
  },
  {
    id: 333,
    discount: 15,
    image: '/images/candy.png',
    background: theme.colors.foam,
    name: 'Рот Фронт / Карамель Москвичка, 250 г',
    currentPrice: 84,
    oldPrice: 110,
  },
  {
    id: 444,
    discount: 10,
    image: '/images/kitekat.png',
    background: theme.colors.cruise,
    name: 'Корм для кошек Kitekat курица в желе',
    currentPrice: 63,
    oldPrice: 82,
  },
  {
    id: 555,
    discount: 5,
    image: '/images/shampoo.png',
    background: theme.colors['hawkes-blue'],
    name: 'Кофе растворимый Nescafe Gold, стеклянная банка',
    currentPrice: 262,
    oldPrice: 285,
  },
  {
    id: 666,
    discount: 10,
    image: '/images/detergent.png',
    background: theme.colors.onahau,
    name: 'Чистящее средство для унитаза Туалетный утёнок',
    currentPrice: 280,
    oldPrice: 300,
  },
  {
    id: 777,
    discount: 10,
    image: '/images/shampoo.png',
    background: theme.colors['hawkes-blue'],
    name: 'Шампунь мужской Ежедневный уход',
    currentPrice: 280,
    oldPrice: 300,
  },
  {
    id: 888,
    discount: 20,
    image: '/images/detergent.png',
    background: theme.colors.onahau,
    name: 'Чистящее средство для унитаза Туалетный утёнок',
    currentPrice: 99,
    oldPrice: 120,
  },
  {
    id: 999,
    discount: 15,
    image: '/images/candy.png',
    background: theme.colors.foam,
    name: 'Рот Фронт / Карамель Москвичка, 250 г',
    currentPrice: 84,
    oldPrice: 110,
  },
  {
    id: 1010,
    discount: 10,
    image: '/images/kitekat.png',
    background: theme.colors.cruise,
    name: 'Корм для кошек Kitekat курица в желе',
    currentPrice: 63,
    oldPrice: 82,
  },
];

const StyledContainer = styled.section`
  margin-bottom: 120px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 77px;
  }

  .discounts__title {
    ${({ theme }) => theme.typography.text55x60}
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 58px;
    padding-right: 137px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 43px;
      ${({ theme }) => theme.typography.text30x30}
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 60px;
      margin-bottom: 15px;
    }
  }

  .discounts__carousel_desktop {
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .discounts__carousel_tablet {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: block;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .discounts__carousel_mobile {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
    }
  }
`;

const Discounts = () => {
  return (
    <StyledContainer className="wrapper">
      <h2
        className="discounts__title"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500">
        Товары со скидкой
      </h2>
      <div data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
        <Carousel
          className="discounts__carousel_desktop"
          cellSpacing={25}
          customSettings={{ slidesToShow: 5, infinite: true }}>
          {TempData.map(
            ({
              discount,
              image,
              background,
              name,
              currentPrice,
              oldPrice,
              id,
            }) => (
              <DiscountCard
                key={id}
                discount={discount}
                image={image}
                background={background}
                name={name}
                currentPrice={currentPrice}
                oldPrice={oldPrice}
              />
            ),
          )}
        </Carousel>

        <Carousel
          className="discounts__carousel_tablet"
          cellSpacing={20}
          customSettings={{ slidesToShow: 4, infinite: true }}>
          {TempData.map(
            ({
              discount,
              image,
              background,
              name,
              currentPrice,
              oldPrice,
              id,
            }) => (
              <DiscountCard
                key={id}
                discount={discount}
                image={image}
                background={background}
                name={name}
                currentPrice={currentPrice}
                oldPrice={oldPrice}
              />
            ),
          )}
        </Carousel>

        <Carousel
          className="discounts__carousel_mobile"
          cellSpacing={15}
          customSettings={{ slidesToShow: 2, infinite: true }}>
          {TempData.map(
            ({
              discount,
              image,
              background,
              name,
              currentPrice,
              oldPrice,
              id,
            }) => (
              <DiscountCard
                key={id}
                discount={discount}
                image={image}
                background={background}
                name={name}
                currentPrice={currentPrice}
                oldPrice={oldPrice}
              />
            ),
          )}
        </Carousel>
      </div>
    </StyledContainer>
  );
};

export default Discounts;
