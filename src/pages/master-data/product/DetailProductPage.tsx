import PageContainer from '../../../components/atoms/PageContainer.tsx';
import { useDetailProductPage } from './useDetailProductPage.ts';
import { Card, CardBody } from '../../../components/atoms/Card.tsx';
import Flex from '../../../components/atoms/Flex.tsx';
import { PageTitle } from '../../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import Button from '../../../components/atoms/Button.tsx';

export default function DetailProductPage() {
  const page = useDetailProductPage();
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
    </PageContainer>
  );
}
