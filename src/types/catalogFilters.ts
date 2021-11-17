export type CatalogFilters = {
  brands: CheckboxFilters[];
  price: PriceFilters;
};

export type CheckboxFilters = {
  id: number;
  name: string;
  checked?: boolean;
};

export type PriceFilters = { priceFrom: number; priceTo: number };
