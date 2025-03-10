import { BasePayload, BasePayloadPaginated, IPayloadData, IPayloadDataPaginated } from '../../types/data/IResModel.ts';
import { IResListWarehouse } from '../../types/response/IResListWarehouse.ts';
import { createSlice } from '@reduxjs/toolkit';
import { IResDetailWarehouse } from '../../types/response/IResDetailWarehouse.ts';

export interface IWarehouseSlice {
  listWarehouse?: IPayloadDataPaginated<IResListWarehouse[]>;
  detailWarehouse?: IPayloadData<IResDetailWarehouse>;
}

const initialState: IWarehouseSlice = {};

export const WarehouseSlice = createSlice({
  name: 'warehouse',
  initialState: initialState,
  reducers: {
    setListWarehouse: (state: IWarehouseSlice, action: BasePayloadPaginated<IResListWarehouse[]>) => {
      state.listWarehouse = action.payload;
    },
    detailWarehouse: (state: IWarehouseSlice, action: BasePayload<IResDetailWarehouse>) => {
      state.detailWarehouse = action.payload;
    },
  },
});
