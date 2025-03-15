import PageContainer from '../../../components/atoms/PageContainer.tsx';
import { IBreadcrumbData } from '../../../types/data/IBreadcrumbData.ts';
import { ROUTES } from '../../../routes/routes.ts';
import { t } from 'i18next';
import { PageTitle } from '../../../components/atoms/PageTitle.tsx';
import { Card, CardBody, CardTitle } from '../../../components/atoms/Card.tsx';
import Divider from '../../../components/atoms/Divider.tsx';
import { FormikProvider } from 'formik';
import InputText from '../../../components/atoms/InputText.tsx';
import { useCreateEditProductPage } from './useCreateEditProductPage.ts';
import UploadBoxCropperArea from '../../../components/molecules/UploadBoxCropperArea.tsx';
import Grid from '../../../components/atoms/Grid.tsx';

export default function CreateEditProductPage() {
  const page = useCreateEditProductPage();
  const breadCrumbs: IBreadcrumbData[] = [
    {
      label: t('home'),
      path: ROUTES.HOME(),
    },
    {
      label: t('master_data'),
      path: ROUTES.MASTER_DATA.PRODUCT(),
    },
    {
      label: t('product'),
      path: ROUTES.MASTER_DATA.PRODUCT(),
    },
    {
      label: t('create_product'),
    },
  ];
  return (
    <PageContainer>
      <PageTitle title={t('create_new_product')} breadcrumb={breadCrumbs} />
      <Card>
        <CardBody>
          <CardTitle title={t('insert_product_data')} />
        </CardBody>
        <Divider />
        <CardBody>
          <FormikProvider value={page.formik}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid>
                <UploadBoxCropperArea
                  onChange={(e) => page.formik.setFieldValue('image_url', e)}
                  value={page.formik.values.image_url}
                  label={'image'}
                  required
                />
                <InputText
                  id={'name'}
                  name={'name'}
                  label={t('product_name')}
                  placeholder={t('insert_product_name')}
                  required
                />
              </Grid>
            </form>
          </FormikProvider>
        </CardBody>
      </Card>
    </PageContainer>
  );
}
