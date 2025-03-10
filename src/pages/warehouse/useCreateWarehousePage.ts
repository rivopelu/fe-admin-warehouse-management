import { IReqCreateWarehouse } from '../../types/request/IReqCreateWarehouse.ts';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { t } from 'i18next';
import { useState } from 'react';
import { HttpService } from '../../services/http.service.ts';
import ErrorService from '../../services/error.service.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes.ts';

export default function useCreateWarehousePage() {
  const [showModalSubmit, setShowModalSubmit] = useState<boolean>(false);
  const [data, setData] = useState<IReqCreateWarehouse | undefined>();
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const navigate = useNavigate();
  const httpService = new HttpService();
  const errorService = new ErrorService();

  const initState: IReqCreateWarehouse = {
    name: '',
    address: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('validation.required', { name: t('name') })),
    address: yup.string().required(t('validation.required', { name: t('address') })),
    province_id: yup.number().required(t('validation.required', { name: t('province') })),
    city_id: yup.number().required(t('validation.required', { name: t('city') })),
    district_id: yup.number().required(t('validation.required', { name: t('district') })),
    sub_district_id: yup.number().required(t('validation.required', { name: t('sub_district') })),
  });

  const formik = useFormik({
    initialValues: initState,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setShowModalSubmit(true);
      setData(values);
    },
  });

  function onCloseModalSubmit() {
    setShowModalSubmit(false);
  }

  function onSubmit() {
    if (data) {
      setLoadingSubmit(true);
      httpService
        .POST(ENDPOINT.CREATE_WAREHOUSE(), data)
        .then(() => {
          setLoadingSubmit(false);
          toast.success(t('warehouse_success_created'));
          navigate(ROUTES.WAREHOUSE());
        })
        .catch((e) => {
          setLoadingSubmit(false);
          errorService.fetchApiError(e);
        });
    }
  }
  return { formik, showModalSubmit, onCloseModalSubmit, onSubmit, loadingSubmit };
}
