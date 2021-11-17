import React, { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';

const StyledButton = styled.button`
  ${({ theme }) => theme.typography.text16x20};
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 15px;
  width: 200px;
  flex-shrink: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  padding: 11px 20px;
  height: 50px;

  &:hover {
    .catalog-button__burger-top {
      left: 5px;
    }

    .catalog-button__burger-top_active {
      left: 0;
    }

    .catalog-button__burger-bottom {
      left: -5px;
    }

    .catalog-button__burger-bottom_active {
      left: 0;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    border: none;
    padding: 0;
    height: auto;
    width: auto;

    &:hover {
      .catalog-button__burger-top {
        left: 0;
      }

      .catalog-button__burger-bottom {
        left: 0;
      }
    }

    .catalog-button__text {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    width: 30px;
  }

  .catalog-button__burger {
    position: relative;
    width: 30px;
    height: 16px;
  }

  .catalog-button__burger-global {
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    border-top: 2px solid white;
    width: 100%;
    transition: 0.3s;
  }

  .catalog-button__burger-top {
    top: 0;
  }

  .catalog-button__burger-top_active {
    transform: rotate(45deg);
    top: 7px;
  }

  .catalog-button__burger-middle {
    top: 7px;
  }

  .catalog-button__burger-middle_active {
    opacity: 0;
  }

  .catalog-button__burger-bottom {
    top: 14px;
  }

  .catalog-button__burger-bottom_active {
    transform: rotate(-45deg);
    top: 7px;
  }
`;

interface CatalogButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const CatalogButton: FC<CatalogButtonProps> = ({
  isActive,
  ...buttonProps
}) => {
  return (
    <StyledButton {...buttonProps}>
      <p className="catalog-button__text">Каталог</p>
      <div className="catalog-button__burger">
        <span
          className={cn(
            'catalog-button__burger-global catalog-button__burger-top',
            {
              'catalog-button__burger-top_active': isActive,
            },
          )}></span>
        <span
          className={cn(
            'catalog-button__burger-global catalog-button__burger-middle',
            {
              'catalog-button__burger-middle_active': isActive,
            },
          )}></span>
        <span
          className={cn(
            'catalog-button__burger-global catalog-button__burger-bottom',
            {
              'catalog-button__burger-bottom_active': isActive,
            },
          )}></span>
      </div>
    </StyledButton>
  );
};

export default CatalogButton;
