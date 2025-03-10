import { IReqCreateWarehouse } from '../../types/request/IReqCreateWarehouse.ts';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { HttpService } from '../../services/http.service.ts';
import ErrorService from '../../services/error.service.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../routes/routes.ts';
import { useAppDispatch, useAppSelector } from '../../redux/stores.ts';
import { WarehouseAction } from '../../redux/actions/warehouse-action.ts';

export default function useCreateWarehousePage() {
  const [showModalSubmit, setShowModalSubmit] = useState<boolean>(false);
  const [data, setData] = useState<IReqCreateWarehouse | undefined>();
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  const Warehouse = useAppSelector((state) => state.Warehouse);
  const detail = Warehouse?.detailWarehouse?.data;
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const httpService = new HttpService();
  const errorService = new ErrorService();
  const warehouseAction = new WarehouseAction();

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

  useEffect(() => {
    if (!detail) return;
    const data: IReqCreateWarehouse = {
      name: detail?.name,
      address: detail?.address,
      province_id: detail?.province_id,
      city_id: detail?.city_id,
      district_id: detail?.district_id,
      sub_district_id: detail?.sub_district_id,
    };
    formik.setValues(data);
  }, [detail]);

  useEffect(() => {
    if (!id) {
      formik.setValues(initState);
    } else {
      dispatch(warehouseAction.detailWarehouse(id)).then();
    }
  }, [id]);

  function onCloseModalSubmit() {
    setShowModalSubmit(false);
  }

  function onSubmit() {
    if (data) {
      setLoadingSubmit(true);
      httpService[id ? 'PUT' : 'POST'](id ? ENDPOINT.EDIT_WAREHOUSE(id) : ENDPOINT.CREATE_WAREHOUSE(), data)
        .then(() => {
          setLoadingSubmit(false);
          toast.success(t(id ? 'warehouse_success_updated' : 'warehouse_success_created'));
          navigate(ROUTES.WAREHOUSE());
        })
        .catch((e) => {
          setLoadingSubmit(false);
          errorService.fetchApiError(e);
        });
    }
  }

  return { formik, showModalSubmit, onCloseModalSubmit, onSubmit, loadingSubmit, id };
}
