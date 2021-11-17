import { FC, useState } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';
import ArrowLeft from 'components/icons/arrowLeft';
import { setSelectedShop, ShopState } from 'reducers/shopSlice';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { SelectOption, SelectOptionType } from 'types/selectOption';
import HeaderSelect from 'components/header/headerSelect/headerSelect';

const StyledMobileCity = styled.div`
  display: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    display: flex;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-top: auto;
  }

  &.header-mobile-menu-city__open {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 20px 15px;
  }

  .header-mobile-menu-city__wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .header-mobile-menu-city__back-button {
    position: absolute;
    z-index: 1;
    display: none;
    color: ${({ theme }) => theme.colors.white};
    height: fit-content;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
      flex: 1;
    }
  }

  .header-mobile-menu-city__title-wrapper {
    display: flex;
    align-items: center;
  }

  .header-mobile-menu-city__title {
    ${({ theme }) => theme.typography.text12x15};

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex: 3;
      text-align: center;
    }
  }

  .header-mobile-menu-city__button {
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.black};
  }

  .header-mobile-menu-city__select_open {
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    margin: 0 15px;
  }
`;

interface MenuCityProps {
  className?: string;
}

const HeaderMobileMenuCity: FC<MenuCityProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { selected, shops } = useSelector<RootState, ShopState>((s) => s.shop);

  const handleMenuOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);
  const handleCityChange = (el: SelectOptionType) => {
    const newShop = el
      ? shops.find((shop) => (el as SelectOption).value === shop.id)
      : null;
    newShop && dispatch(setSelectedShop(newShop));
    handleMenuClose();
  };

  return (
    <StyledMobileCity
      className={cn(className, {
        'header-mobile-menu-city__open': isMenuOpen,
      })}>
      <HeaderSelect
        className={cn('header-mobile-menu-city__select', {
          'header-mobile-menu-city__select_open': isMenuOpen,
        })}
        options={shops.map((el) => {
          return { label: el.name, value: el.id };
        })}
        selectTheme="light"
        instanceId={'mobile-city-select'}
        onMenuOpen={handleMenuOpen}
        value={{ label: selected?.name, value: selected?.id }}
        onChange={handleCityChange}
        menuIsOpen={isMenuOpen}
        placeholder="Выберите город"
      />
      {isMenuOpen && (
        <div className="header-mobile-menu-city__wrapper">
          <div className="header-mobile-menu-city__title-wrapper">
            <button
              className="header-mobile-menu-city__back-button"
              onClick={handleMenuClose}>
              <ArrowLeft />
            </button>
            <p className="header-mobile-menu-city__title">Выберите ваш город</p>
          </div>
        </div>
      )}
    </StyledMobileCity>
  );
};

export default HeaderMobileMenuCity;
