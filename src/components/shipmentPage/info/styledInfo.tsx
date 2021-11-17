import styled from 'styled/styled';

export const StyledInfo = styled.div`
  display: flex;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    flex-direction: column;
  }

  &:not(:last-of-type) {
    margin-bottom: 55px;

    @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
      margin-bottom: 50px;
    }
  }
`;
