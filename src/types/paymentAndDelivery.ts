export type City = {
  name: string;
  min_sum: string;
  iframe: string;
  delivery: string;
  address: string;
  work_time: string;
};

type PaymentAndDeliveryTypes = {
  title: string;
  title_payment: string;
  condition_1: string;
  condition_2: string;
  condition_3: string;
  condition_4: string;
  title_delivery: string;
  cities: City[];
};

export default PaymentAndDeliveryTypes;
