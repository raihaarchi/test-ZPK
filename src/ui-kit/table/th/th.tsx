import styled from 'styled/styled';
import React, { FC, memo, useRef } from 'react';
import useHoverDirty from 'react-use/lib/useHoverDirty';
import { sortEnum, sortOrder } from 'types/table';

type StyledSpanProps = {
  isActiveSort: boolean;
  isHovered: boolean | null;
  sortType: sortOrder;
};

const StyledSpan = styled.span<StyledSpanProps>`
  ${({ theme }) => theme.typography.text14x18Bold}
  ${({ isActiveSort, theme }) =>
    isActiveSort ? `color: ${theme.colors.blue};` : ''}
  position: relative;
  user-select: none;

  &:after {
    content: '';
    display: ${({ isHovered, isActiveSort }) =>
      isHovered || isActiveSort ? 'block' : 'none'};
    right: -14px;
    top: 50%;
    transform: translateY(-20%)
      ${({ isActiveSort, sortType }) =>
        isActiveSort && sortType === sortEnum.asc ? 'rotate(180deg)' : ''};
    width: 0;
    height: 0;
    position: absolute;
    transform-origin: 50% 25%;
    border-style: solid;
    border-width: 4px;
    border-color: ${({
      theme,
    }) => `${theme.colors.blue} transparent transparent 
      transparent;`};
  }
`;

type StyledTh = {
  cellWidth: number;
  isSorted: boolean;
  isRowHoverable: boolean;
};

const StyledTh = styled.div<StyledTh>`
  display: inline-flex;
  position: relative;
  align-items: center;
  flex: 1 0;
  ${({ isRowHoverable }) => (isRowHoverable ? 'padding-right: 35px;' : '')};
  box-sizing: content-box;
  ${({ cellWidth }) => (cellWidth ? `max-width: ${cellWidth}px` : '')};
  ${({ isSorted }) => (isSorted ? 'cursor: pointer;' : '')}

  &:first-of-type {
    margin-left: 20px;
  }
`;

interface ThProps extends React.HTMLAttributes<HTMLDivElement> {
  width: number;
  isSorted: boolean;
  isActiveSort: boolean;
  sortType: sortOrder;
  isRowHoverable: boolean;
}

const Th: FC<ThProps> = memo(
  ({
    className,
    children,
    width,
    onClick,
    isSorted,
    isActiveSort,
    sortType,
    isRowHoverable,
  }) => {
    const thRef = useRef(null);
    const isHovered = useHoverDirty(thRef);

    return (
      <StyledTh
        onClick={onClick}
        className={className}
        cellWidth={width}
        isSorted={isSorted}
        isRowHoverable={isRowHoverable}
        ref={thRef}>
        <StyledSpan
          isHovered={isSorted && isHovered}
          sortType={sortType}
          isActiveSort={isActiveSort}>
          {children}
        </StyledSpan>
      </StyledTh>
    );
  },
);

Th.displayName = 'Th';

export default Th;
