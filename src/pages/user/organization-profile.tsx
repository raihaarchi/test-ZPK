import { FC } from 'react';
import Head from 'next/head';
import UserLayout from 'components/userPage/userLayout';
import UserOrganizationProfile from 'components/userPage/userOrganizationProfile';

const OrganizationProfile: FC & { Layout: FC } = () => (
  <>
    <Head>
      <title>Профиль</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UserOrganizationProfile />
  </>
);

OrganizationProfile.Layout = UserLayout;

export default OrganizationProfile;
