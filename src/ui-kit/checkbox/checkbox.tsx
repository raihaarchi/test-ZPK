import React, { InputHTMLAttributes, FC } from 'react';
import styled from 'styled/styled';
import cn from 'classnames';
import CheckIcon from 'components/icons/checkIcon';

const StyledContainer = styled.div`
  display: flex;

  .checkbox__label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .checkbox__custom-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    .checkbox__icon {
      visibility: hidden;
      color: ${({ theme }) => theme.colors['dark-grey']};
    }
  }

  &:hover {
    .checkbox__icon {
      visibility: visible;
    }
  }

  .checkbox__input:checked + .checkbox__custom-checkbox {
    border: 2px solid ${({ theme }) => theme.colors.blue};
    background: ${({ theme }) => theme.colors.blue};

    .checkbox__icon {
      color: ${({ theme }) => theme.colors.white};
      visibility: visible;
    }
  }

  .checkbox__input {
    display: none;
  }

  .checkbox__label-text {
    margin-left: 10px;
    ${({ theme }) => theme.typography.text14x18}

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text12x15};
    }
  }
`;

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox: FC<CheckboxProps> = ({ className, label, ...inputProps }) => {
  return (
    <StyledContainer className={className}>
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox" {...inputProps} />
        <span className={cn('checkbox__custom-checkbox')}>
          <CheckIcon className="checkbox__icon" />
        </span>
        {!!label && <span className="checkbox__label-text">{label}</span>}
      </label>
    </StyledContainer>
  );
};

export default Checkbox;
