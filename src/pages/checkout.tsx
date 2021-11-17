import CheckoutPageContent from 'components/checkoutPage/checkoutPageContent/checkoutPageContent';
import Head from 'next/head';

export const Checkout = () => {
  return (
    <>
      <Head>
        <title>Оформление заказа - ЗаПокупки.рф</title>
      </Head>
      <CheckoutPageContent />
    </>
  );
};

export default Checkout;
