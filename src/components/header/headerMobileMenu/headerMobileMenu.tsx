import { ChangeEvent, FC, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled/styled';
import Search from 'ui-kit/search/search';
import HeaderMobileMenuCategories from './headerMobileMenuCategories';
import HeaderMobileMenuNav from './headerMobileMenuNav';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { GoodsFilterState } from 'reducers/goodsFilterSlice';
import { FilterCategory } from 'types/filterCategory';
import { ShopState } from 'reducers/shopSlice';
import { Good } from 'types/good';

const StyledMobileMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;

  .header-mobile-menu__search-wrapper {
    background-color: ${({ theme }) => theme.colors.blue};
    padding: 3px 30px 20px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      padding: 15px;
    }
  }
`;
interface MobileMenuProps {
  className?: string;
  closeMenu: () => void;
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchResults: Good[];
  handleSubmitSearch: () => void;
}

const HeaderMobileMenu: FC<MobileMenuProps> = ({
  className,
  closeMenu,
  searchValue,
  handleSearch,
  searchResults,
  handleSubmitSearch,
}) => {
  const { categories } = useSelector<RootState, GoodsFilterState>(
    (state) => state.goodsFilter,
  );
  const { selected: shop } = useSelector<RootState, ShopState>(
    (state) => state.shop,
  );
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<FilterCategory>(
    categories[0] || null,
  );
  const router = useRouter();

  const handleForward = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleRootCategoryClick = (categoryId: number) => {
    handleForward();
    const newCategory = categories.find(
      (el: FilterCategory) => el.id === categoryId,
    );
    setCategory(newCategory || category);
  };
  const handleCategoryClick = (categoryId: number, rootId?: number) => {
    router
      .push({
        pathname: '/catalog',
        query: {
          shop: shop?.id,
          rcat: rootId,
          cat: categoryId,
        },
      })
      .then(() => closeMenu());
  };

  return (
    <StyledMobileMenu className={className}>
      <div className="header-mobile-menu__search-wrapper">
        <Search
          handleSubmitSearch={handleSubmitSearch}
          value={searchValue}
          onChange={handleSearch}
          searchResults={searchResults}
          placeholder="Хочу купить"
        />
      </div>
      {step === 0 && <HeaderMobileMenuNav handleForward={handleForward} />}
      {step === 1 && (
        <HeaderMobileMenuCategories
          title="Каталог"
          categories={categories}
          handleBack={handleBack}
          handleCategoryClick={handleRootCategoryClick}
        />
      )}
      {step === 2 && category && (
        <HeaderMobileMenuCategories
          title={category.name}
          handleBack={handleBack}
          rootId={category.id}
          categories={category.children}
          handleCategoryClick={handleCategoryClick}
        />
      )}
    </StyledMobileMenu>
  );
};

export default HeaderMobileMenu;
