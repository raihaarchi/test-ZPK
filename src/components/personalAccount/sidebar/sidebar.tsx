import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SidebarList } from 'types/typeSidebarList';
import styled from 'styled/styled';

const StyledSidebar = styled.div`
  padding: 26px 40px 36px;
  margin-right: 25px;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.grey};
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  max-width: 276px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    display: none;
  }
`;
const StyledSidebarItem = styled.li`
  padding-bottom: 21px;
  margin-bottom: 21px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors['lighter-grey']};

  &:last-child {
    margin-bottom: 101px;
  }
`;

interface IStyledSidebarLink {
  isActive?: boolean;
}

const StyledSidebarLink = styled.a<IStyledSidebarLink>`
  ${({ theme: { typography } }) => typography.text14x18Bold};
  position: relative;
  display: flex;
  color: ${({ theme: { colors } }) => colors.black};
  opacity: ${({ isActive = false }) => (isActive ? '0.4' : '1')};

  &:hover {
    cursor: pointer;
  }
`;

interface SidebarProps {
  menu: SidebarList[];
}

const Sidebar: FC<SidebarProps> = ({ menu }) => {
  const { pathname } = useRouter();
  return (
    <>
      <StyledSidebar>
        <ul>
          {menu.map(({ name, link, secondaryLink }, index) => (
            <StyledSidebarItem key={index}>
              <Link href={link} passHref>
                <StyledSidebarLink
                  isActive={pathname === link || pathname === secondaryLink}>
                  {name}
                </StyledSidebarLink>
              </Link>
            </StyledSidebarItem>
          ))}
        </ul>
        <StyledSidebarLink href="#">Выход</StyledSidebarLink>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
