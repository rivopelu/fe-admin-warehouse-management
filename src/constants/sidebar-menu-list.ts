import { ISideBarMenuList } from '../types/data/ISideBarMenuList.ts';
import { ROUTES } from '../routes/routes.ts';
import { t } from 'i18next';
import { MdHome, MdWarehouse } from 'react-icons/md';

export const sidebarMenuList : ISideBarMenuList[] = [
  {
    path: ROUTES.HOME(),
    label: t('home'),
    icon : MdHome
  },
  {
    path: ROUTES.WAREHOUSE(),
    label: t('warehouse'),
    icon : MdWarehouse
  },
];