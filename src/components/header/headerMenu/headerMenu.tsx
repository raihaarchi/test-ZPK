import { FC } from 'react';
import styled from 'styled/styled';
import HeaderUser from './headerUser/headerUser';
import HeaderBookmark from './headerBookmark/headerBookmark';
import HeaderCart from './headerCart/headerCart';
import { RootState } from 'store';
import { setSelectedShop, ShopState } from 'reducers/shopSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { SelectOption, SelectOptionType } from 'types/selectOption';
import HeaderSelect from 'components/header/headerSelect/headerSelect';
import { SidebarList } from 'types/typeSidebarList';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  border: none;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-top: 10px;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-top: 0;
  }

  .header-menu__notifications {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;
    margin-bottom: 41px;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      margin-bottom: 16px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      height: auto;
      margin-bottom: 0;
    }
  }

  .header-menu__icon {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-width: 20px;
      max-height: 20px;
      margin-right: 15px;
    }
  }

  .header-menu__select {
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: none;
    }
  }
`;

interface HeaderMenuProps {
  className?: string;
  isPersonMenuOpen?: boolean;
  setIsPersonMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menu: SidebarList[];
}

const HeaderMenu: FC<HeaderMenuProps> = ({
  className,
  isPersonMenuOpen,
  setIsPersonMenuOpen,
  menu,
}) => {
  const dispatch = useAppDispatch();
  const { selected, shops } = useSelector<RootState, ShopState>((s) => s.shop);

  const handleCityChange = (el: SelectOptionType) => {
    const newShop = el
      ? shops.find((shop) => (el as SelectOption).value === shop.id)
      : null;
    newShop && dispatch(setSelectedShop(newShop));
  };

  return (
    <StyledMenu className={className}>
      <div className="header-menu__notifications">
        <HeaderUser
          className="header-menu__icon"
          setIsPersonMenuOpen={setIsPersonMenuOpen}
          isPersonMenuOpen={isPersonMenuOpen}
          menu={menu}
        />
        <HeaderBookmark className="header-menu__icon" count={123} />
        <HeaderCart className="header-menu__icon" />
      </div>
      <HeaderSelect
        className="header-menu__select"
        options={shops.map((el) => {
          return { label: el.name, value: el.id };
        })}
        selectTheme="light"
        instanceId={'city-select'}
        value={{ label: selected?.name, value: selected?.id }}
        onChange={handleCityChange}
        placeholder="Выберите город"
      />
    </StyledMenu>
  );
};

export default HeaderMenu;
