import styled from 'styled/styled';

export const StyledName = styled.div`
  ${({ theme }) => theme.typography.text18x25};

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    ${({ theme }) => theme.typography.text16x20};
  }
`;
