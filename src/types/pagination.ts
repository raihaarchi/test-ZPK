export type Pagination = {
  from: number;
  lastPage: number;
  limit: number;
  nextPageUrl: string | null;
  page: number;
  prevPageUrl: string | null;
  to: number;
  totalCount: number;
  totalFilteredCount: number;
};
