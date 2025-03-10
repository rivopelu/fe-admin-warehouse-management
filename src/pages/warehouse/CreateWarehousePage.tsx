import PageContainer from '../../components/atoms/PageContainer.tsx';
import { PageTitle } from '../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import { IBreadcrumbData } from '../../types/data/IBreadcrumbData.ts';
import { ROUTES } from '../../routes/routes.ts';
import { Card, CardBody } from '../../components/atoms/Card.tsx';
import Divider from '../../components/atoms/Divider.tsx';
import InputText from '../../components/atoms/InputText.tsx';

function CreateWarehousePage() {
  const breadcrumbData : IBreadcrumbData[] = [
    {
      label : t("home"),
      path : ROUTES.HOME(),
    },
    {
      label : t("warehouse"),
      path : ROUTES.WAREHOUSE(),
    },
    {
     label : t("create_warehouse")
    }
  ]
  return (
    <PageContainer>
      <PageTitle title={t("create_warehouse")} breadcrumb={breadcrumbData} />
      <Card>
        <CardBody>
          <h1>{t("insert_warehouse_data")}</h1>
        </CardBody>
        <Divider/>
        <CardBody>
          <form>
            <InputText required={true} id={"name"} name={"name"} placeholder={t("insert_warehouse_name")} label={t("warehouse_name")}/>
          </form>
        </CardBody>
      </Card>
    </PageContainer>
  );
}

export default CreateWarehousePage;
