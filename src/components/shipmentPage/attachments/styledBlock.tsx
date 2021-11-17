import styled from 'styled/styled';

export const StyledBlock = styled.div`
  min-width: 235px;
  max-width: 235px;
  margin-right: 25px;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    max-width: none;
    min-width: auto;
    margin-right: 0;
    margin-bottom: 25px;
  }

  @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
    margin-bottom: 20px;
  }
`;
