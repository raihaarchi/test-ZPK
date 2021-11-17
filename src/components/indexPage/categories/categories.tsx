import React from 'react';
import CategoryCard from 'components/indexPage/categoryCard/categoryCard';
import Button from 'ui-kit/button/button';
import styled from 'styled/styled';
import theme from 'styled/theme';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ShopState } from 'reducers/shopSlice';

const StyledContainer = styled.section`
  margin-bottom: 120px;
  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 70px;
  }
  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 80px;
  }

  .categories__title {
    font-weight: 500;
    font-size: 55px;
    line-height: 60px;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 63px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      font-size: 30px;
      line-height: 30px;
      letter-spacing: -0.02em;
      margin-bottom: 18px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 23px;
    }
  }

  .categories__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    .categories__list-item {
      width: 20%;
      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        width: 50%;
      }
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      .categories__products-item {
        display: none;
      }
    }
  }

  .categories__button {
    width: 40%;
    height: auto;
    border-radius: 15px;
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: 50%;
    }

    .categories__button-text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 30px;
      line-height: 30px;
      letter-spacing: -0.02em;
      color: ${(props) => props.theme.colors.white};
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
      }
      .categories__button-icon {
        margin-top: 16px;
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          display: none;
        }
      }
      .categories__button-icon-mobile {
        display: none;
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          margin-top: 8px;
          display: block;
        }
      }
    }
  }
`;

const Categories = () => {
  const { selected: shop } = useSelector<RootState, ShopState>((s) => s.shop);
  const router = useRouter();

  const goToAllCategories = async () => {
    await router.push({
      pathname: '/catalog',
      query: { rcat: 0, shop: shop?.id },
    });
    window.scrollTo(0, 0);
  };

  return (
    <StyledContainer>
      <h2
        className="categories__title wrapper"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500">
        Популярные категории
      </h2>
      <div
        className="categories__list wrapper"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="500">
        <CategoryCard
          name="Красота и уход"
          image="/images/beauty.png"
          background={theme.colors.portage}
          onClick={() => null}
          className="categories__list-item"
        />
        <CategoryCard
          name="Напитки"
          image="/images/beverages.png"
          background={theme.colors.green}
          onClick={() => null}
          className="categories__list-item"
        />
        <CategoryCard
          name="Бытовая химия"
          image="/images/chemistry.png"
          background={theme.colors.yellow}
          onClick={() => null}
          className="categories__list-item"
        />
        <CategoryCard
          name="Бакалея"
          image="/images/grocery.png"
          background={theme.colors['peach-orange']}
          onClick={() => null}
          className="categories__list-item"
        />
        <CategoryCard
          name="Чай и Кофе"
          image="/images/tea.png"
          background={theme.colors['fall-green']}
          onClick={() => null}
          className="categories__list-item"
        />
        <CategoryCard
          name="Продукты"
          image="/images/products.png"
          background={theme.colors['light-purple']}
          onClick={() => null}
          className="categories__list-item categories__products-item"
        />
        <CategoryCard
          name="Кондитерские изделия"
          image="/images/confectionery.png"
          background={theme.colors['gulf-stream']}
          onClick={() => null}
          className="categories__list-item"
        />
        <CategoryCard
          name="Товары для животных"
          image="/images/feed.png"
          background={theme.colors.azalea}
          onClick={() => null}
          className="categories__list-item"
        />
        <Button
          theme="secondary"
          className="categories__button"
          onClick={goToAllCategories}>
          <div className="categories__button-text-wrapper">
            Все категории
            <img
              src="/images/arrow-right-big.svg"
              className="categories__button-icon"
              alt="arrow"
            />
            <img
              src="/images/arrow-mob.svg"
              className="categories__button-icon-mobile"
              alt="arrow"
            />
          </div>
        </Button>
      </div>
    </StyledContainer>
  );
};

export default Categories;
