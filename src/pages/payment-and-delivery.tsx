import Head from 'next/head';
import React, { FC } from 'react';
import { fetchPaymentAndDelivery } from 'api/integration-api';
import PaymentAndDeliveryTypes from 'types/paymentAndDelivery';
import PaymentAndDeliveryContent from 'components/info/paymentAndDelivery/paymentAndDeliveryContent';

type PaymentAndDeliveryProps = {
  data: PaymentAndDeliveryTypes;
};

const PaymentAndDelivery: FC<PaymentAndDeliveryProps> = ({ data }) => (
  <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <PaymentAndDeliveryContent data={data} />
  </>
);

export async function getStaticProps() {
  const { data } = await fetchPaymentAndDelivery();

  return {
    props: { data },
  };
}

export default PaymentAndDelivery;
