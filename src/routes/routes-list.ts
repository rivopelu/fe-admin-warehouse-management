import { IRouteList } from '../types/data/IRouteList.ts';
import { ROUTES } from './routes.ts';
import { PAGE_TYPE_ENUM } from '../enums/page-type-enum.ts';
import HomePage from '../pages/home/HomePage.tsx';
import SignInPage from '../pages/auth/SignInPage.tsx';
import TestPage from '../pages/TestPage.tsx';
import WarehousePage from '../pages/warehouse/WarehousePage.tsx';
import CreateWarehousePage from '../pages/warehouse/CreateWarehousePage.tsx';
import { PRIVILEGE } from '../enums/privilege-enum.ts';

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
    route: ROUTES.WAREHOUSE(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: WarehousePage,
  },
  {
    privilege : PRIVILEGE.CREATE_WAREHOUSE,
    route: ROUTES.CREATE_WAREHOUSE(),
    type: PAGE_TYPE_ENUM.PRIMARY,
    elements: CreateWarehousePage,
  },
];

export const publicRoutesList: IRouteList[] = [
  {
    route: ROUTES.SIGN_IN(),
    type: PAGE_TYPE_ENUM.FULL_PAGE,
    elements: SignInPage,
  },
];
