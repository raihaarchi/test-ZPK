import styled from 'styled/styled';
import { downloadFile } from 'api/sveta';
import { ParsedUrlQuery } from 'querystring';

const StyledLink = styled.a`
  color: ${({ theme: { colors } }) => colors.blue};

  &:hover {
    cursor: pointer;
  }
`;

const documents = [
  {
    heading: 'PDF',
    fileName: 'Универсальный передаточный документ',
    fileExtension: 'pdf',
    fileLink: 'Print',
  },
  {
    heading: 'PDF',
    fileName: 'Товарная накладная (ТОРГ-12)',
    fileExtension: 'pdf',
    fileLink: 'PrintTorg',
  },
  {
    heading: 'PDF',
    fileName: 'Транспортная накладная',
    fileExtension: 'pdf',
    fileLink: 'PrintTn',
  },
  {
    heading: 'PDF',
    fileName: 'Торгово-транспортная накладная (1-Т)',
    fileExtension: 'pdf',
    fileLink: 'PrintTtn',
  },
  {
    heading: 'PDF',
    fileName: 'Счет-фактура',
    fileExtension: 'pdf',
    fileLink: 'PrintSf',
  },
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
