type typeInfo = {
  data: {
    supplier: {
      inn: string;
      shortName: string;
    };
    sender: {
      name: string;
      address: string;
    };
    customer: {
      shortName: string;
      inn: string;
    };
    receiver: {
      name: string;
      address: string;
    };
    itemsCount: number;
    creationDateTime: string;
    prepaimentSum: number;
    prepaimentPercent: number;
    sum: number;
    sumWithoutVat: number;
    deliveryType: {
      name: string;
    };
    documentNumber: string;
  };
};

type typeProducts = {
  id: number;
  good: {
    id?: string | number;
    name: string;
    vendorCode: number;
    minQuantity: number;
    pickingQuantum: number;
  };
  productName: string;
  linkedMovementQuantity: number;
  quantity: number;
  price: number;
  sumNDS: string;
  delete?: boolean;
};

type typeHistory = {
  id: number;
  modifyDateTime: string;
  movementStatusId: {
    name: string;
  };
  user: {
    name: string;
    id: number;
  };
};

export type { typeInfo, typeProducts, typeHistory };
