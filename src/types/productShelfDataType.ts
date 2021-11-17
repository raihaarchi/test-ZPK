export type photo = {
  previewHeight: number;
  previewUrl: string;
  previewWidth: number;
};

export type good = {
  id: number;
  name: string;
  count: number;
  totalPrice: number;
  pricePerOne: number;
  photos: photo[];
};

type productShelfType = {
  id: number;
  image: string;
  count: number;
  oldPrice: number;
  currentPrice: number;
  amount: number;
  discount: number;
  isInStock: boolean;
  goods: good[];
};

export default productShelfType;
