export enum dateSelectsValue {
  allTime = 'allTime',
  period = 'period',
  month = 'month',
  twoWeeks = 'twoWeeks',
  week = 'week',
  yesterday = 'yesterday',
  today = 'today',
  selectDay = 'selectDay',
}

export type dateFilter = {
  select: keyof typeof dateSelectsValue;
  fromDate?: string;
  toDate?: string;
};

export type typeFiltering = {
  supplierId?: number;
  statusId?: number;
  senderId?: number;
  documentNumber?: string;
  filter?: string;
  date?: dateFilter;
};

export type typeFilteringNormilized = {
  supplierId?: number;
  statusId?: number;
  senderId?: number;
  fromDate?: string;
  toDate?: string;
  documentNumber?: string;
};
