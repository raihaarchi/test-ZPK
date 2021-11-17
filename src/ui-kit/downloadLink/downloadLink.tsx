import DocumentIcon from 'components/icons/documentIcon';
import { AnchorHTMLAttributes, FC } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.typography.text14x18};

  .download-link__icon {
    margin-right: 5px;
    align-self: flex-start;
  }
`;

interface DownloadLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
}

const DownloadLink: FC<DownloadLinkProps> = ({ name, ...linkProps }) => {
  return (
    <StyledContainer download {...linkProps}>
      <DocumentIcon className="download-link__icon" />
      <p>{name}</p>
    </StyledContainer>
  );
};

export default DownloadLink;
