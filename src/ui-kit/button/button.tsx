import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.01em;
  transition: all 0.3s;
  white-space: nowrap;

  &.button__theme-primary {
    background: ${(props) => props.theme.colors.blue};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.white};
    padding: 0 25px;
    height: 40px;
    ${({ theme }) => theme.typography.text14x18}

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 0 15px;
      height: 30px;
      border-radius: 8px;
    }

    &:hover {
      background: ${(props) => props.theme.colors['dark-blue']};
    }
  }

  &.button__theme-secondary {
    background: ${(props) => props.theme.colors.blue};
    border-radius: 15px;
    color: ${(props) => props.theme.colors.white};
    padding: 0 40px;
    height: 60px;
    ${({ theme }) => theme.typography.text18x25}

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 0 15px;
      height: 40px;
      border-radius: 8px;
      ${({ theme }) => theme.typography.text16x20};
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18};
    }

    &:hover {
      background: ${(props) => props.theme.colors['dark-blue']};
    }
  }

  &.button__theme-secondary-accent {
    background: ${(props) => props.theme.colors.white};
    border-radius: 15px;
    color: ${(props) => props.theme.colors.black};
    padding: 0 40px;
    height: 60px;
    ${({ theme }) => theme.typography.text18x25}

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 0 15px;
      height: 40px;
      border-radius: 8px;
      ${({ theme }) => theme.typography.text16x20};
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text14x18};
    }

    &:hover {
      background: ${(props) => props.theme.colors.grey};
    }
  }

  &.button__theme-round {
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    width: 90px;
    height: 90px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 45px;
      height: 45px;
    }
    &:hover {
      background: ${(props) => props.theme.colors['dark-blue']};
    }
  }

  &.button__theme-small {
    background: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    height: 40px;
    padding: 0 20px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      padding: 0 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 0 6px;
      height: 30px;
    }

    &:hover {
      background: ${(props) => props.theme.colors['dark-blue']};
    }
  }

  &.button__theme-small-accent {
    background: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.blue};
    border-radius: 8px;
    height: 40px;
    padding: 0 20px;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      padding: 0 15px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding: 0 6px;
      height: 30px;
    }
    &:hover {
      background: ${(props) => props.theme.colors['dark-grey']};
    }
  }

  &.button__theme-underline {
    ${({ theme }) => theme.typography.text14x18};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    cursor: pointer;
    outline: none;
  }
`;
interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?:
    | 'primary'
    | 'secondary'
    | 'secondary-accent'
    | 'round'
    | 'small'
    | 'small-accent'
    | 'underline';
}

const Button: FC<ButtonPropsType> = ({
  theme = 'primary',
  className,
  ...other
}) => {
  return (
    <StyledButton
      className={cn(`button__theme-${theme}`, className)}
      {...other}
    />
  );
};

export default Button;
