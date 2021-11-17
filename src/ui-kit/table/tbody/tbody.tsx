import Tr from '../tr/tr';
import Td from '../td/td';
import styled from 'styled/styled';
import React, { ReactElement } from 'react';
import { TableBodyProps } from 'types/table';

const StyledTbody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Tbody = <T extends Record<string, unknown>>({
  data,
  columns,
  isRowHover,
  getKey,
  onRowHover,
  onRowClick,
}: TableBodyProps<T>): ReactElement => {
  return (
    <StyledTbody>
      {data.map((row) => (
        <Tr
          key={getKey(row)}
          isOpacity={row.hasOwnProperty('delete')}
          onHover={(isHovered) =>
            onRowHover && onRowHover({ id: getKey(row), isHovered })
          }
          onClick={() => onRowClick && onRowClick(Number(getKey(row)))}
          isRowHover={isRowHover}>
          {columns.map(({ render, width }, i) => (
            <Td isRowHoverable={Boolean(onRowHover)} width={width} key={i}>
              {render(row)}
            </Td>
          ))}
        </Tr>
      ))}
    </StyledTbody>
  );
};

export default Tbody;
