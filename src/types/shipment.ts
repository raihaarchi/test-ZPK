import { ReactText } from 'react';

export type ShipmentMovementStatus = {
  id: number;
  name: string;
  code:
    | 'PaymentAwaiting' // ожидает оплаты
    | 'Picking' // сборка
    | 'ReadyForShipment' // готов к выдаче
    | 'Transit' // заказ в пути
    | 'Shipped' // заказ выдан
    | 'Received' // заказ принят
    | string;
};

export type ShipmentTable = {
  id: number;
  documentNumber: string;
  date: string;
  sender: string;
  supplier: string;
  sum: ReactText;
  movementStatus: string;
};

export type ShipmentAction = {
  action: string;
  caption: string;
  code:
    | 'CreateOnBase'
    | 'Payment'
    | 'Csv'
    | 'RejectByCustomer'
    | 'SimpleShipmentPdf'
    | 'GetOnBase'
    | 'Xlsx';
  type: 'GET' | 'POST';
};

export type typeNote = {
  body: string;
  creationDateTime: string;
  id: number;
  user: { fullName: string; id: number };
};

export type Shipment = {
  id: number;
  documentNumber: string;
  creationDateTime: string;
  sumWithoutVat: number;
  parentId: 0 | number;
  sender: {
    address: string;
    id: number;
    name: string;
  };
  supplier: {
    id: number;
    inn: string;
    kindId: number;
    shortName: string;
  };
  sum: ReactText;
  movementStatus: ShipmentMovementStatus;
  wasEdited: boolean;
  actions: ShipmentAction[];
  notes?: typeNote[];
};

export type SelectOptionFromApi = {
  id: number;
  name: string;
};
