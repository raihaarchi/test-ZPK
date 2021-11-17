export type FilterCategory = {
  id: number;
  code: string;
  expandable: boolean;
  name: string;
  parentCode: number | null;
  parentId: number;

  children: FilterCategory[];
};
