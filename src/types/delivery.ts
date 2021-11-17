export type Cluster = {
  id: number;
  name: string;
};

export type Delivery = {
  cluster: Cluster;
  deliveryTypes: DeliveryType[];
};

export type DeliveryType = {
  id: number;
  name: string;
  deliveryCostType: Array<{
    id: number;
    name: string;
  }>;
};
