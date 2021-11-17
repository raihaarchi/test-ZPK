import styled from 'styled/styled';
import { downloadFile } from 'api/sveta';
import { ParsedUrlQuery } from 'querystring';

const StyledLink = styled.a`
  color: ${({ theme: { colors } }) => colors.blue};

  &:hover {
    cursor: pointer;
  }
`;

export type documentType = {
  heading: string;
  fileName: string;
  fileExtension: string;
  fileLink: string;
};

const documents: documentType[] = [
  {
    heading: 'ZIP',
    fileName: 'Все документы в архиве',
    fileExtension: 'zip',
    fileLink: 'PrintArchive',
  },
];

export default function tableDocuments({ id }: ParsedUrlQuery) {
  return documents.map(({ heading, fileName, fileExtension, fileLink }) => ({
    heading,
    content: (
      <StyledLink
        onClick={() =>
          downloadFile(`shipments/${id}/${fileLink}`, fileName, fileExtension)
        }>
        {fileName}
      </StyledLink>
    ),
  }));
}
