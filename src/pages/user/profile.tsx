import { FC } from 'react';
import Head from 'next/head';
import UserLayout from 'components/userPage/userLayout';
import Profile from 'components/userPage/userProfile';

const UserProfile: FC & { Layout: FC } = () => (
  <>
    <Head>
      <title>Профиль</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Profile />
  </>
);

UserProfile.Layout = UserLayout;

export default UserProfile;
