import FullScreen from '../../components/atoms/FullScreen.tsx';
import Flex from '../../components/atoms/Flex.tsx';
import Grid from '../../components/atoms/Grid.tsx';
import InputText from '../../components/atoms/InputText.tsx';
import { FormikProvider } from 'formik';
import { useSignInPage } from './useSignInPage.ts';
import Button from '../../components/atoms/Button.tsx';
import { BrandLogo } from '../../components/atoms/BrandLogo.tsx';
import { t } from 'i18next';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

export default function SignInPage() {
  const page = useSignInPage();
  return (
    <FullScreen>
      <Grid grid={2}>
        <div></div>
        <Flex align={'center'} justify={'center'} className={'min-h-screen'} direction={'col'}>
          <FormikProvider value={page.formik}>
            <form className={'w-sm'}>
              <Grid gap={'md'}>
                <div className={'mb-8'}>
                  <BrandLogo />
                </div>
                <InputText id={'email'} name={'email'} label={t('email')} placeholder={t('insert_email')} />
                <InputText
                  id={'password'}
                  name={'password'}
                  label={t('password')}
                  placeholder={t('insert_password')}
                  type={page.showPassword ? "text" : "password"}
                  endIcon={
                    <div className={"cursor-pointer text-slate-700"} onClick={() => page.setShowPassword((e) => !e)}>
                      {!page.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                    </div>
                  }
                />
                <div className={"text-primary-main hover:underline hover:text-primary-dark cursor-pointer"}>{t("forgot_password")}</div>
                <Button className={'uppercase'}>{t('sign_in')}</Button>
              </Grid>
            </form>
          </FormikProvider>
        </Flex>
      </Grid>
    </FullScreen>
  );
}
