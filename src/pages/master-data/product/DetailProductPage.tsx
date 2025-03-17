import PageContainer from '../../../components/atoms/PageContainer.tsx';
import { useDetailProductPage } from './useDetailProductPage.ts';
import { Card, CardBody } from '../../../components/atoms/Card.tsx';
import Flex from '../../../components/atoms/Flex.tsx';
import { PageTitle } from '../../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import Button from '../../../components/atoms/Button.tsx';
import { ITableColumn } from '../../../types/data/ITableColumn.ts';
import { IResListVariantProduct } from '../../../types/response/IResListVariantProduct.ts';
import Table from '../../../components/molecules/Table.tsx';

export default function DetailProductPage() {
  const page = useDetailProductPage();

  const tableColumn: ITableColumn<IResListVariantProduct>[] = [
    {
      headerTitle: t('name'),
      component: (data) => (
        <Flex gap={'md'}>
          <img src={data.image_url} alt={data.name} className={'h-24 aspect-square'} />
          <div>{data.name}</div>
        </Flex>
      ),
    },
  ];

  return (
    <PageContainer>
      <Flex justify={'between'}>
        <PageTitle title={t('detail_product')} />
        <div>
          <Button>{t('create_new_variant')}</Button>
        </div>
      </Flex>
      <Card>
        <CardBody>
          <Flex gap={'lg'}>
            <img
              className={'h-40 aspect-square border rounded-md'}
              src={page?.dataDetail?.image_url}
              alt={page.dataDetail?.name}
            />
            <div>{page.dataDetail?.name}</div>
          </Flex>
        </CardBody>
      </Card>
      <Table data={page.listVariant} column={tableColumn} />
    </PageContainer>
  );
}
