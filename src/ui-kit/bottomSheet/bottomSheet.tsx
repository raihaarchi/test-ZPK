import React, { FC, useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useLockBodyScroll } from 'hooks/useLockBodyScroll';
import styled from 'styled/styled';
import { useWindowScroll } from 'react-use';

interface StyledBottomSheetProps {
  isOpen: boolean;
  initialHeight: number;
  isBottomSheetHidden: boolean;
}

const StyledBottomSheet = styled.div<StyledBottomSheetProps>`
  display: none;

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    visibility: ${({ isBottomSheetHidden }) =>
      isBottomSheetHidden ? 'hidden' : 'visible'};
    opacity: ${({ isBottomSheetHidden }) => (isBottomSheetHidden ? 0 : 1)};
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    height: ${({ isOpen, initialHeight }) =>
      isOpen ? 'calc(100% - 10px)' : `${initialHeight}px`};
    background: ${({ theme }) => theme.colors.white};
    z-index: 90;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: ${({ isOpen, initialHeight }) =>
      !isOpen && initialHeight === 0 ? '0' : '0 15px 0 15px'};
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);

    .bottom-sheet__line-wrapper {
      position: relative;
      height: ${({ isOpen }) => (isOpen ? '46px' : '24px')};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      -webkit-tap-highlight-color: transparent;

      .bottom-sheet__line {
        position: absolute;
        top: 10px;
        right: 50%;
        transform: translateX(50%);

        width: 46px;
        height: 3px;
        background: ${({ theme }) => theme.colors['dark-grey']};
        border-radius: 100px;
      }
    }

    .bottom-sheet__data-wrapper {
      overflow: ${({ isOpen }) => (isOpen ? 'auto' : 'hidden')};
      height: 100%;
    }
  }
`;

interface BottomSheetPropsType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  initialHeight?: number;
  className?: string;
  hidden?: boolean;
}

const BottomSheet: FC<BottomSheetPropsType> = ({
  children,
  isOpen,
  open,
  close,
  initialHeight = 115,
  className,
  hidden = false,
}) => {
  const [isBottomSheetHidden, setIsBottomSheetHidden] = useState(false);

  const dataWrapper = useRef<HTMLHeadingElement>(null);

  const handleClose = () => {
    if (dataWrapper.current) {
      dataWrapper.current.scrollTo({
        top: 0,
      });

      close();
    }
  };

  const handlers = useSwipeable({
    onSwipedDown: handleClose,
    onSwipedUp: open,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const wrapperHandlers = useSwipeable(
    isOpen
      ? {}
      : {
          onSwipedDown: handleClose,
          onSwipedUp: open,
          preventDefaultTouchmoveEvent: true,
          trackMouse: true,
        },
  );

  const openBottomSheet = () => {
    isOpen ? handleClose() : open();
  };

  useLockBodyScroll(isOpen);

  const { y } = useWindowScroll();

  useEffect(() => {
    const footerHeight = document.getElementById('footer')?.offsetHeight || 0;

    setIsBottomSheetHidden(
      hidden ||
        y > document.body.scrollHeight - window.innerHeight - footerHeight,
    );
  }, [y]);

  useEffect(() => {
    close();
  }, [isBottomSheetHidden]);

  return (
    <StyledBottomSheet
      className={className}
      {...wrapperHandlers}
      isOpen={isOpen}
      isBottomSheetHidden={isBottomSheetHidden}
      initialHeight={initialHeight}>
      <button
        {...handlers}
        type="button"
        onClick={openBottomSheet}
        className="bottom-sheet__line-wrapper">
        <span className="bottom-sheet__line" />
      </button>
      <div ref={dataWrapper} className="bottom-sheet__data-wrapper">
        {children}
      </div>
    </StyledBottomSheet>
  );
};

export default BottomSheet;
