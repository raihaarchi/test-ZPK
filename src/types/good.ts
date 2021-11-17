export type Good = {
  brand: {
    id: number;
    name: string;
  };

  category: {
    id: number;
    excludeFromGoogleFeed: boolean;
    excludeFromYandexFeed: boolean;
    googleProductCategoryCode: number | null;
    name: string;
  };

  country: {
    id: number;
    name: string;
  };

  photos: Array<{
    id: number;
    previewHeight: number;
    previewUrl: string;
    previewWidth: number;
    fullSizeUrl: string;
    fullSizeWidth: number;
    fullSizeHeight: number;
  }>;

  id: number;
  discount: number | null;
  labelColor: string | null;
  minDeliveryLot: number;
  minQuantity: number;
  name: string;
  oldPrice: number | null;
  pickingQuantum: number;
  price: number;
  restQuantity: number;
  subBrand: string | null;
  textColor: string | null;
  transparency: number;
  uniqueCode: string;

  unitKind: {
    id: number;
    code: string;
    name: string;
  };

  vatKind: {
    id: number;
    name: string;
    code: string;
  };

  vendorCode: string;
};
