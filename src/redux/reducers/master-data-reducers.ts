import { BasePayload, BasePayloadPaginated, IPayloadData, IPayloadDataPaginated } from '../../types/data/IResModel.ts';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';
import { createSlice } from '@reduxjs/toolkit';
import { IResRolePrivileges } from '../../types/response/IResRolePrivileges.ts';
import { IResListCategory } from '../../types/response/IResListCategory.ts';
import { IResListProduct } from '../../types/response/IResListProduct.ts';
import { IResDetailProduct } from '../../types/response/IResDetailProduct.ts';
import { IResListVariantProduct } from '../../types/response/IResListVariantProduct.ts';

export interface IMasterDataReducer {
  listPrivileges?: IPayloadData<PRIVILEGE[]>;
  rolePrivileges?: IPayloadData<IResRolePrivileges[]>;
  listAllCategory?: IPayloadData<IResListCategory[]>;
  listProduct?: IPayloadDataPaginated<IResListProduct[]>;
  detailProduct?: IPayloadData<IResDetailProduct>;
  listProductVariant?: IPayloadData<IResListVariantProduct[]>;
}

const initState: IMasterDataReducer = {};

export const MasterDataSlice = createSlice({
  name: 'master-data',
  initialState: initState,
  reducers: {
    getListPrivileges: (state: IMasterDataReducer, action: BasePayload<PRIVILEGE[]>) => {
      state.listPrivileges = action.payload;
    },
    listRolePrivileges: (state: IMasterDataReducer, action: BasePayload<IResRolePrivileges[]>) => {
      state.rolePrivileges = action.payload;
    },
    listCategory: (state: IMasterDataReducer, action: BasePayload<IResListCategory[]>) => {
      state.listAllCategory = action.payload;
    },
    listProduct: (state: IMasterDataReducer, action: BasePayloadPaginated<IResListProduct[]>) => {
      state.listProduct = action.payload;
    },
    detailProduct: (state: IMasterDataReducer, action: BasePayload<IResDetailProduct>) => {
      state.detailProduct = action.payload;
    },
    listProductVariant: (state: IMasterDataReducer, action: BasePayload<IResListVariantProduct[]>) => {
      state.listProductVariant = action.payload;
    },
  },
});
