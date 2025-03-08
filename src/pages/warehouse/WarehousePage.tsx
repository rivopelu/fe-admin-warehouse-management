import PageContainer from '../../components/atoms/PageContainer.tsx';
import InputSelect from '../../components/atoms/InputSelect.tsx';
import { ILabelValue } from '../../types/data/ILabelValue.ts';
import { useEffect, useState } from 'react';
import InputText from '../../components/atoms/InputText.tsx';
import { Card, CardBody } from '../../components/atoms/Card.tsx';
import { PageTitle } from '../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';
import { IBreadcrumbData } from '../../types/data/IBreadcrumbData.ts';
import { ROUTES } from '../../routes/routes.ts';

const WarehousePage = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setSelectedValue('satu');
    }, 2000);
  }, []);

  const dummyData: ILabelValue<string>[] = [
    {
      label: 'test 1',
      value: 'satu',
    },
    {
      label: 'dua',
      value: 'dua',
    },
  ];

  const dataBreadcrumb: IBreadcrumbData[] = [
    {
      label: t('home'),
      path: ROUTES.HOME(),
    },
    {
      label: t('warehouse'),
    },
  ];

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);
  return (
    <PageContainer>
      <PageTitle title={t('warehouse_management')} breadcrumb={dataBreadcrumb} />
      <Card>
        <CardBody>
          <h1>HELLO WAREHOUSE</h1>
          <InputText placeholder={'testing'} required label={'tsd'} id={'test'} name={'test'} />
          <InputSelect
            required
            onChange={(e) => setSelectedValue(e)}
            value={selectedValue}
            options={dummyData}
            placeholder={'testing placeholder'}
            label={'test'}
          />
        </CardBody>
      </Card>
    </PageContainer>
  );
};

export default WarehousePage;
