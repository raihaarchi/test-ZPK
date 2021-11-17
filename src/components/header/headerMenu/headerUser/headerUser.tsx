import { FC } from 'react';
import UserIcon from 'components/icons/userIcon';
import HeaderPersonMenu from '../../headerPersonMenu/headerPersonMenu';
import { SidebarList } from 'types/typeSidebarList';
import styled from 'styled/styled';

interface StyledUser {
  isPersonMenuOpen?: boolean;
}

const StyledUser = styled.div<StyledUser>`
  cursor: pointer;
  position: relative;
  display: flex;

  &:hover {
    .header-user__icon {
      fill: ${({ theme }) => theme.colors.white};
    }

    .header-user__hint {
      transition-delay: 1s;
      opacity: 1;
      visibility: visible;
    }
  }

  .header-user__icon {
    fill: ${({ theme, isPersonMenuOpen }) =>
      isPersonMenuOpen && theme.colors.white};
  }

  .header-user__hint {
    ${({ theme }) => theme.typography.text10x12};
    position: absolute;
    right: 50%;
    transform: translate(50%);
    bottom: -18px;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
  }
`;

const HeaderUser: FC<{
  className?: string;
  isPersonMenuOpen?: boolean;
  setIsPersonMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menu: SidebarList[];
}> = ({ className, isPersonMenuOpen, setIsPersonMenuOpen, menu }) => {
  return (
    <StyledUser
      className={className}
      isPersonMenuOpen={isPersonMenuOpen}
      onClick={() => {
        setIsPersonMenuOpen((val) => !val);
      }}>
      <UserIcon className="header-user__icon" />
      {!isPersonMenuOpen && <p className="header-user__hint">Пользователь</p>}
      {isPersonMenuOpen && (
        <HeaderPersonMenu
          setIsPersonMenuOpen={setIsPersonMenuOpen}
          menu={menu}
        />
      )}
    </StyledUser>
  );
};

export default HeaderUser;
