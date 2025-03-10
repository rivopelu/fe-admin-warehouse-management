import { IReqCreateWarehouse } from '../../types/request/IReqCreateWarehouse.ts';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { t } from 'i18next';
import { useState } from 'react';

export default function useCreateWarehousePage() {
  const [showModalSubmit, setShowModalSubmit] = useState<boolean>(true);

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
      alert(JSON.stringify(values));
    },
  });

  function onCloseModalSubmit() {
    setShowModalSubmit(false);
  }

  return { formik, showModalSubmit, onCloseModalSubmit };
}
