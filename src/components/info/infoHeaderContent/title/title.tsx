import React, { FC } from 'react';
import styled from 'styled/styled';

const StyledTitle = styled.h2`
  ${({ theme }) => theme.typography.text80x80}

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    ${({ theme }) => theme.typography.text30x30}
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    ${({ theme }) => theme.typography.text16x20Bold}
  }
`;

interface TitleProps {
  children: React.ReactNode;
  className: string;
}

const Title: FC<TitleProps> = ({ children, className }) => (
  <StyledTitle className={className}>{children}</StyledTitle>
);

export default Title;
