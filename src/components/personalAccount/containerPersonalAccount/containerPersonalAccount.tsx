import { FC, ReactNode, useState } from 'react';
import SidebarMobile from 'components/header/headerPersonMenu/headerPersonMenu';
import { sidebarListSupplier, sidebarListCustomer } from 'data/sidebarList';
import ArrowDown from 'components/icons/arrowDown';
import useScreen from 'hooks/useScreen';
import styled from 'styled/styled';
import { UserState } from 'reducers/userSlice';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import Sidebar from '../sidebar/sidebar';

const StyledLayout = styled.section`
  padding: 220px 40px 0;
  margin-bottom: 219px;
  display: flex;
  align-items: flex-start;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    padding-top: 127px;
    margin-bottom: 160px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    padding: 80px 15px 0;
    margin-bottom: 80px;
  }
`;

const Heading = styled.h1`
  ${({ theme: { typography } }) => typography.text55x60}
  margin-top: 15px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    ${({ theme: { typography } }) => typography.text30x30}
    margin-top: 0;
  }
  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    ${({ theme: { typography } }) => typography.text24x30}
    margin-top: 0;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  max-width: 100%;

  .arrow {
    display: initial;
    height: 9px;
    color: ${({ theme }) => theme.colors.blue};
    transform: rotate(90deg);
    margin-right: 5px;
  }
`;

const PrevButton = styled.button`
  color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.typography.text12x15};
  margin-bottom: 9px;
`;

interface IContainerPersonalAccount {
  heading?: string;
  children: ReactNode;
  previous?: string;
}

const ContainerPersonalAccount: FC<IContainerPersonalAccount> = ({
  heading,
  children,
  previous,
}) => {
  const { isMobile } = useScreen();
  const [isMenuOpen, setIsnMenuOpen] = useState<boolean>(false);
  const { isCustomer } = useSelector<RootState, UserState>((s) => s.user);

  return (
    <>
      {isMenuOpen && isMobile ? (
        <SidebarMobile
          isMobile
          setIsPersonMenuOpen={setIsnMenuOpen}
          menu={isCustomer ? sidebarListCustomer : sidebarListSupplier}
        />
      ) : (
        <StyledLayout className="layout-wrapper">
          <Sidebar
            menu={isCustomer ? sidebarListCustomer : sidebarListSupplier}
          />
          <Container>
            {isMobile && previous && (
              <PrevButton onClick={() => setIsnMenuOpen(!isMenuOpen)}>
                <ArrowDown className="arrow" />
                {previous}
              </PrevButton>
            )}
            {heading && <Heading>{heading}</Heading>}
            {children}
          </Container>
        </StyledLayout>
      )}
    </>
  );
};

export default ContainerPersonalAccount;
