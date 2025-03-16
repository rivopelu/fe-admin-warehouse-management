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
import CategoryPage from '../pages/master-data/category/CategoryPage.tsx';
import ProductPage from '../pages/master-data/product/ProductPage.tsx';
import CreateEditProductPage from '../pages/master-data/product/CreateEditProductPage.tsx';
import DetailProductPage from '../pages/master-data/product/DetailProductPage.tsx';

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
  {
    privilege: PRIVILEGE.EDIT_WAREHOUSE, // todo : add privilege
    route: ROUTES.MASTER_DATA.CATEGORY(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: CategoryPage,
  },
  {
    privilege: PRIVILEGE.EDIT_WAREHOUSE, // todo : add privilege
    route: ROUTES.MASTER_DATA.PRODUCT(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: ProductPage,
  },
  {
    route: ROUTES.MASTER_DATA.CREATE_PRODUCT(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: CreateEditProductPage,
  },
  {
    route: ROUTES.MASTER_DATA.DETAIL_PRODUCT(':id'),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: DetailProductPage,
  },
];

export const publicRoutesList: IRouteList[] = [
  {
    route: ROUTES.SIGN_IN(),
    type: PAGE_TYPE_ENUM.FULL_PAGE,
    elements: SignInPage,
  },
];
