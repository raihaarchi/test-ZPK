import GoodItem from 'components/goodItem/goodItem';
import { FC } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';
import { Good } from 'types/good';
import Pagination from 'ui-kit/pagination/pagination';
import { Pagination as PaginationType } from 'types/pagination';
import { useRouter } from 'next/router';
import LoadingIcon from 'components/icons/loadingIcon';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { GoodsFilterState } from 'reducers/goodsFilterSlice';

const StyledGoods = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  padding-top: 20px;

  .goods-list__loading {
    position: absolute;
    top: 40px;
    right: 50%;
    transform: translateX(50%);
    color: ${({ theme }) => theme.colors.blue};
    max-width: 40px;
    z-index: 2;
  }

  .goods-list__list-wrapper {
    position: relative;
    min-height: 500px;
  }

  .goods-list__list {
    display: flex;
    flex-wrap: wrap;
    margin-right: -25px;
    margin-bottom: 60px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-right: -20px;
      margin-bottom: 40px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-right: -14px;
      margin-bottom: 25px;
    }
  }

  .goods-list__item {
    max-width: 235px;
    width: 100%;
    margin-right: 25px;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      max-width: 205px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: 157px;
      margin-right: 20px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 138px;
      margin-right: 14px;
      margin-bottom: 14px;
    }
  }

  .goods-list__pagination {
    @media (max-width: 1400px) {
      position: absolute;
      left: 0;
      right: 0;
      padding: 0 60px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 0 40px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      position: initial;
      padding: 0;
    }
  }

  .goods-list__text {
    ${({ theme }) => theme.typography.text18x25}
  }
`;

interface GoodsProps {
  className?: string;
  goods: Good[];
  isFavorites?: boolean;
  goodClassname?: string;
  pagination?: PaginationType | null;
  isGoodsLoading?: boolean;
}

const GoodsList: FC<GoodsProps> = ({
  className,
  goods,
  isFavorites = false,
  goodClassname,
  pagination,
  isGoodsLoading,
}) => {
  const router = useRouter();
  const { categories, selected: category } = useSelector<
    RootState,
    GoodsFilterState
  >((state) => state.goodsFilter);

  const handlePageChange = (selectedItem: { selected: number }) => {
    const page = +selectedItem.selected + 1;

    router.push({
      pathname: router.pathname,
      query: page ? { ...router.query, page } : router.query,
    });
  };

  return (
    <StyledGoods className={className}>
      {(!!goods.length || isGoodsLoading) && (
        <>
          <div className="goods-list__list-wrapper">
            <ul
              className={cn('goods-list__list', {
                'loading-overlay': isGoodsLoading,
              })}>
              {goods.map((item) => (
                <li
                  key={item.id}
                  className={cn('goods-list__item', goodClassname)}>
                  <GoodItem good={item} isFavoriteDefault={isFavorites} />
                </li>
              ))}
            </ul>
            {isGoodsLoading && <LoadingIcon className="goods-list__loading" />}
          </div>
          {pagination && pagination.lastPage > 1 && (
            <Pagination
              forcePage={pagination?.page}
              pageCount={pagination?.lastPage || 0}
              onPageChange={handlePageChange}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              className="goods-list__pagination"
            />
          )}
        </>
      )}
      {!goods.length && !!categories.length && !isGoodsLoading && (
        <p className="goods-list__text">
          Ни один товар не соответствует выбранным фильтрам
        </p>
      )}
      {!goods.length && !categories.length && !isGoodsLoading && category && (
        <p className="goods-list__text">
          В выбранном городе данная категория отсутсвуют
        </p>
      )}
    </StyledGoods>
  );
};

export default GoodsList;
