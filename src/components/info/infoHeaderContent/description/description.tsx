import styled from 'styled/styled';
import React, { FC } from 'react';

const StyledComponent = styled.p`
  ${({ theme }) => theme.typography.text18x25}

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    ${({ theme }) => theme.typography.text16x20}
  }
`;

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const Description: FC<DescriptionProps> = ({ children, className }) => {
  return <StyledComponent className={className}>{children}</StyledComponent>;
};

export default Description;
