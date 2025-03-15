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
import InputSelect from '../../../components/atoms/InputSelect.tsx';
import Button from '../../../components/atoms/Button.tsx';

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
                  name={'image_url'}
                  onBlur={page.formik.handleBlur}
                  errorMessage={page?.formik?.touched?.image_url && page?.formik?.errors?.image_url}
                />
                <InputText
                  id={'name'}
                  name={'name'}
                  label={t('product_name')}
                  placeholder={t('insert_product_name')}
                  required
                />
                <InputSelect
                  required
                  label={t('category')}
                  placeholder={t('select_category')}
                  options={page.listCategories}
                  name={'category_id'}
                />
                <div className={'h-4'}></div>
                <Button onClick={() => page.formik.handleSubmit()}>{t('submit')}</Button>
              </Grid>
            </form>
          </FormikProvider>
        </CardBody>
      </Card>
    </PageContainer>
  );
}
