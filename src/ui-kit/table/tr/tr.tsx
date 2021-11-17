import React, { FC } from 'react';
import styled from 'styled/styled';
import useHover from 'react-use/lib/useHover';

type StyledTrProps = {
  isHovered: boolean;
  isRowHover?: boolean;
  isOpacity: boolean;
};

const StyledTr = styled.div<StyledTrProps>`
  display: inline-flex;
  flex: 1 0 auto;
  position: relative;
  transition: background-color opacity 0.3s ease-in-out;
  cursor: ${({ isRowHover }) => (isRowHover ? 'pointer' : 'auto')};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  ${({ isHovered, theme, isRowHover }) =>
    isHovered && isRowHover ? `background-color: ${theme.colors.grey}33;` : ''};
  ${({ isOpacity }) => (isOpacity ? 'opacity: 0.5' : '')};

  .row__hover-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;
  }
`;

interface TrProps {
  onHover?: (isHovered: boolean) => React.ReactNode;
  onClick?: () => void;
  isRowHover?: boolean;
  isOpacity: boolean;
}

const Tr: FC<TrProps> = ({
  children,
  onHover,
  onClick,
  isRowHover,
  isOpacity,
}) => {
  const [hoverable, hovered] = useHover((isHovered) => {
    return (
      <StyledTr
        isRowHover={isRowHover}
        isHovered={isHovered}
        isOpacity={isOpacity}
        onClick={onClick}
      />
    );
  });

  return (
    <hoverable.type {...hoverable.props}>
      {children}
      {onHover && <div className="row__hover-btn">{onHover(hovered)}</div>}
    </hoverable.type>
  );
};

export default Tr;
