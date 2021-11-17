import React, { FC } from 'react';
import styled from 'styled/styled';

type StyledCardCellProps = {
  cellWidth?: number;
  isTablet?: boolean;
};

const StyledCardCell = styled.div<StyledCardCellProps>`
  display: flex;
  flex-direction: column;
  ${({ cellWidth }) => (cellWidth ? `flex: 1 0 ${cellWidth}px;` : '')};
  max-width: ${({ cellWidth }) => `${cellWidth}px;`};

  .cell__title {
    ${({ theme }) => theme.typography.text12x15};
    margin-bottom: 5px;
  }

  .cell__text {
    ${({ theme, isTablet }) =>
      isTablet
        ? theme.typography.text14x18Bold
        : theme.typography.text16x20Bold};
    padding-right: 10px;
  }
`;

type CardCellProps = {
  title: string;
  text: string | number | JSX.Element;
  width?: number;
  isTablet?: boolean;
};

const CardCell: FC<CardCellProps> = ({ title, text, width, isTablet }) => (
  <StyledCardCell isTablet={isTablet} cellWidth={width}>
    {title && <span className="cell__title">{title}</span>}
    <span className="cell__text">{text}</span>
  </StyledCardCell>
);

export default CardCell;
