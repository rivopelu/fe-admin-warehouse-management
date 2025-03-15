import { IReqCreateEditProduct } from '../../../types/request/IReqCreateEditProduct.ts';
import { useFormik } from 'formik';

export function useCreateEditProductPage() {
  const initValue: IReqCreateEditProduct = {
    category_id: '',
    name: '',
    image_url: '',
  };

  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (e) => {
      alert(JSON.stringify(e));
    },
  });

  return { formik };
}
