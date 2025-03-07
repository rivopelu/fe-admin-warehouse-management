import { useFormik } from 'formik';
import { IReqSignIn } from '../../types/request/IReqSignIn.ts';
import { useState } from 'react';

export function useSignInPage() {

  const [showPassword, setShowPassword] = useState<boolean>(false);

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
  return { formik, setShowPassword, showPassword };
}
