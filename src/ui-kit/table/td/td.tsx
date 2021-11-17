import styled from 'styled/styled';
import React, { FC, memo } from 'react';

type StyledTrProps = {
  cellWidth: number;
  isRowHoverable?: boolean;
};

const StyledTd = styled.div<StyledTrProps>`
  display: flex;
  position: relative;
  flex: 1 0;
  ${({ isRowHoverable }) =>
    isRowHoverable ? 'padding: 25px 35px 25px 0' : 'padding: 25px 0;'};
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  ${({ cellWidth }) => (cellWidth ? `max-width: ${cellWidth}px;` : '')}
  ${({ theme }) => theme.typography.text14x18}
  
  &:first-of-type {
    margin-left: 20px;
  }
`;

type TrProps = {
  width: number;
  children: React.ReactNode;
  className?: string;
  isRowHoverable: boolean;
};

const Td: FC<TrProps> = memo<TrProps>(
  ({ children, className, width, isRowHoverable }) => (
    <StyledTd
      isRowHoverable={isRowHoverable}
      className={className}
      cellWidth={width}>
      {children}
    </StyledTd>
  ),
);

Td.displayName = 'Td';

export default Td;
