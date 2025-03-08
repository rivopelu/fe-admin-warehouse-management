import PageContainer from '../../components/atoms/PageContainer.tsx';
import { PageTitle } from '../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import { useWarehousePage } from './useWarehousePage.ts';

const WarehousePage = () => {
  const page = useWarehousePage();
  return (
    <PageContainer>
      <PageTitle title={t('warehouse_management')} breadcrumb={page.dataBreadcrumb} />
      <div>
        {page.listData.map((item, i) => (
          <div key={i}>{item.name}</div>
        ))}
      </div>
    </PageContainer>
  );
};

export default WarehousePage;
