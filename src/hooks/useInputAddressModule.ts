import { FormikErrors, FormikTouched, useFormikContext } from 'formik';
import { HttpService } from '../services/http.service.ts';
import { useEffect, useState } from 'react';
import { IResArea } from '../types/response/IResArea.ts';
import { ENDPOINT } from '../constants/endpoint.ts';
import { BaseResponse } from '../types/data/IResModel.ts';
import ErrorService from '../services/error.service.ts';
import { ILabelValue } from '../types/data/ILabelValue.ts';

export default function useInputAddressModule() {
  const formik = useFormikContext<any>();

  const [listProvince, setListProvince] = useState<ILabelValue<number>[]>([]);

  const httpService = new HttpService();
  const errorService = new ErrorService();

  const errors = formik?.errors as FormikErrors<Record<string, any>>;
  const touched = formik?.touched as FormikTouched<Record<string, any>>;

  // const errorMessage = props.errorMessage ?? (errors?.[props.name] && touched?.[props.name] ? errors[props.name] : '');

  useEffect(() => {
    httpService
      .GET(ENDPOINT.AREA_LIST.PROVINCE())
      .then((res: BaseResponse<IResArea[]>) => {
        const data: ILabelValue<number>[] = res.data.response_data.map((e) => {
          return {
            label: e.name,
            value: e.id,
          };
        });
        setListProvince(data);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
      });
  }, []);

  useEffect(() => {
    console.log(listProvince);
  }, [listProvince]);

  return { formik, errors, touched, listProvince };
}
