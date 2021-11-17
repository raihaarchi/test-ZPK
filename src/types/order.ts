import { ReactText } from 'react';
import { DeliveryType } from 'types/delivery';
import { Shipment } from 'types/shipment';

export type OrderMovementStatus = {
  id: number;
  name: string;
  code: 'Draft' | string;
};

export type OrderTable = {
  id: number;
  documentNumber: string;
  date: string;
  supplier: string;
  sum: ReactText;
  movementStatus: string;
};

export type typeNote = {
  body: string;
  creationDateTime: string;
  id: number;
  user: { fullName: string; id: number };
};

export type Order = {
  id: number;
  itemsCount: number;
  sum: number;
  prepaimentSum: number;
  prepaimentPercent: number;
  sumWithoutVat: number;
  minOrderSum: number;
  inQueueTransferDate: string;
  attachments: string[];
  creationDateTime: string;
  documentNumber: string;
  parentId?: 0;
  wasEdited: boolean;

  childrenId: 0 | number; // id отгрузки, 0 если отгрузки нет
  shipment: Shipment | null;

  deliveryType: DeliveryType;
  movementStatus: {
    id: number;
    name: string;
    code: string;
  };

  actions: Array<{
    type: 'GET' | 'POST';
    code: string;
    caption: string;
    action: string;
  }>;

  allowedDeliveryTypes: Array<{
    id: number;
    name: string;
    deliveryCostType: string | null;
  }>;

  supplier: {
    id: number;
    inn: string;
    kindId: number;
    shortName: string;
  };

  sender: {
    id: number;
    name: string;
    address: string;
  };

  customer: {
    id: number;
    inn: string;
    kindId: number;
    shortName: string;
  };
  notes?: typeNote[];
};

export type SelectOptionFromApi = {
  id: number;
  name: string;
};
