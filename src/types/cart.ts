import { GoodInCart } from 'types/goodInCart';
import { Shop } from 'types/shop';

export type Cart = {
  id: number;
  itemsCount: number;
  sum: number;
  sumWithoutVat: number;
  minOrderSum: number;
};

export type AnonCart = {
  cache: AnonCartItem[];
  total: number;
};

export type AnonCartItem = {
  id: number;

  canMerge: boolean;
  availableReceiver: Shop[];

  items: GoodInCart[];
  reason: null | string;

  receiver: {
    id: number;
    name: string;
    contragentId: number;
  };

  sender: {
    id: number;
    name: string;
    contragentId: number;
  };
};
