import { useFormik } from 'formik';
import { IReqSignIn } from '../../types/request/IReqSignIn.ts';

export function useSignInPage() {
  const initValue: IReqSignIn = {
    password: '',
    email: '',
  };
  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return { formik };
}
