import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled/styled';

const StyledRangeInput = styled.div`
  position: relative;
  max-width: 94px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    max-width: 100%;
    width: 100%;
  }

  .range-input__input {
    ${({ theme }) => theme.typography.text14x18}
    position: relative;
    width: 100%;
    padding: 10px 13px 8px;
    border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
    background: transparent;
    border-radius: 8px;
    outline: none;
    z-index: 2;
  }

  .range-input__input_hidden {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: transparent;
    z-index: 1;
    height: 100%;
    white-space: nowrap;
    padding: 10px 13px 8px;
  }

  .range-input__currency {
    color: ${({ theme }) => theme.colors['dark-grey']};
    ${({ theme }) => theme.typography.text12x15}
  }
`;

interface RangeFilterProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value: number | undefined;
}

const RangeInput: FC<RangeFilterProps> = ({ className, value, ...props }) => {
  return (
    <StyledRangeInput className={className}>
      <input className="range-input__input" value={value || 0} {...props} />
      <div className="range-input__input range-input__input_hidden">
        <span>{value || 0}</span>
        <span className="range-input__currency"> ₽</span>
      </div>
    </StyledRangeInput>
  );
};

export default RangeInput;
