import { useLockBodyScroll } from 'hooks/useLockBodyScroll';
import { FC, useRef } from 'react';
import { useRootClose } from 'react-overlays';
import styled from 'styled/styled';

interface StyledContainerProps {
  isOpen: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  max-width: 100%;
  background: ${({ theme }) => theme.colors['transparent-black']};
  overflow: auto;
  padding: 15px;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    align-items: flex-start;
    padding-top: 60px;
  }

  .popup__container {
    padding: 55px 87px 60px 87px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    opacity: 1;
    z-index: 10;
    max-width: 758px;
    width: 100%;
    position: relative;
    margin: auto 50px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 42px 59px 45px 60px;
      max-width: 570px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin: 0;
      padding: 20px 20px 22px 20px;
      max-width: 100%;
      border-radius: 10px;
    }
  }

  .popup__close-button {
    position: absolute;
    right: -20px;
    top: 0;
    transform: translate(100%, 0);
    display: flex;
    cursor: pointer;
    outline: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      right: 0;
      top: -21px;
      transform: translate(0, -100%);
    }
  }
`;

interface PopupProps {
  className?: string;
  isOpen: boolean;
  close: () => void;
}

const Popup: FC<PopupProps> = ({ children, className, isOpen, close }) => {
  useLockBodyScroll(isOpen);

  const ref = useRef(null);
  useRootClose(ref, close, {
    disabled: !isOpen,
  });

  return (
    <StyledContainer className="wrapper" isOpen={isOpen}>
      <div className={`popup__container ${className}`} ref={ref}>
        <button onClick={close} className="popup__close-button">
          <img src="/images/сlose-big.svg" alt="закрыть" />
        </button>
        {children}
      </div>
    </StyledContainer>
  );
};

export default Popup;
