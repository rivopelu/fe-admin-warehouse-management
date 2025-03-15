import PageContainer from '../../../components/atoms/PageContainer.tsx';
import { PageTitle } from '../../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import { IBreadcrumbData } from '../../../types/data/IBreadcrumbData.ts';
import { ROUTES } from '../../../routes/routes.ts';
import Table from '../../../components/molecules/Table.tsx';
import { useProductPage } from './useProductPage.ts';
import { ITableColumn } from '../../../types/data/ITableColumn.ts';
import { IResListProduct } from '../../../types/response/IResListProduct.ts';
import Flex from '../../../components/atoms/Flex.tsx';
import IconButton from '../../../components/atoms/IconButton.tsx';
import { MdInfo } from 'react-icons/md';

export default function ProductPage() {
  const page = useProductPage();
  const breadcrumbData: IBreadcrumbData[] = [
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
  ];

  const tableColumn: ITableColumn<IResListProduct>[] = [
    {
      component: (data) => (
        <Flex align={'center'} gap={'md'}>
          <img src={data.image_url} alt={data.name} className={'aspect-square bg-slate-200 h-12 border rounded-md'} />
          <div>{data.name}</div>
        </Flex>
      ),
      headerTitle: t('name'),
    },
    {
      component: (data) => <div>{t(data.category_name)}</div>,
      headerTitle: t('category'),
    },
    {
      component: () => (
        <div>
          <IconButton>
            <MdInfo />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <PageContainer>
      <PageTitle title={t('product_management')} breadcrumb={breadcrumbData} />
      <Table data={page.dataList} loading={page.loadingPage} column={tableColumn} />
    </PageContainer>
  );
}
