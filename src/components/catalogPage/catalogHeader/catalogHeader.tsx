import { FC } from 'react';
import cn from 'classnames';
import useBreadcrumbs from 'hooks/catalogPage/useCatalogBreadcrumbs';
import styled from 'styled/styled';
import Breadcrumbs from 'ui-kit/breadcrumbs/breadcrumbs';
import { useRouter } from 'next/router';
import useCatalogGoods from 'hooks/catalogPage/useCatalogGoods';
import pluralize from 'utils/pluralize';
import Loader from 'components/Loader/Loader';

interface StyledCatalogHeaderProps {
  isShowGoods: boolean;
  isGoodsLoading: boolean;
}

const StyledCatalogHeader = styled.div<StyledCatalogHeaderProps>`
  padding-top: 228px;
  margin-bottom: ${({ isShowGoods }) => (isShowGoods ? '53px' : '263px')};

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: 115px;
    margin-bottom: ${({ isShowGoods }) => (isShowGoods ? '40px' : '232px')};
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-top: 80px;
    margin-bottom: ${({ isShowGoods }) => (isShowGoods ? '6px' : '167px')};
  }

  .catalog-header__bredcrumbs {
    min-height: 15px;
    margin-bottom: 12px;
  }

  .catalog-header__title {
    ${({ theme }) => theme.typography.text55x60};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30};
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
    }
  }

  .catalog-header__subtitle-wrapper {
    ${({ theme }) => theme.typography.text18x25};
    margin-top: 16px;
    position: relative;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18};
      margin-top: 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .catalog-header__subtitle {
    visibility: ${({ isGoodsLoading }) =>
      isGoodsLoading ? 'hidden' : 'visible'};
  }

  .catalog-header__search-value {
    font-weight: bold;
  }

  .catalog-header__loader {
    top: 0;
    left: 0;
  }
`;

interface CatalogHeaderProps {
  className?: string;
  isShowGoods: boolean;
}

const CatalogHeader: FC<CatalogHeaderProps> = ({ className, isShowGoods }) => {
  const { breadcrumbs } = useBreadcrumbs();

  const { query } = useRouter();

  const { pagination, isGoodsLoading } = useCatalogGoods();

  const foundWord = pluralize(pagination?.totalFilteredCount, [
    'найден',
    'найдено',
    'найдено',
  ]);
  const goodsWord = pluralize(pagination?.totalFilteredCount, [
    'товар',
    'товара',
    'товаров',
  ]);

  return (
    <StyledCatalogHeader
      isGoodsLoading={isGoodsLoading}
      isShowGoods={isShowGoods}
      className={cn(className, 'wrapper')}>
      <Breadcrumbs
        className="catalog-header__bredcrumbs"
        links={breadcrumbs.slice(0, -1)}
      />
      <h1 className="catalog-header__title">
        {query.filter
          ? 'Результаты поиска'
          : breadcrumbs.length !== 1
          ? breadcrumbs[breadcrumbs.length - 1].name
          : 'Каталог'}
      </h1>

      {query.filter && (
        <div className="catalog-header__subtitle-wrapper">
          {!!pagination?.totalFilteredCount && (
            <p className="catalog-header__subtitle">
              По запросу{' '}
              <span className="catalog-header__search-value">
                {query.filter}
              </span>{' '}
              {`${foundWord} ${
                pagination?.totalFilteredCount || 0
              } ${goodsWord}`}
            </p>
          )}

          {!pagination?.totalFilteredCount && (
            <p className="catalog-header__subtitle">
              По запросу{' '}
              <span className="catalog-header__search-value">
                {query.filter}
              </span>{' '}
              ничего не найдено
            </p>
          )}

          {isGoodsLoading && <Loader className="catalog-header__loader" />}
        </div>
      )}
    </StyledCatalogHeader>
  );
};

export default CatalogHeader;
