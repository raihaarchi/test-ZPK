import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.label`
  max-width: 410px;
  width: 100%;
  height: auto;

  .checkout-radio__custom-radio-wrapper {
    height: 100%;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    display: flex;
    cursor: pointer;
    padding: 16px 20px 15px 42px;
    transition: all 0.3s;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 20px 15px 18px 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      padding: 10px 14px 10px 10px;
    }
  }

  .checkout-radio__input {
    display: none;
  }

  .checkout-radio__custom-radio {
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
    border-radius: 100%;
    margin-right: 25px;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: 10px;
      margin-top: 0;
    }

    .checkout-radio__custom-radio-ellipse {
      width: 8px;
      height: 8px;
      background: transparent;
      border-radius: 100%;
    }
  }

  .checkout-radio__label {
    ${({ theme }) => theme.typography.text18x26Bold};
    margin-bottom: 3px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text16x20Bold};
      margin-bottom: 4px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18Bold};
      margin-bottom: 5px;
    }
  }

  .checkout-radio__description {
    ${({ theme }) => theme.typography.text16x20};
    opacity: 0.5;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text14x18};
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text12x15};
    }
  }

  .checkout-radio__text-wrapper {
    flex: 1;
  }

  .checkout-radio__input:checked + .checkout-radio__custom-radio-wrapper {
    border: 2px solid ${({ theme }) => theme.colors.grey};
    background: ${({ theme }) => theme.colors.grey};

    .checkout-radio__custom-radio {
      border: 2px solid ${({ theme }) => theme.colors.blue};
      background: ${({ theme }) => theme.colors.blue};

      .checkout-radio__custom-radio-ellipse {
        background: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

interface CheckoutRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description: string;
}

const CheckoutRadio = forwardRef<HTMLInputElement, CheckoutRadioProps>(
  ({ label, description, className, ...props }, ref) => {
    return (
      <StyledContainer className={className}>
        <input
          className="checkout-radio__input"
          {...props}
          type="radio"
          ref={ref}
        />
        <div className="checkout-radio__custom-radio-wrapper">
          <span className="checkout-radio__custom-radio">
            <span className="checkout-radio__custom-radio-ellipse"></span>
          </span>
          <div className="checkout-radio__text-wrapper">
            <p className="checkout-radio__label">{label}</p>
            <p className="checkout-radio__description">{description}</p>
          </div>
        </div>
      </StyledContainer>
    );
  },
);

CheckoutRadio.displayName = 'CheckoutRadio';

export default CheckoutRadio;
