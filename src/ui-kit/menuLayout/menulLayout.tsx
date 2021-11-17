import React, {
  FC,
  useRef,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from 'react';
import styled from '../../styled/styled';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const StyledMenuLayout = styled.div`
  position: absolute;
  //transform: translate(-50%, 0);
  left: 0;
  top: 0;
  overflow: inherit;
  background-color: white;
  border-radius: 8px;
  padding: 0 15px;
  z-index: 2;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  cursor: default;
`;

type MenuLayoutProps = {
  children: React.ReactNode;
  setOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
  onClick?: (e: SyntheticEvent) => void;
};

const MenuLayout: FC<MenuLayoutProps> = ({
  children,
  setOpen,
  className,
  onClick,
}) => {
  const modalMenu = useRef<HTMLDivElement>(null);
  useOutsideClick(modalMenu, () => setOpen(false));
  return (
    <StyledMenuLayout className={className} ref={modalMenu} onClick={onClick}>
      {children}
    </StyledMenuLayout>
  );
};

export default MenuLayout;
