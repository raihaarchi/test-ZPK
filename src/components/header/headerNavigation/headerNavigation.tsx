import React, { ChangeEvent, FC } from 'react';
import styled from 'styled/styled';
import Search from 'ui-kit/search/search';
import linksData from 'data/headerMenuData';
import HeaderLink from './headerLink/headerLink';
import CatalogButton from 'ui-kit/catalogButton/catalogButton';
import { Good } from 'types/good';

const StyledNavigation = styled.div`
  flex: 1;
  padding-top: 6px;

  .header-navigation__search-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 36px;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      margin-bottom: 16px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 0;
    }
  }

  .header-navigation__search {
    max-width: 538px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      display: none;
    }
  }

  .header-navigation__catalog-button {
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      margin-right: 10px;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-right: 0;
    }
  }

  .header-navigation__nav {
    a {
      color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      display: none;
    }
  }

  .header-navigation__nav-list {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      margin-bottom: -8px;
    }
  }

  .header-navigation__nav-item {
    margin-right: 28px;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      opacity: 0.5;
    }

    &::last-child {
      margin-right: 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.desktop}) {
      margin-right: 15px;
      margin-bottom: 8px;
    }
  }

  .header-navigation__nav-item_active {
    opacity: 0.5;
  }

  .header-navigation__link {
    ${({ theme }) => theme.typography.text16x20};
    display: block;
  }
`;

const HeaderNavigation: FC<{
  className?: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchResults: Good[];
  handleSubmitSearch: () => void;
}> = ({
  className,
  isMenuOpen,
  toggleMenu,
  searchValue,
  handleSearch,
  searchResults,
  handleSubmitSearch,
}) => {
  return (
    <StyledNavigation className={className}>
      <div className="header-navigation__search-wrapper">
        <CatalogButton
          className="header-navigation__catalog-button"
          isActive={isMenuOpen}
          onClick={toggleMenu}
        />
        <Search
          handleSubmitSearch={handleSubmitSearch}
          value={searchValue}
          onChange={handleSearch}
          searchResults={searchResults}
          placeholder="Хочу купить"
          className="header-navigation__search"
        />
      </div>
      <nav className="header-navigation__nav">
        <ul className="header-navigation__nav-list">
          {linksData.map(({ href, text }, index) => (
            <HeaderLink key={index} href={href}>
              <a className="header-navigation__link">{text}</a>
            </HeaderLink>
          ))}
        </ul>
      </nav>
    </StyledNavigation>
  );
};

export default HeaderNavigation;
