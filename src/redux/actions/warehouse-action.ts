import BaseActions from '../base-actions.ts';
import { WarehouseSlice } from '../reducers/warehouse-reducers.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse, BaseResponsePaginated } from '../../types/data/IResModel.ts';
import { IResListWarehouse } from '../../types/response/IResListWarehouse.ts';
import { IResDetailWarehouse } from '../../types/response/IResDetailWarehouse.ts';

export class WarehouseAction extends BaseActions {
  private action = WarehouseSlice.actions;

  getListWarehouse() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.setListWarehouse({ loading: true, data: undefined }));
      this.httpService
        .GET(ENDPOINT.LIST_WAREHOUSE())
        .then((res: BaseResponsePaginated<IResListWarehouse[]>) => {
          dispatch(
            this.action.setListWarehouse({
              loading: false,
              data: res.data.response_data,
              paginated_data: res.data.paginated_data,
            }),
          );
        })
        .catch((e) => {
          dispatch(this.action.setListWarehouse({ loading: false, data: undefined, paginated_data: undefined }));
          this.errorService.fetchApiError(e);
        });
    };
  }

  detailWarehouse(id: string) {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.detailWarehouse({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.DETAIL_WAREHOUSE(id))
        .then((res: BaseResponse<IResDetailWarehouse>) => {
          dispatch(this.action.detailWarehouse({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.detailWarehouse({ loading: false, data: undefined }));
        });
    };
  }
}
