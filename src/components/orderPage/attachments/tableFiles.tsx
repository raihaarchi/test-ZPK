import styled from 'styled/styled';
import { downloadFile } from 'api/sveta';
import path from 'path';
import { dataType } from '../../shipmentPage/attachments/tableFiles';
import { ParsedUrlQuery } from 'querystring';

const StyledLink = styled.a`
  color: ${({ theme: { colors } }) => colors.blue};

  &:hover {
    cursor: pointer;
  }
`;

export default function tableFiles<T extends dataType[]>(
  data: T,
  query: ParsedUrlQuery,
) {
  return data.map(({ id, name, extension }) => {
    const nameWithoutExtension = path.basename(name, path.extname(name));

    return {
      heading: extension.toUpperCase(),
      content: (
        <StyledLink
          onClick={() =>
            downloadFile(
              `shipments/${query.id}/Attachment?attachmentsId=${id}`,
              nameWithoutExtension,
              extension,
            )
          }>
          {name}
        </StyledLink>
      ),
    };
  });
}
