import { WarehouseSlice } from './reducers/warehouse-reducers.ts';
import { MasterDataSlice } from './reducers/master-data-reducers.ts';

export const combineReducers = {
  Warehouse: WarehouseSlice.reducer,
  MasterData: MasterDataSlice.reducer,
};
