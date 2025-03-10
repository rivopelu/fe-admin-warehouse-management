export const ENDPOINT = {
  AREA_LIST: {
    PROVINCE: () => `/area/v1/province`,
    CITY: (provinceId: string) => `/area/v1/city/${provinceId}`,
    DISTRICT: (cityId: string) => `/area/v1/district/${cityId}`,
    SUB_DISTRICT: (districtId: string) => `/area/v1/sub-district/${districtId}`,
  },
  SIGN_IN: () => `/auth/v1/admin/sign-in`,
  GET_ME: () => `/account/v1/me`,
  LIST_WAREHOUSE: () => `/warehouse/v1/list`,
  LIST_PRIVILEGES: () => `/v1/list-privileges`,
  ROLE_PRIVILEGES: () => `/v1/role-privilege`,
  SETTING_PRIVILEGE: () => `/setting/privilege`,
};
