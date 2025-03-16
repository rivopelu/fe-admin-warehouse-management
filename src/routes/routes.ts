export const ROUTES = {
  SIGN_IN: () => `/auth/sign-in`,
  WAREHOUSE: () => `/warehouse`,
  CREATE_WAREHOUSE: () => `/warehouse/create`,
  HOME: () => `/`,
  TEST: () => `/test`,
  EDIT_WAREHOUSE: (id: string) => `/warehouse/edit/${id}`,
  SETTING_PRIVILEGE: () => `/setting/privilege`,
  MASTER_DATA: {
    CATEGORY: () => `/master-data/category`,
    PRODUCT: () => `/master-data/product`,
    CREATE_PRODUCT: () => `/master-data/product/new`,
    DETAIL_PRODUCT: (id: string) => `/master-data/product/detail/${id}`,
  },
};
