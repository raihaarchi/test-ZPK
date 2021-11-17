import { FC } from 'react';
import styled from 'styled/styled';
import GoodsList from 'components/goodsList/goodsList';
import goodsSelect from 'data/goodsSelect';
import { Good } from 'types/good';
import { Pagination } from 'types/pagination';
import Select from 'ui-kit/select/select';
import { SelectOption, SelectOptionType } from 'types/selectOption';
import { useRouter } from 'next/router';

const StyledGoods = styled.div`
  width: 100%;

  .catalog-goods__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 13px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .catalog-goods__heading-text {
    ${({ theme }) => theme.typography.text12x15}

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text10x12};
      color: ${({ theme }) => theme.colors.black};
      opacity: 0.5;
      margin-bottom: 32px;
    }
  }

  .catalog-goods__select-wrapper {
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  .catalog-goods__filters-button {
    display: none;
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.blue};
    outline: none;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
    }
  }

  .catalog-goods.catalog-goods__item {
    max-width: calc(25% - 25px);

    @media (max-width: 1400px) {
      max-width: calc((100% / 3) - 25px);
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      max-width: calc((100% / 3) - 20px);
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: calc((100% / 3) - 14px);
    }

    @media (max-width: 520px) {
      max-width: calc(50% - 14px);
    }
  }
`;

interface GoodsProps {
  className?: string;
  goods: Good[];
  handleOpenFilter: () => void;
  pagination: Pagination | null;
  isGoodsLoading: boolean;
}

const CatalogGoods: FC<GoodsProps> = ({
  isGoodsLoading,
  goods,
  handleOpenFilter,
  pagination,
}) => {
  const router = useRouter();

  const handleSortChange = (option: SelectOptionType) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        sort: (option as SelectOption).value,
      },
    });
  };

  return (
    <StyledGoods>
      <div className="catalog-goods__heading">
        <p className="catalog-goods__heading-text">
          {`${pagination?.from || 0}-${pagination?.to || 0} из ${
            pagination?.totalFilteredCount || 0
          } товаров`}
        </p>
        <div className="catalog-goods__select-wrapper">
          <Select
            options={goodsSelect}
            instanceId={'catalog-price-select'}
            onChange={handleSortChange}
          />
          <button
            className="catalog-goods__filters-button"
            onClick={handleOpenFilter}>
            Фильтры
          </button>
        </div>
      </div>
      <GoodsList
        goods={goods}
        goodClassname="catalog-goods catalog-goods__item"
        pagination={pagination}
        isGoodsLoading={isGoodsLoading}
      />
    </StyledGoods>
  );
};

export default CatalogGoods;
