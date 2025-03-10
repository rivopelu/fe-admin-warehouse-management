import { IRouteList } from '../types/data/IRouteList.ts';
import { ROUTES } from './routes.ts';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';
import HomePage from '../pages/home/HomePage.tsx';
import SignInPage from '../pages/auth/SignInPage.tsx';
import TestPage from '../pages/TestPage.tsx';
import WarehousePage from '../pages/warehouse/WarehousePage.tsx';
import CreateEditWarehousePage from '../pages/warehouse/CreateEditWarehousePage.tsx';
import { PRIVILEGE } from '../enums/privilege-enum.ts';
import SettingPagePrivilegesPage from '../pages/settings/SettingPagePrivilegesPage.tsx';

export const routesList: IRouteList[] = [
  {
    route: ROUTES.HOME(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: HomePage,
  },
  {
    route: ROUTES.TEST(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: TestPage,
  },
  {
    privilege: PRIVILEGE.LIST_WAREHOUSE,
    route: ROUTES.WAREHOUSE(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: WarehousePage,
  },
  {
    privilege: PRIVILEGE.CREATE_WAREHOUSE,
    route: ROUTES.CREATE_WAREHOUSE(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: CreateEditWarehousePage,
  },
  {
    privilege: PRIVILEGE.SETTING_PRIVILEGE,
    route: ROUTES.SETTING_PRIVILEGE(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: SettingPagePrivilegesPage,
  },
  {
    privilege: PRIVILEGE.EDIT_WAREHOUSE,
    route: ROUTES.EDIT_WAREHOUSE(':id'),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: CreateEditWarehousePage,
  },
];

export const publicRoutesList: IRouteList[] = [
  {
    route: ROUTES.SIGN_IN(),
    type: PAGE_TYPE_ENUM.FULL_PAGE,
    elements: SignInPage,
  },
];
