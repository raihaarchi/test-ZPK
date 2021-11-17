import Head from 'next/head';
import React, { FC } from 'react';
import { fetchContacts } from 'api/integration-api';
import ContactsInfo from 'components/info/contactsPage/contactsInfo/contactsInfo';
import ContactsHeader from 'components/info/contactsPage/contactsHeader/contactsHeader';

export type ContactsProps = {
  data: { [key: string]: string };
};

const Contacts: FC<ContactsProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <ContactsHeader title={data.title} />
      <ContactsInfo data={data} />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await fetchContacts();

  return {
    props: { data },
  };
}

export default Contacts;
