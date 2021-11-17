import styled from 'styled/styled';
import { downloadFile } from 'api/sveta';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';

const StyledLink = styled.a`
  color: ${({ theme: { colors } }) => colors.blue};

  &:hover {
    cursor: pointer;
  }
`;

export type dataType = {
  id: number;
  name: string;
  extension: string;
  loading?: boolean;
};

export default function tableFiles<T extends dataType[]>(
  data: T,
  query: ParsedUrlQuery,
) {
  return data.map(({ id, name, extension, loading }) => {
    const nameWithoutExtension = path.basename(name, path.extname(name));

    return {
      id,
      loading,
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
