import { ISideBarMenuList } from '../types/data/ISideBarMenuList.ts';
import { ROUTES } from '../routes/routes.ts';
import { t } from 'i18next';
import { MdHome, MdSettings, MdWarehouse } from 'react-icons/md';
import { PRIVILEGE } from '../enums/privilege-enum.ts';

export const sidebarMenuList: ISideBarMenuList[] = [
  {
    path: ROUTES.HOME(),
    label: t('home'),
    icon: MdHome,
  },
  {
    privilege: PRIVILEGE.LIST_WAREHOUSE,
    path: ROUTES.WAREHOUSE(),
    label: t('warehouse'),
    icon: MdWarehouse,
  },
  {
    privilege: PRIVILEGE.SETTING_PRIVILEGE,
    path: ROUTES.SETTING_PRIVILEGE(),
    label: t('setting'),
    icon: MdSettings,
  },
];
