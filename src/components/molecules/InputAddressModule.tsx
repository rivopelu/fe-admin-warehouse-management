import InputSelect from '../atoms/InputSelect.tsx';
import useInputAddressModule from '../../hooks/useInputAddressModule.ts';
import { t } from 'i18next';
import Grid from '../atoms/Grid.tsx';

export function InputAddressModule() {
  const page = useInputAddressModule();

  return (
    <Grid gap={'md'}>
      <InputSelect
        placeholder={t('select_province')}
        options={page.listProvince}
        label={t('province')}
        name={'province_id'}
        required
      />
      <InputSelect
        placeholder={t('select_city')}
        options={page.listCity}
        label={t('city')}
        name={'city_id'}
        required
        disabled={page.checkDisableCity()}
      />
      <InputSelect
        placeholder={t('select_district')}
        options={page.listDistrict}
        label={t('district')}
        name={'district_id'}
        required
        disabled={page.checkDisableDistrict()}
      />
      <InputSelect
        placeholder={t('select_sub_district')}
        options={page.listSubDistrict}
        label={t('sub_district')}
        name={'sub_district_id'}
        required
        disabled={page.checkDisableSubDistrict()}
      />
    </Grid>
  );
}
