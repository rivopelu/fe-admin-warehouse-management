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
  const [listCity, setListCity] = useState<ILabelValue<number>[]>([]);
  const [listDistrict, setListDistrict] = useState<ILabelValue<number>[]>([]);
  const [listSubDistrict, setListSubDistrict] = useState<ILabelValue<number>[]>([]);

  const httpService = new HttpService();
  const errorService = new ErrorService();

  const errors = formik?.errors as FormikErrors<Record<string, any>>;
  const touched = formik?.touched as FormikTouched<Record<string, any>>;

  useEffect(() => {
    if (formik.values['province_id']) {
      setListDistrict([]);
      setListCity([]);
      setListSubDistrict([]);
      fetchCity(formik.values['province_id']);
    }
  }, [formik.values['province_id']]);

  useEffect(() => {
    setListDistrict([]);
    setListSubDistrict([]);
    if (formik.values['city_id']) {
      fetchDistrict(formik.values['city_id']);
    }
  }, [formik.values['city_id']]);

  useEffect(() => {
    if (formik.values['district_id']) {
      fetchSubDistrict(formik.values['district_id']);
    }
  }, [formik.values['district_id']]);

  function fetchCity(provinceId: string) {
    setListCity([]);
    setListDistrict([]);
    httpService
      .GET(ENDPOINT.AREA_LIST.CITY(provinceId))
      .then((res: BaseResponse<IResArea[]>) => {
        const data: ILabelValue<number>[] = res.data.response_data.map((e) => {
          return {
            label: e.name,
            value: e.id,
          };
        });
        setListCity(data);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
      });
  }

  function fetchDistrict(cityId: string) {
    setListDistrict([]);
    setListSubDistrict([]);
    httpService
      .GET(ENDPOINT.AREA_LIST.DISTRICT(cityId))
      .then((res: BaseResponse<IResArea[]>) => {
        const data: ILabelValue<number>[] = res.data.response_data.map((e) => {
          return {
            label: e.name,
            value: e.id,
          };
        });
        setListDistrict(data);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
      });
  }

  function fetchSubDistrict(districtId: string) {
    setListSubDistrict([]);
    httpService
      .GET(ENDPOINT.AREA_LIST.SUB_DISTRICT(districtId))
      .then((res: BaseResponse<IResArea[]>) => {
        const data: ILabelValue<number>[] = res.data.response_data.map((e) => {
          return {
            label: e.name,
            value: e.id,
          };
        });
        setListSubDistrict(data);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
      });
  }

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

  function checkDisableCity() {
    return !formik.values['province_id'];
  }

  function checkDisableDistrict() {
    return !formik.values['province_id'] && !formik.values['city_id'];
  }
  function checkDisableSubDistrict() {
    return !formik.values['province_id'] && !formik.values['city_id'] && !formik.values['district_id'];
  }
  return {
    formik,
    errors,
    touched,
    listProvince,
    listCity,
    checkDisableCity,
    listDistrict,
    checkDisableDistrict,
    listSubDistrict,
    checkDisableSubDistrict,
  };
}
