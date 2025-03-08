import { BasePayloadPaginated, IPayloadDataPaginated } from '../../types/data/IResModel.ts';
import { IResListWarehouse } from '../../types/response/IResListWarehouse.ts';
import { createSlice } from '@reduxjs/toolkit';

export interface IWarehouseSlice {
  listWarehouse?: IPayloadDataPaginated<IResListWarehouse[]>;
}

const initialState: IWarehouseSlice = {};

export const WarehouseSlice = createSlice({
  name: 'warehouse',
  initialState: initialState,
  reducers: {
    setListWarehouse: (state: IWarehouseSlice, action: BasePayloadPaginated<IResListWarehouse[]>) => {
      state.listWarehouse = action.payload;
    },
  },
});
