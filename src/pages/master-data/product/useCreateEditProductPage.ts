import { IReqCreateEditProduct } from '../../../types/request/IReqCreateEditProduct.ts';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../redux/stores.ts';
import { MasterDataActions } from '../../../redux/actions/master-data-actions.ts';
import { useEffect, useState } from 'react';
import { ILabelValue } from '../../../types/data/ILabelValue.ts';
import * as yup from 'yup';
import { t } from 'i18next';

export function useCreateEditProductPage() {
  const dispatch = useAppDispatch();
  const masterDataAction = new MasterDataActions();
  const MasterData = useAppSelector((state) => state.MasterData);

  const [listCategories, setListCategories] = useState<ILabelValue<string>[]>([]);

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
      alert(JSON.stringify(e));
    },
  });

  return { formik, listCategories };
}
