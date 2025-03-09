import { BasePayload, IPayloadData } from '../../types/data/IResModel.ts';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';
import { createSlice } from '@reduxjs/toolkit';

export interface IMasterDataReducer {
  listPrivileges?: IPayloadData<PRIVILEGE[]>;
}

const initState: IMasterDataReducer = {};

export const MasterDataSlice = createSlice({
  name: 'master-data',
  initialState: initState,
  reducers: {
    getListPrivileges: (state: IMasterDataReducer, action: BasePayload<PRIVILEGE[]>) => {
      state.listPrivileges = action.payload;
    },
  },
});
