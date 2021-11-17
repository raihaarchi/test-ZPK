import styled from 'styled/styled';
import React, { FC, InputHTMLAttributes } from 'react';

const StyledSwitcher = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  .switcher__slider-wrap {
    display: flex;
    align-items: center;
    position: relative;
    width: 34px;
    height: 20px;
    margin-right: 10px;
  }

  .switcher__input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switcher__slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors['dark-grey']};
    border-radius: 100px;

    transition: 0.4s;

    &::before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      border-radius: 100%;
      transition: 0.4s;
    }
  }

  .switcher__input:checked + .switcher__slider {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  .switcher__input:checked + .switcher__slider:before {
    transform: translateX(14px);
  }

  .switcher__title {
    ${({ theme }) => theme.typography.text14x18};

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text12x15};
    }
  }
`;

interface SwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Switcher: FC<SwitcherProps> = ({ className, title, ...props }) => (
  <StyledSwitcher className={className}>
    <div className="switcher__slider-wrap">
      <input className="switcher__input" type="checkbox" {...props} />
      <span className="switcher__slider" />
    </div>
    {title && <p className="switcher__title">{title}</p>}
  </StyledSwitcher>
);

export default Switcher;
