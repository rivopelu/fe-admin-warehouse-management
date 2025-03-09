import { BasePayload, IPayloadData } from '../../types/data/IResModel.ts';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';
import { createSlice } from '@reduxjs/toolkit';
import { IResRolePrivileges } from '../../types/response/IResRolePrivileges.ts';

export interface IMasterDataReducer {
  listPrivileges?: IPayloadData<PRIVILEGE[]>;
  rolePrivileges?: IPayloadData<IResRolePrivileges[]>;
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
  },
});
