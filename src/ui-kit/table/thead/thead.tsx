import Th from '../th/th';
import React, { FC } from 'react';
import styled from 'styled/styled';
import { IColumns, SortTypes } from 'types/table';

const StyledThead = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background-color: ${({ theme }) => theme.colors.grey};
  height: 60px;

  .table-head__row {
    display: inline-flex;
    flex: 1 0 auto;
    position: relative;
  }
`;

interface TheadProps {
  columns: IColumns[];
  currentSort: SortTypes;
  setSort: (val: string) => void;
  isRowHoverable: boolean;
}

const Thead: FC<TheadProps> = ({
  columns,
  setSort,
  currentSort,
  isRowHoverable,
}) => (
  <StyledThead>
    <div className="table-head__row">
      {columns.map(({ Header, width, accessor, isSorted }, i) => (
        <Th
          key={i}
          width={width}
          sortType={currentSort.sortOrder}
          isSorted={Boolean(isSorted)}
          isActiveSort={currentSort.accessor === accessor}
          isRowHoverable={isRowHoverable}
          onClick={() => isSorted && setSort(accessor)}>
          {Header}
        </Th>
      ))}
    </div>
  </StyledThead>
);

export default Thead;
