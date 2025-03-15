import BaseActions from '../base-actions.ts';
import { MasterDataSlice } from '../reducers/master-data-reducers.ts';
import { Dispatch } from '@reduxjs/toolkit';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse, BaseResponsePaginated } from '../../types/data/IResModel.ts';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';
import { IResRolePrivileges } from '../../types/response/IResRolePrivileges.ts';
import { IResListCategory } from '../../types/response/IResListCategory.ts';
import { IResListProduct } from '../../types/response/IResListProduct.ts';

export class MasterDataActions extends BaseActions {
  private action = MasterDataSlice.actions;

  getListProduct(param?: string) {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.listProduct({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.LIST_PRODUCT() + (param || ''))
        .then((res: BaseResponsePaginated<IResListProduct[]>) => {
          dispatch(
            this.action.listProduct({
              loading: false,
              data: res.data.response_data,
              paginated_data: res.data.paginated_data,
            }),
          );
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.listProduct({ loading: false, data: [] }));
        });
    };
  }

  getListAllCategory() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.listCategory({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.LIST_ALL_CATEGORY())
        .then((res: BaseResponse<IResListCategory[]>) => {
          dispatch(this.action.listCategory({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.listCategory({ loading: false, data: undefined }));
        });
    };
  }

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

  getListRolePrivileges() {
    return async (dispatch: Dispatch) => {
      dispatch(this.action.listRolePrivileges({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.ROLE_PRIVILEGES())
        .then((res: BaseResponse<IResRolePrivileges[]>) => {
          dispatch(this.action.listRolePrivileges({ loading: false, data: res.data.response_data }));
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.action.listRolePrivileges({ loading: false, data: undefined }));
        });
    };
  }
}
