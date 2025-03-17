export interface IResListVariantProduct {
  id: string;
  unique_code: string;
  image_url: string;
  name: string;
  description: string;
  units: IResListUnitVariant[];
}

export interface IResListUnitVariant {
  type: string;
  quantity: number;
  parent_type: string;
  is_main_parent: false;
  count: number;
}
