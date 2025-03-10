export const ROUTES = {
  SIGN_IN: () => `/auth/sign-in`,
  WAREHOUSE: () => `/warehouse`,
  CREATE_WAREHOUSE: () => `/warehouse/create`,
  HOME: () => `/`,
  TEST: () => `/test`,
  EDIT_WAREHOUSE: (id: string) => `/warehouse/edit/${id}`,
  SETTING_PRIVILEGE: () => `/setting/privilege`,
};
