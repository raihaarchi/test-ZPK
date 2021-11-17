import Head from 'next/head';
import React, { FC } from 'react';
import { fetchSuppliers } from 'api/integration-api';
import { SuppliersData, SuppliersCard } from '../types/suppliers';
import SuppliersInfo from 'components/info/suppliersPage/suppliersInfo/suppliersInfo';
import SuppliersForm from 'components/info/suppliersPage/suppliersForm/suppliersForm';
import SuppliersCarts from 'components/info/suppliersPage/suppliersCards/suppliersCards';
import SuppliersHeader from 'components/info/suppliersPage/suppliersHeader/suppliersHeader';

type suppliersInfoDataType = {
  receive: string[];
  provide: string[];
};

export const Suppliers: FC<SuppliersData> = ({ data }) => {
  const cards: SuppliersCard[] = [
    {
      order: 1,
      title: data.text_card_1,
      color: '#b7d4ff',
      marginTop: '20px',
      marginTopTablet: '0',
    },
    {
      order: 2,
      title: data.text_card_2,
      color: '#a0e6ba',
      marginTop: '80px',
      marginTopTablet: '20px',
    },
    {
      order: 3,
      title: data.text_card_3,
      color: '#ffda70',
      marginTop: '0',
      marginTopTablet: '0',
    },
    {
      order: 4,
      title: data.text_card_4,
      color: '#9ca5f4',
      marginTop: '120px',
      marginTopTablet: '30px',
    },
    {
      order: 5,
      title: data.text_card_5,
      color: '#f3b2cd',
      marginTop: '60px',
      marginTopTablet: '10px',
    },
  ];

  const getData = (str: string) =>
    Object.keys(data)
      .map((el) => el.includes(str) && el)
      .filter(Boolean) as string[];

  const suppliersInfoData: suppliersInfoDataType = {
    receive: getData('group1').map((el) => data[el]),
    provide: getData('group2').map((el) => data[el]),
  };

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <SuppliersHeader title={data.title} description={data.description} />
      <SuppliersCarts containerTitle={data.title_card_group} data={cards} />
      <SuppliersInfo
        titleLeft={data.title_list_group_1}
        titleRight={data.title_list_group_2}
        data={suppliersInfoData}
      />
      <SuppliersForm />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await fetchSuppliers();

  return {
    props: { data },
  };
}

export default Suppliers;
