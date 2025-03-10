import PageContainer from '../../components/atoms/PageContainer.tsx';
import { PageTitle } from '../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import { IBreadcrumbData } from '../../types/data/IBreadcrumbData.ts';
import { ROUTES } from '../../routes/routes.ts';
import { Card, CardBody } from '../../components/atoms/Card.tsx';
import Divider from '../../components/atoms/Divider.tsx';
import InputText from '../../components/atoms/InputText.tsx';
import { FormikProvider } from 'formik';
import useCreateWarehousePage from './useCreateWarehousePage.ts';
import InputTextarea from '../../components/atoms/InputTextArea.tsx';
import { InputAddressModule } from '../../components/molecules/InputAddressModule.tsx';
import Button from '../../components/atoms/Button.tsx';
import Grid from '../../components/atoms/Grid.tsx';
import PopupQuestion from '../../components/molecules/PopupQuestion.tsx';
import { ASSETS } from '../../constants/assets.ts';

function CreateEditWarehousePage() {
  const page = useCreateWarehousePage();

  const breadcrumbData: IBreadcrumbData[] = [
    {
      label: t('home'),
      path: ROUTES.HOME(),
    },
    {
      label: t('warehouse'),
      path: ROUTES.WAREHOUSE(),
    },
    {
      label: t(page?.id ? 'edit_warehouse' : 'create_warehouse'),
    },
  ];

  return (
    <PageContainer>
      <PopupQuestion
        onSubmit={page.onSubmit}
        loading={page.loadingSubmit}
        onClose={page.onCloseModalSubmit}
        open={page.showModalSubmit}
        title={t(page?.id ? 'confirmation.title_edit_warehouse' : 'confirmation.title_create_warehouse')}
        img={ASSETS.IL_CONFIRMATION_SUBMIT}
      />
      <PageTitle title={t(page?.id ? 'edit_warehouse' : 'create_warehouse')} breadcrumb={breadcrumbData} />
      <Card>
        <CardBody>
          <h1>{t('insert_warehouse_data')}</h1>
        </CardBody>
        <Divider />
        <CardBody>
          <FormikProvider value={page.formik}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                page.formik.handleSubmit();
              }}
            >
              <Grid gap={'md'}>
                <InputText
                  required={true}
                  id={'name'}
                  name={'name'}
                  type={'text'}
                  placeholder={t('insert_warehouse_name')}
                  label={t('warehouse_name')}
                />
                <InputTextarea
                  required={true}
                  id={'address'}
                  name={'address'}
                  placeholder={t('insert_warehouse_address')}
                  label={t('warehouse_address')}
                />
                <InputAddressModule />
                <Button className={'mt-6'}>{t('submit')}</Button>
              </Grid>
            </form>
          </FormikProvider>
        </CardBody>
      </Card>
    </PageContainer>
  );
}

export default CreateEditWarehousePage;
