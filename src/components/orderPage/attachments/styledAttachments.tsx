import styled from 'styled/styled';

export const StyledAttachments = styled.div`
  display: flex;

  @media (max-width: ${({ theme: { screens } }) => screens.tablet}) {
    flex-direction: column;
  }

  &:not(:last-of-type) {
    margin-bottom: 48px;

    @media (max-width: ${({ theme: { screens } }) => screens.mobile}) {
      margin-bottom: 30px;
    }
  }
`;
