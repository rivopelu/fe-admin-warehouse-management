import PageContainer from '../../../components/atoms/PageContainer.tsx';
import { PageTitle } from '../../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import useCategoryPage from './useCategoryPage.ts';
import { Card, CardBody } from '../../../components/atoms/Card.tsx';
import { IBreadcrumbData } from '../../../types/data/IBreadcrumbData.ts';
import { ROUTES } from '../../../routes/routes.ts';

export default function CategoryPage() {
  const page = useCategoryPage();

  const breadcrumbs: IBreadcrumbData[] = [
    {
      label: t('home'),
      path: ROUTES.HOME(),
    },
    {
      label: t('master_data'),
      path: ROUTES.MASTER_DATA.CATEGORY(),
    },
    {
      label: t('category'),
    },
  ];

  return (
    <PageContainer>
      <PageTitle breadcrumb={breadcrumbs} title={t('category')} />
      <div className={'grid grid-cols-3 gap-2'}>
        {page.dataList.map((item, i) => (
          <Card key={i}>
            <CardBody>
              <div>{item.name}</div>
            </CardBody>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
