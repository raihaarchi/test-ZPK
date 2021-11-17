export type GoodInCart = {
  id: number;
  quantity: number;
  discount: number;
  price: number;
  oldPrice: number;
  priceWithoutVat: number;
  shipmentQuantity: number;
  good: PartialGood;
};

export type PartialGood = {
  barCode: string;
  brand: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  id: number;
  minQuantity: number;
  name: string;
  photo: {
    previewHeight: number;
    previewUrl: string;
    previewWidth: number;
  };
  pickingQuantum: number;
  uniqueCode: string;
  unitKindName: string;
  vatKindValue: string;
  vendorCode: string;
};
