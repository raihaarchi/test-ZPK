import React, { FC, useState } from 'react';
import styled from 'styled/styled';
import GoodAside from 'components/goodPage/goodAside/goodAside';
import GoodInfo from 'components/goodPage/goodInfo/goodInfo';
import PopularGoods from 'components/popularGoods/popularGoods';
import popularGoodsItems from 'data/goods';
import theme from 'styled/theme';
import BottomSheet from 'ui-kit/bottomSheet/bottomSheet';
import { Good } from 'types/good';
import Breadcrumbs from 'ui-kit/breadcrumbs/breadcrumbs';
import useBreadcrumbs from 'hooks/catalogPage/useCatalogBreadcrumbs';

const StyledContainer = styled.section`
  .good-content__container {
    padding-top: 228px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding-top: 114px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      padding-top: 79px;
    }
  }

  .good-content__title {
    ${({ theme }) => theme.typography.text30x30};
    margin-bottom: 32px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 18px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 14px;
    }
  }

  .good-content__data {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom: 105px;
    border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding-bottom: 60px;
    }
  }

  .good-content__aside {
    position: sticky;
    top: 40px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .good-content__bottom-sheet {
    padding: 0;
  }

  .good-content__bredcrumbs {
    margin-bottom: 34px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 32px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 12px;
    }
  }
`;

type GoodContentProps = {
  isShelf?: boolean;
  good: Good;
};

const GoodContent: FC<GoodContentProps> = ({ isShelf, good }) => {
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  const { breadcrumbs } = useBreadcrumbs();

  const openMobileCart = () => {
    setIsMobileCartOpen(true);
  };

  const closeMobileCart = () => {
    setIsMobileCartOpen(false);
  };

  return (
    <StyledContainer>
      <div className="wrapper good-content__container">
        <Breadcrumbs className="good-content__bredcrumbs" links={breadcrumbs} />
        <h1 className="good-content__title">{good.name}</h1>
        <div className="good-content__data">
          <GoodInfo good={good} isShelf={isShelf} />
          <BottomSheet
            className="good-content__bottom-sheet"
            isOpen={isMobileCartOpen}
            open={openMobileCart}
            close={closeMobileCart}
            initialHeight={139}>
            <GoodAside
              className="good-content__aside-mobile"
              isOpen={isMobileCartOpen}
              isShelf={isShelf}
              good={good}
            />
          </BottomSheet>
          <GoodAside
            className="good-content__aside"
            isShelf={isShelf}
            good={good}
          />
        </div>
      </div>
      {!isShelf && (
        <>
          <PopularGoods
            goods={popularGoodsItems}
            title="Похожие товары"
            background={theme.colors.white}
          />
          <PopularGoods goods={popularGoodsItems} title="Товары со скидкой" />
          <PopularGoods
            goods={popularGoodsItems}
            title="Смотрели ранее"
            background={theme.colors.white}
          />
        </>
      )}
    </StyledContainer>
  );
};

export default GoodContent;
