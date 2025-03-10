import { IReqCreateWarehouse } from '../../types/request/IReqCreateWarehouse.ts';
import { useFormik } from 'formik';

export default function useCreateWarehousePage() {
  const initState: IReqCreateWarehouse = {
    name: '',
    address: '',
  };

  const formik = useFormik({
    initialValues: initState,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return { formik };
}
