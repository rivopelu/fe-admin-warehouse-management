import { useFormik } from 'formik';
import { IReqSignIn } from '../../types/request/IReqSignIn.ts';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth.ts';

export function useSignInPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const auth = useAuth();

  const initValue: IReqSignIn = {
    password: 'admin',
    email: 'admin@gmail.com',
  };
  const formik = useFormik({
    initialValues: initValue,
    onSubmit: (values) => {
      auth.loginAction(values, setLoading);
    },
  });
  return { formik, setShowPassword, showPassword, loading };
}
