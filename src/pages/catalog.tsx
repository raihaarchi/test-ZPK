import { FC, useEffect, useState } from 'react';
import CatalogHeader from 'components/catalogPage/catalogHeader/catalogHeader';
import CatalogGoods from 'components/catalogPage/catalogGoods/catalogGoods';
import styled from 'styled/styled';
import BottomSheet from 'ui-kit/bottomSheet/bottomSheet';
import CatalogFilters from 'components/catalogPage/catalogFilters/catalogFilters';
import useCatalogGoods from 'hooks/catalogPage/useCatalogGoods';
import CatalogAuthorizationPopup from 'components/catalogPage/catalogAuthorizationPopup/catalogAuthorizationPopup';
import { useRouter } from 'next/router';
import Loader from 'components/Loader/Loader';
import { loadStateIsCatalogPopupShown } from 'store/localStorage';

const StyledContainer = styled.div`
  display: flex;
  margin-bottom: 160px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 80px;
  }

  .catalog__filters {
    display: flex;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .catalog__loader {
    position: relative;
    min-height: 400px;
    width: 100%;
  }
`;

const Catalog: FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isCatalogPopupShown, setIsCatalogPopupShowed] = useState(false);
  const handleOpenFilter = () => setIsFiltersOpen(true);
  const handleCloseFilter = () => setIsFiltersOpen(false);

  const { query } = useRouter();

  const {
    goods,
    isGoodsLoading,
    pagination,
    filters,
    isDataLoading,
  } = useCatalogGoods();

  const isShowGoods =
    (!!query.filter && !!pagination?.totalFilteredCount) || !query.filter;

  useEffect(() => {
    if (loadStateIsCatalogPopupShown()) {
      setIsCatalogPopupShowed(true);
    }
  }, []);

  return (
    <>
      {!isCatalogPopupShown && <CatalogAuthorizationPopup />}
      <CatalogHeader isShowGoods={isShowGoods} />
      {isShowGoods && (
        <StyledContainer className="wrapper">
          {isDataLoading ? (
            <div className="catalog__loader">
              <Loader />
            </div>
          ) : (
            <>
              <BottomSheet
                isOpen={isFiltersOpen}
                open={handleOpenFilter}
                close={handleCloseFilter}
                initialHeight={0}>
                <CatalogFilters
                  handleCloseFilter={handleCloseFilter}
                  filters={filters}
                />
              </BottomSheet>
              <CatalogFilters filters={filters} className="catalog__filters" />
              <CatalogGoods
                isGoodsLoading={isGoodsLoading}
                goods={goods}
                handleOpenFilter={handleOpenFilter}
                pagination={pagination}
              />
            </>
          )}
        </StyledContainer>
      )}
    </>
  );
};

export default Catalog;
