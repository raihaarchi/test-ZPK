import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.label`
  cursor: pointer;
  display: inline-flex;

  .radio__input {
    display: none;
  }

  .radio__custom-input-wrapper {
    display: inline-flex;
    align-items: center;
  }

  .radio__custom-input {
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .radio__custom-input-ellipse {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: transparent;
    transition: all 0.3s;
  }

  .radio__label {
    ${({ theme }) => theme.typography.text18x26Bold}
    margin-left: 15px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18Bold}
    }
  }

  .radio__input:checked + .radio__custom-input-wrapper {
    .radio__custom-input {
      border: 2px solid ${({ theme }) => theme.colors.blue};
      background: ${({ theme }) => theme.colors.blue};
    }

    .radio__custom-input-ellipse {
      background: ${({ theme }) => theme.colors.white};
    }
  }
`;

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...inputProps }, ref) => {
    return (
      <StyledContainer className={className}>
        <input
          type="radio"
          {...inputProps}
          ref={ref}
          className="radio__input"
        />
        <div className="radio__custom-input-wrapper">
          <span className="radio__custom-input">
            <span className="radio__custom-input-ellipse"></span>
          </span>
          <p className="radio__label">{label}</p>
        </div>
      </StyledContainer>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
