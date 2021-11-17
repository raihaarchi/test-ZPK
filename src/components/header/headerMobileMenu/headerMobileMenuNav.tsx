import React, { FC } from 'react';
import styled from 'styled/styled';
import linksData from 'data/headerMenuData';
import HeaderMobileMenuCity from './headerMobileMenuCity';
import HeaderLink from '../headerNavigation/headerLink/headerLink';

const StyledMobileNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 25px 30px 20px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    min-height: 400px;
    padding: 21px 15px 30px;
  }

  .header-mobile-menu-nav__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 363px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      align-items: flex-start;
      margin-left: 0;
    }
  }

  .header-mobile-menu-nav__item {
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-bottom: 24px;
    }
  }

  .header-mobile-menu-nav__link {
    ${({ theme }) => theme.typography.text16x20Bold};
    color: ${({ theme }) => theme.colors.white};
  }

  .header-mobile-menu-nav__select {
    display: none;
    margin-top: auto;
    width: fit-content;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
      margin-bottom: 25px;
    }
  }
`;

interface MenuNavProps {
  className?: string;
  handleForward: () => void;
}

const HeaderMobileMenuNav: FC<MenuNavProps> = ({
  className,
  handleForward,
}) => {
  return (
    <StyledMobileNav className={className}>
      <ul className="header-mobile-menu-nav__list">
        <li className="header-mobile-menu-nav__item">
          <button
            className="header-mobile-menu-nav__link"
            onClick={handleForward}>
            Каталог
          </button>
        </li>
        {linksData.map(({ href, text }, index) => (
          <HeaderLink
            className="header-mobile-menu-nav__item"
            key={index}
            href={href}>
            <a className="header-mobile-menu-nav__link">{text}</a>
          </HeaderLink>
        ))}
      </ul>
      <HeaderMobileMenuCity />
    </StyledMobileNav>
  );
};

export default HeaderMobileMenuNav;
