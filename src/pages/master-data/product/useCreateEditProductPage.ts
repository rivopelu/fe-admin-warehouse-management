import { IReqCreateEditProduct } from '../../../types/request/IReqCreateEditProduct.ts';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../redux/stores.ts';
import { MasterDataActions } from '../../../redux/actions/master-data-actions.ts';
import { useEffect, useState } from 'react';
import { ILabelValue } from '../../../types/data/ILabelValue.ts';
import * as yup from 'yup';
import { t } from 'i18next';
import { HttpService } from '../../../services/http.service.ts';
import { ENDPOINT } from '../../../constants/endpoint.ts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes/routes.ts';
import ErrorService from '../../../services/error.service.ts';

export function useCreateEditProductPage() {
  const dispatch = useAppDispatch();
  const masterDataAction = new MasterDataActions();
  const MasterData = useAppSelector((state) => state.MasterData);
  const httpService = new HttpService();
  const erroService = new ErrorService();
  const navigate = useNavigate();

  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [listCategories, setListCategories] = useState<ILabelValue<string>[]>([]);
  const [checkedConfirmation, setCheckedConfirmation] = useState<boolean>(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('validation.required', { name: t('product_name') })),
    category_id: yup.string().required(t('validation.required', { name: t('category') })),
    image_url: yup.string().required(t('validation.required', { name: t('image') })),
  });

  const initValue: IReqCreateEditProduct = {
    category_id: '',
    name: '',
    image_url: '',
  };

  useEffect(() => {
    dispatch(masterDataAction.getListAllCategory()).then();
  }, []);

  useEffect(() => {
    if (!MasterData?.listAllCategory?.data) return;
    const data: ILabelValue<string>[] = MasterData.listAllCategory.data.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
    setListCategories(data);
  }, [MasterData?.listAllCategory?.data]);

  const formik = useFormik({
    initialValues: initValue,
    validationSchema: validationSchema,
    onSubmit: (e) => {
      if (checkedConfirmation) {
        setLoadingCreate(true);
        httpService
          .POST(ENDPOINT.CREATE_PRODUCT(), e)
          .then(() => {
            toast.success(t('product_success_created'));
            setLoadingCreate(false);
            navigate(ROUTES.MASTER_DATA.PRODUCT());
          })
          .catch((e) => {
            erroService.fetchApiError(e);
            setLoadingCreate(false);
          });
      }
    },
  });

  function checkDisableButton() {
    if (checkedConfirmation) {
      return !formik.isValid;
    } else {
      return true;
    }
  }

  return { formik, listCategories, checkedConfirmation, setCheckedConfirmation, checkDisableButton, loadingCreate };
}
