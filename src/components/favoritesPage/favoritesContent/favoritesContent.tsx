import { FC } from 'react';
import GoodsList from 'components/goodsList/goodsList';
import styled from 'styled/styled';
import goods from 'data/goods';
import FavoritesFiltes from 'components/favoritesPage/favoritesFilters/favoritesFilters';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 255px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-top: 125px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    padding-top: 85px;
  }

  .favorites-content__title {
    ${({ theme }) => theme.typography.text55x60};
    margin-bottom: 45px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30};
      margin-bottom: 30px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
    }
  }

  .favorites-content__goods {
    margin-bottom: 160px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 80px;
    }
  }

  .favorites-content__text {
    ${({ theme }) => theme.typography.text18x25}
  }

  .favorites-content__goods .favorites-content__goods-item {
    max-width: calc(20% - 25px);

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      max-width: calc(25% - 25px);
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: calc(25% - 20px);
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: calc((100% / 3) - 14px);
    }

    @media (max-width: 520px) {
      max-width: calc(50% - 14px);
    }
  }
`;

export const FavoritesContent: FC = () => {
  return (
    <StyledContainer className="wrapper">
      <h1 className="favorites-content__title">Избранное</h1>
      {Boolean(goods.length) && (
        <>
          <FavoritesFiltes />
          <GoodsList
            goods={goods}
            className="favorites-content__goods"
            isFavorites
            goodClassname="favorites-content__goods-item"
          />
        </>
      )}
      {!Boolean(goods.length) && (
        <p className="favorites-content__text">
          Ни один товар не добавлен в избранное для этого магазина
        </p>
      )}
    </StyledContainer>
  );
};

export default FavoritesContent;
