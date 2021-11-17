import Tbody from './tbody/tbody';
import Thead from './thead/thead';
import styled from 'styled/styled';
import useScreen from 'hooks/useScreen';
import { TableProps, SortTypes, sortEnum } from 'types/table';
import React, { ReactElement, useState } from 'react';

const StyledTable = styled.div`
  width: 100%;
`;

const StyledEmpty = styled.h1`
  min-height: 200px;
  width: 100%;
  text-align: center;
`;

const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  isRowHover,
  getKey,
  mobileCard = () => null,
  tabletCard = () => null,
  changeSort,
  onRowHover,
  onRowClick,
}: TableProps<T>): ReactElement => {
  const [sort, setSort] = useState<SortTypes>({
    accessor: '',
    sortOrder: sortEnum.asc,
  });

  const onChangeSort = async (accessor: string) => {
    const sortData = {
      accessor,
      sortOrder:
        sort.accessor === accessor && sort.sortOrder == sortEnum.desc
          ? sortEnum.asc
          : sortEnum.desc,
    };
    changeSort && (await changeSort(sortData));
    setSort(sortData);
  };

  const { isTablet, isMobile } = useScreen();

  return (
    <StyledTable>
      {!Boolean(data.length) && <StyledEmpty>Нет данных</StyledEmpty>}
      {!isTablet && Boolean(data.length) && (
        <>
          <Thead
            columns={columns}
            isRowHoverable={Boolean(onRowHover)}
            setSort={onChangeSort}
            currentSort={sort}
          />
          <Tbody<T>
            columns={columns}
            data={data}
            onRowHover={onRowHover}
            onRowClick={onRowClick}
            getKey={getKey}
            isRowHover={isRowHover}
          />
        </>
      )}
      {isTablet && !isMobile && data.map(tabletCard)}
      {isMobile && data.map(mobileCard)}
    </StyledTable>
  );
};

export default Table;
