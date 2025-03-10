export interface IReqCreateWarehouse {
  name: string;
  address: string;
  province_id?: number;
  city_id?: number;
  district_id?: number;
  sub_district_id?: number;
}
