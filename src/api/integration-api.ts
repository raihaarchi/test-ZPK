import axiosBase from 'axios';
import { Issue } from 'types/issue';
import { FaqDataType } from 'types/faq';
import { DigestProps } from 'pages/digest';
import { ContactsProps } from 'pages/contacts';
import { SuppliersData } from 'types/suppliers';
import { AboutServiceType } from 'types/aboutServiceTypes';
import { PromoDataType, PromosDataType } from 'types/promo';
import PaymentAndDeliveryTypes from 'types/paymentAndDelivery';

export const axios = axiosBase.create({
  baseURL: process.env.NEXT_PUBLIC_INTEGRATION_API_URL,
  timeout: 10000,
});

export const fetchFaq = async (): Promise<{ data: FaqDataType }> =>
  (await axios.get<{ data: FaqDataType }>('faq')).data;

export const fetchPaymentAndDelivery = async (): Promise<{
  data: PaymentAndDeliveryTypes;
}> => (await axios.get('payment-delivery')).data;

export const fetchAboutService = async (): Promise<{
  data: AboutServiceType;
}> => (await axios.get('about')).data;

export const fetchSuppliers = async (): Promise<{
  data: SuppliersData;
}> => (await axios.get('suppliers')).data;

export const fetchContacts = async (): Promise<{
  data: ContactsProps;
}> => (await axios.get('contacts')).data;

export const fetchDigestInfo = async (): Promise<{
  data: DigestProps;
}> => (await axios.get('digest')).data;

export const fetchDigestMagazines = async (
  sort: string,
): Promise<{
  data: Issue[];
}> => (await axios.get(`publications?${sort}`)).data;

export const postForm = async (data: FormData) =>
  (
    await axios.post('feedback-supplier', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  ).data;

export const fetchPromos = async (): Promise<{ data: PromosDataType[] }> => {
  return (await axios.get(`promos`)).data;
};

export const fetchPromo = async (
  slug: string,
): Promise<{ data: PromoDataType }> => {
  return (await axios.get(`promos/${slug}`)).data;
};
