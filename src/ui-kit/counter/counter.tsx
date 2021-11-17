import MinusIcon from 'components/icons/minusIcon';
import PlusIcon from 'components/icons/plusIcon';
import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
  border-radius: 8px;
  height: 50px;
  width: 200px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    height: 40px;
    width: 196px;
  }

  .counter__amount {
    ${({ theme }) => theme.typography.text16x20};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .counter__button {
    height: 100%;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
    outline: none;

    &:disabled {
      color: ${({ theme }) => theme.colors['dark-grey']};
    }
  }
`;

export interface CounterPropsType {
  className?: string;
  value: number;
  increase: () => void;
  decrease: () => void;
  min?: number;
  max?: number;
}

const Counter: FC<CounterPropsType> = ({
  className,
  value,
  increase,
  decrease,
  min = 0,
  max = 999999,
}) => {
  return (
    <StyledContainer className={className}>
      <button
        onClick={decrease}
        className="counter__button"
        disabled={value === min}>
        <MinusIcon />
      </button>
      <div className="counter__amount">{`${value} шт`}</div>
      <button
        onClick={increase}
        className="counter__button"
        disabled={value === max}>
        <PlusIcon />
      </button>
    </StyledContainer>
  );
};

export default Counter;
