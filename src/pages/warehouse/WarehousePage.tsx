import PageContainer from '../../components/atoms/PageContainer.tsx';
import { PageTitle } from '../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import { useWarehousePage } from './useWarehousePage.ts';
import Table from '../../components/molecules/Table.tsx';
import { ITableColumn } from '../../types/data/ITableColumn.ts';
import { IResListWarehouse } from '../../types/response/IResListWarehouse.ts';
import Flex from '../../components/atoms/Flex.tsx';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes.ts';
import Button from '../../components/atoms/Button.tsx';

const WarehousePage = () => {
  const page = useWarehousePage();
  const tableColumn: ITableColumn<IResListWarehouse>[] = [
    {
      headerTitle: t('name'),
      component: (e) => <div>{e.name}</div>,
    },
    {
      headerTitle: t('address'),
      component: (e) => <div>{e.address}</div>,
    },
  ];
  return (
    <PageContainer>
      <Flex justify={'between'}>
        <PageTitle title={t('warehouse_management')} breadcrumb={page.dataBreadcrumb} />
        <Link to={ROUTES.CREATE_WAREHOUSE()}>
          <Button>{t('create_warehouse')}</Button>
        </Link>
      </Flex>

      <Table loading={page.loading} column={tableColumn} data={page.listData} />
    </PageContainer>
  );
};

export default WarehousePage;
