import { InputHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';

const StyledContainer = styled.label`
  ${({ theme }) => theme.typography.text16x20};
  position: relative;
  color: ${(props) => props.theme.colors.blue};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;

  .input__label {
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.5;
    margin-bottom: 5px;
  }

  .input__input {
    ${({ theme }) => theme.typography.text16x20};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    outline: none;
    border: none;
    width: 100%;
    padding: 15px 20px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 10px 20px;
      border-radius: 8px;
    }

    &::placeholder {
      ${({ theme }) => theme.typography.text16x20};
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  .input__theme-secondary {
    ${({ theme }) => theme.typography.text14x18};

    background-color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors['dark-grey']};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.black};
    height: 60px;
    padding: 0 20px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 40px;
    }

    &::placeholder {
      ${({ theme }) => theme.typography.text14x18};
      color: ${({ theme }) => theme.colors['lighter-grey']};
    }
  }

  .input__theme-small {
    ${({ theme }) => theme.typography.text14x18};
    border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.black};
    padding: 9px 20px;

    &::placeholder {
      ${({ theme }) => theme.typography.text14x18};
      color: ${({ theme }) => theme.colors['lighter-grey']};
    }
  }

  .input__theme-grey {
    ${({ theme }) => theme.typography.text14x18};

    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors['dark-grey']};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.black};

    &::placeholder {
      ${({ theme }) => theme.typography.text14x18};
      color: ${({ theme }) => theme.colors['lighter-grey']};
    }
  }

  .input-error {
    border: 2px solid ${(props) => props.theme.colors.red};
  }
`;

interface CustomInputStyles extends InputHTMLAttributes<HTMLInputElement> {
  theme?: 'primary' | 'secondary' | 'small' | 'grey';
  isError?: boolean;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, CustomInputStyles>(
  (
    { className, theme = 'primary', isError = false, label, ...inputProps },
    ref,
  ) => {
    return (
      <StyledContainer className={className}>
        {!!label && <p className="input__label">{label}</p>}
        <input
          className={cn('input__input', `input__theme-${theme}`, {
            ['input-error']: isError,
          })}
          ref={ref}
          {...inputProps}
        />
      </StyledContainer>
    );
  },
);

Input.displayName = 'Input';

export default Input;
