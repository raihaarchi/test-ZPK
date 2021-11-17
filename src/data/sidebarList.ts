import { SidebarList } from 'types/typeSidebarList';

export const sidebarListCustomer: SidebarList[] = [
  {
    name: 'Заявки',
    link: '/orders',
  },
  {
    name: 'Отгрузки',
    link: '/shipments',
  },
  {
    name: 'Профиль',
    link: '/user/profile',
    secondaryLink: '/user/organization-profile',
  },
];

export const sidebarListSupplier: SidebarList[] = [
  {
    name: 'Отгрузки',
    link: '/shipments',
  },
  {
    name: 'Профиль',
    link: '/user/profile',
    secondaryLink: '/user/organization-profile',
  },
];
