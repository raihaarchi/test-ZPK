import { FC, Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import CloseBig from 'components/icons/closeBig';
import styled from 'styled/styled';
import MenuLayout from 'ui-kit/menuLayout/menulLayout';
import { SidebarList } from 'types/typeSidebarList';

interface StyledHeaderPersonMenu {
  isMobile?: boolean;
}

const StyledHeaderPersonMenu = styled(MenuLayout)<StyledHeaderPersonMenu>`
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    top: 57px;
    overflow: hidden;
    border-radius: 0;
    width: 100%;
    height: calc(100vh - 57px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: -20px;
    margin-left: -12px;
    border: 12px solid transparent;
    border-bottom: 12px solid ${({ theme }) => theme.colors.white};
    width: 0;
  }

  .header-person-menu {
    width: 190px;
    margin-bottom: 60px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      width: 100%;
      margin-bottom: 0;
    }
  }

  .person-data {
    padding: 27px 0 31px;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.typography.text14x18};

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      padding: 21px 0 18px;
      ${({ theme }) => theme.typography.text16x20};
    }
    &__name {
      padding-bottom: 8px;
      ${({ theme, isMobile }) => !isMobile && theme.typography.text14x18Bold};

      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        padding-bottom: 12px;
      }
    }
  }

  .person-item {
    margin: 22px 0;
    ${({ theme, isMobile }) =>
      isMobile ? theme.typography.text16x20Bold : theme.typography.text14x18};

    &--mobile {
      margin: 25px 0;
    }
    & > a {
      color: ${({ theme }) => theme.colors.black};
    }
    &:first-of-type {
      margin-top: 26px;
    }
  }

  .person-exit {
    margin: 11px 0 16px 0;
    ${({ theme, isMobile }) =>
      isMobile ? theme.typography.text16x20Bold : theme.typography.text14x18};

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin: 20px 0 27px 0;
    }
    & > a {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .close-menu {
    position: absolute;
    right: 15px;
    top: 19px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Container = styled.div`
  &:before {
    content: '';
    display: block;
    height: 1px;
    background: ${({ theme }) => theme.colors['middle-grey']};
  }
`;

interface HeaderPersonMenuProps {
  isMobile?: boolean;
  setIsPersonMenuOpen: Dispatch<SetStateAction<boolean>>;
  menu: SidebarList[];
}

const HeaderPersonMenu: FC<HeaderPersonMenuProps> = ({
  isMobile,
  setIsPersonMenuOpen,
  menu,
}) => {
  return (
    <StyledHeaderPersonMenu
      isMobile={isMobile}
      setOpen={setIsPersonMenuOpen}
      onClick={(e) => e.stopPropagation()}>
      <div
        className={cn('header-person-menu', {
          'header-person-menu--mobile': isMobile,
        })}>
        <div className="person-data">
          <p className="person-data__name">Иван Иванов</p>
          <p className="person-data__organization">ООО «Лето» </p>
          {isMobile && (
            <button
              className="close-menu"
              onClick={() => setIsPersonMenuOpen(false)}>
              <CloseBig />
            </button>
          )}
        </div>
        <Container>
          <ul>
            {menu.map(({ name, link }, index) => (
              <li
                className={cn('person-item', {
                  'person-item--mobile': isMobile,
                })}
                key={index}>
                <Link href={link}>
                  <a className="">{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <Container>
        <div className="person-exit">
          <Link href="#">
            <a className="">Выход</a>
          </Link>
        </div>
      </Container>
    </StyledHeaderPersonMenu>
  );
};

export default HeaderPersonMenu;
