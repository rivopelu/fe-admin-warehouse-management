import BaseActions from '../base-actions.ts';
import { MasterDataSlice } from '../reducers/master-data-reducers.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse } from '../../types/data/IResModel.ts';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';

export class MasterDataActions extends BaseActions {
  private action = MasterDataSlice.actions;

  getListPrivileges() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.getListPrivileges({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.LIST_PRIVILEGES())
        .then((res: BaseResponse<PRIVILEGE[]>) => {
          dispatch(this.action.getListPrivileges({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.getListPrivileges({ loading: false, data: undefined }));
        });
    };
  }
}
