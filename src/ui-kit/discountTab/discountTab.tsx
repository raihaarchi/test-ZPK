import React, { FC } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';

const StyledContainer = styled.button`
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 15px;
  padding: 6px 32px 3px 15px;
  color: ${(props) => props.theme.colors.white};
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: all 0.5s;
  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    padding: 2px 22px 4px 13px;
  }

  .discountTab__currentPrice {
    font-weight: bold;
    font-size: 30px;
    line-height: 30px;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 1px;
    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 0;
    }
  }

  .discountTab__oldPrice {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-decoration-line: line-through;
    color: ${(props) => props.theme.colors.white};
    opacity: 0.6;
    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      font-size: 12px;
      line-height: 15px;
      margin-top: -3px;
    }
  }

  &.discountTab_active {
    background: ${(props) => props.theme.colors.white};

    .discountTab__currentPrice {
      color: ${(props) => props.theme.colors.black};
    }

    .discountTab__oldPrice {
      color: ${(props) => props.theme.colors.black};
      opacity: 0.3;
    }
  }
`;

interface DiscountTabPropsType {
  oldPrice: number;
  currentPrice: number;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

const DiscountTab: FC<DiscountTabPropsType> = ({
  oldPrice,
  currentPrice,
  className,
  isActive,
  onClick,
}) => {
  return (
    <StyledContainer
      onClick={onClick}
      className={cn(className, {
        ['discountTab_active']: isActive,
      })}>
      <p className="discountTab__currentPrice">{`${currentPrice} ₽`}</p>
      <p className="discountTab__oldPrice">{`${oldPrice} ₽`}</p>
    </StyledContainer>
  );
};

export default DiscountTab;
