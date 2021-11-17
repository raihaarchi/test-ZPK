import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useLockBodyScroll } from 'hooks/useLockBodyScroll';
import { useRootClose } from 'react-overlays';
import cn from 'classnames';
import HeaderLogo from './headerLogo/headerLogo';
import HeaderNavigation from './headerNavigation/headerNavigation';
import HeaderMenu from './headerMenu/headerMenu';
import HeaderCatalog from './headerCatalog/headerCatalog';
import HeaderMobileMenu from './headerMobileMenu/headerMobileMenu';
import HeaderPersonMenu from './headerPersonMenu/headerPersonMenu';
import { sidebarListSupplier, sidebarListCustomer } from 'data/sidebarList';
import styled from 'styled/styled';
import useScreen from 'hooks/useScreen';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { ShopState } from 'reducers/shopSlice';
import { getCategories } from 'reducers/goodsFilterSlice';
import { UserState } from 'reducers/userSlice';
import { useRouter } from 'next/router';
import useSearchGoods from 'hooks/search/useSearchGoods';

const StyledHeader = styled.header`
  &.header__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .header__inner-wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.white};
    margin-top: 40px;
    z-index: 10;

    @media (max-width: 1439px) {
      margin-top: 20px;
    }

    @media (max-width: 1023px) {
      margin-top: 10px;
    }

    @media (max-width: 767px) {
      margin-top: 0;
    }
  }

  .header__inner-wrapper_open {
    @media (max-width: 767px) {
      height: 100%;
      position: fixed;
      left: 0;
      right: 0;
      transform: translateX(0);
    }
  }

  .header__inner {
    border-radius: 15px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      border-radius: 8px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      border-radius: 0;
      display: flex;
      flex-direction: column;
    }
  }

  .header__inner-open {
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      height: 100%;
    }
  }

  .header__container {
    position: relative;
    display: flex;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 15px;
    padding: 23px 40px 24px;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      padding: 18px 40px 20px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      border-radius: 8px;
      padding: 18px 30px 19px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      border-radius: 0;
      align-items: center;
      padding: 16px 15px 18px;
    }
  }

  .header__container-catalog {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .header__logo {
    margin-right: 93px;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      margin-right: 29px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      order: 1;
    }
  }

  .header__navigation {
    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      margin-right: 27px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      display: flex;
      align-items: center;
      order: 0;
      padding-top: 0;
      margin-right: 88px;
      flex: 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-right: 28px;
    }
  }

  .header__menu {
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      order: 2;
      flex: 1;
    }
  }

  .header__catalog-wrapper {
    height: 100%;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      flex: 1;
      overflow: hidden;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      overflow: scroll;
    }
  }

  .header__catalog {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      display: none;
    }
  }

  .header__mobile-menu {
    display: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      display: flex;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

const Header: FC = () => {
  const { isCustomer } = useSelector<RootState, UserState>((s) => s.user);
  const { selected: shop } = useSelector<RootState, ShopState>((s) => s.shop);
  const dispatch = useAppDispatch();
  const { isMobile, isTablet } = useScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPersonMenuOpen, setIsPersonMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const [searchValue, setSearchValue] = useState('');

  const { searchResults } = useSearchGoods(searchValue);

  const ref = useRef(null);
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmitSearch = async () => {
    await router.push({
      pathname: '/catalog',
      query: { shop: shop?.id, filter: searchValue.trim(), rcat: 0 },
    });
  };

  useRootClose(ref, closeMenu, {
    disabled: !isMenuOpen,
  });

  useLockBodyScroll(isMenuOpen && isMobile);
  useLockBodyScroll(isPersonMenuOpen && isMobile);

  useEffect(() => {
    closeMenu();
  }, [router]);

  useEffect(() => {
    shop && dispatch(getCategories({ shop }));
  }, [shop, dispatch]);

  return (
    <StyledHeader className={cn({ header__overlay: isMenuOpen })}>
      <div
        className={cn('header__inner-wrapper layout-wrapper', {
          'header__inner-wrapper_open': isMenuOpen,
        })}>
        <div
          className={cn('header__inner', {
            'header__inner-open': isMenuOpen,
          })}>
          <div data-aos="fade-in" data-aos-once="true">
            <div
              className={cn('header__container', {
                'header__container-catalog': isMenuOpen,
              })}>
              <HeaderLogo className="header__logo" />
              <HeaderNavigation
                handleSubmitSearch={handleSubmitSearch}
                handleSearch={handleSearch}
                searchValue={searchValue}
                searchResults={searchResults}
                className="header__navigation"
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
              />
              <HeaderMenu
                className="header__menu"
                isPersonMenuOpen={isPersonMenuOpen}
                setIsPersonMenuOpen={setIsPersonMenuOpen}
                menu={isCustomer ? sidebarListCustomer : sidebarListSupplier}
              />
            </div>
          </div>
          {isMenuOpen && (
            <div ref={ref} className="header__catalog-wrapper">
              {!isTablet && <HeaderCatalog className="header__catalog" />}
              {isTablet && (
                <HeaderMobileMenu
                  handleSubmitSearch={handleSubmitSearch}
                  searchResults={searchResults}
                  handleSearch={handleSearch}
                  searchValue={searchValue}
                  className="header__mobile-menu"
                  closeMenu={closeMenu}
                />
              )}
            </div>
          )}
          {isPersonMenuOpen && isMobile && (
            <HeaderPersonMenu
              isMobile
              setIsPersonMenuOpen={setIsPersonMenuOpen}
              menu={isCustomer ? sidebarListCustomer : sidebarListSupplier}
            />
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
