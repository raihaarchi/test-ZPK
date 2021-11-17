import CloseBig from 'components/icons/closeBig';
import useScreen from 'hooks/useScreen';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';
import styled from 'styled/styled';
import { CatalogFilters as CatalogFiltersType } from 'types/catalogFilters';
import Button from 'ui-kit/button/button';
import CheckboxWrap from 'ui-kit/checboxFilter/checkboxWrap';
import RangeWrap from 'ui-kit/rangeFilter/rangeWrap';
import CategoriesFilter from './categoriesFilter/categoriesFilter';

const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 236px;
  width: 100%;
  margin-right: 25px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    max-width: 157px;
    margin-right: 20px;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    max-width: 100%;
    margin-right: 0;
  }

  .catalog-filters__filter {
    margin-bottom: 45px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  .catalog-filters__button-wrapper {
    display: none;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
      width: 100%;
      border-top: 1px solid ${({ theme }) => theme.colors['dark-grey']};
      padding-top: 10px;
      margin-top: 20px;
    }
  }

  .catalog-filters__button {
    width: 100%;
    height: 40px;
  }

  .catalog-filters__mobile-title-wrapper {
    display: none;
    position: relative;
    height: 24px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
  }

  .catalog-filters__mobile-title {
    ${({ theme }) => theme.typography.text16x20Bold};
    display: flex;
    align-items: center;
  }

  .catalog-filters__mobile-close {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface FiltersProps {
  className?: string;
  handleCloseFilter?: () => void;
  filters: CatalogFiltersType | null;
}

const CatalogFilters: FC<FiltersProps> = ({
  className,
  handleCloseFilter,
  filters,
}) => {
  const router = useRouter();
  const { isMobile } = useScreen();
  const [routerQuery, setRouterQuery] = useState({}); // for mobile filters

  const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
    const brandId = e.target.id;
    let { brands } = router.query;

    if (brands) {
      if (
        typeof brands === 'string' &&
        brands.split(',').includes(`${brandId}`)
      ) {
        brands = brands
          .split(',')
          .filter((id: string) => id !== brandId)
          .join(',');
      } else {
        brands = `${brands},${brandId}`;
      }
    } else {
      brands = `${brandId}`;
    }

    if (!isMobile) {
      delete router.query.brands;

      router.push({
        pathname: router.pathname,
        query: brands ? { ...router.query, brands, page: 1 } : router.query,
      });
    } else {
      setRouterQuery(
        brands ? { ...router.query, brands, page: 1 } : router.query,
      );
    }
  };

  const handlePriceChange = (priceFrom: number, priceTo: number) => {
    !isMobile &&
      router.push({
        pathname: router.pathname,
        query:
          priceFrom && priceTo
            ? {
                ...router.query,
                price_from: priceFrom,
                price_to: priceTo,
                page: 1,
              }
            : router.query,
      });

    isMobile &&
      priceFrom &&
      priceTo &&
      setRouterQuery({
        ...router.query,
        price_from: priceFrom,
        price_to: priceTo,
        page: 1,
      });
  };

  const handleAccept = async () => {
    delete router.query.brands;

    await router.push({
      pathname: router.pathname,
      query: routerQuery,
    });
    handleCloseFilter && handleCloseFilter();
  };

  const handleCloseBottomSheet = () => {
    setCurentPrice();
    setCurentBrands();
    handleCloseFilter && handleCloseFilter();
  };

  const [forcePrice, setForcePrice] = useState({ priceFrom: 0, priceTo: 0 });
  const [forceBrands, setForceBrands] = useState<string[] | null>(null);

  const setCurentPrice = () => {
    const priceFrom =
      router.query.price_from && typeof router.query.price_from === 'string'
        ? +router.query.price_from
        : filters?.price?.priceFrom;
    const priceTo =
      router.query.price_to && typeof router.query.price_from === 'string'
        ? +router.query.price_to
        : filters?.price?.priceTo;

    setForcePrice({
      priceFrom: priceFrom || 0,
      priceTo: priceTo || 0,
    });
  };

  const setCurentBrands = () => {
    const brands =
      router.query.brands && typeof router.query.brands === 'string'
        ? router.query.brands.split(',')
        : [];
    setForceBrands(brands);
  };

  return (
    <StyledFilters className={className}>
      <div className="catalog-filters__mobile-title-wrapper">
        <h2 className="catalog-filters__mobile-title">Фильтры</h2>
        <button onClick={handleCloseBottomSheet}>
          <CloseBig className="catalog-filters__mobile-close" />
        </button>
      </div>
      <CategoriesFilter className="catalog-filters__filter" />
      {filters &&
        filters.price.priceFrom !== filters.price.priceTo &&
        !!filters.price.priceFrom &&
        !!filters.price.priceTo && (
          <RangeWrap
            className="catalog-filters__filter"
            title="Цена"
            min={filters.price.priceFrom}
            max={filters.price.priceTo}
            step={1}
            handlePriceChange={handlePriceChange}
            forcePrice={forcePrice}
          />
        )}
      {filters && !!filters.brands.length && (
        <CheckboxWrap
          className="catalog-filters__filter"
          title="Бренды"
          name="brands"
          list={filters.brands}
          elementsCount={5}
          handleChange={handleBrandChange}
          forceValues={forceBrands}
        />
      )}
      <div className="catalog-filters__button-wrapper">
        <Button className="catalog-filters__button" onClick={handleAccept}>
          Применить
        </Button>
      </div>
    </StyledFilters>
  );
};

export default CatalogFilters;
