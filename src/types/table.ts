import { ReactNode, ReactText } from 'react';

export interface IColumns {
  Header: string;
  accessor: string;
  width: number;
  isSorted?: boolean;
}

export interface IColumnsData<T> extends IColumns {
  render: (row: T) => ReactNode;
}

export enum sortEnum {
  asc = 'asc',
  desc = 'desc',
}

export type sortOrder = keyof typeof sortEnum;

export type SortTypes = {
  accessor: string;
  sortOrder: sortOrder;
};

export type ChangeSortType = ({
  accessor,
  sortOrder,
}: SortTypes) => Promise<void>;

export type RowHoverProps = {
  id?: ReactText;
  idOrder?: ReactText;
  isHovered: boolean;
};

export interface TableBodyProps<T> {
  columns: IColumnsData<T>[];
  data: T[];
  isRowHover?: boolean;
  onRowHover?: (props: RowHoverProps) => ReactNode;
  onRowClick?: (id: number) => void;
  getKey: (row: T) => ReactText;
}

export interface TableProps<T> extends TableBodyProps<T> {
  sort?: string;
  changeSort?: ChangeSortType;
  mobileCard?: (row: T) => ReactNode;
  tabletCard?: (row: T) => ReactNode;
}
