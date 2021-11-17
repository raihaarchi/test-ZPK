import React, { FC } from 'react';
import styled from 'styled/styled';

interface StyleContainer {
  className?: string;
}

const StyledSuppliersPage = styled.div<StyleContainer>`
  box-sizing: border-box;
  padding-bottom: 160px;
  min-width: 584px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    min-width: auto;
    padding-bottom: 100px;
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-bottom: 80px;
  }
  :before {
    content: '';
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.colors.black};
  }

  .suppliers-header {
    margin-top: 30px;
    max-width: 580px;
    ${({ theme }) => theme.typography.text55x60};

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30};
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20Bold};
    }
  }

  .suppliers-carts {
    margin-top: 70px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 30px;
    }
  }
`;

interface Container {
  title: string;
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

const Container: FC<Container> = ({ title, className, children }) => {
  return (
    <StyledSuppliersPage className={className}>
      <p className="suppliers-header">{title}</p>
      {children}
    </StyledSuppliersPage>
  );
};

export default Container;
