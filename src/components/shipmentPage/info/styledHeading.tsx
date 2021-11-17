import styled from 'styled/styled';

export const StyledHeading = styled.div`
  ${({ theme }) => theme.typography.text18x26Bold};
  margin-bottom: 6px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    ${({ theme }) => theme.typography.text18x26Bold};
    margin-bottom: 10px;
  }
  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    ${({ theme }) => theme.typography.text16x20Bold};
    margin-bottom: 10px;
  }
`;
