import FullScreen from '../../components/atoms/FullScreen.tsx';
import Flex from '../../components/atoms/Flex.tsx';
import Grid from '../../components/atoms/Grid.tsx';
import InputText from '../../components/atoms/InputText.tsx';
import { FormikProvider } from 'formik';
import { useSignInPage } from './useSignInPage.ts';
import Button from '../../components/atoms/Button.tsx';
import { BrandLogo } from '../../components/atoms/BrandLogo.tsx';

export default function SignInPage() {
  const page = useSignInPage();
  return (
    <FullScreen>
      <Grid grid={2}>
        <div>HELLO</div>
        <Flex align={'center'} justify={'center'} className={'min-h-screen'} direction={'col'}>
          <FormikProvider value={page.formik}>
            <form className={'w-sm'}>
              <Grid gap={'md'}>
                <div className={'mb-8'}>
                  <BrandLogo />
                </div>
                <InputText id={'email'} name={'email'} />
                <InputText id={'password'} name={'password'} />
                <Button>SIGN IN</Button>
              </Grid>
            </form>
          </FormikProvider>
        </Flex>
      </Grid>
    </FullScreen>
  );
}
