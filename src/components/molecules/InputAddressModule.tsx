import InputSelect from '../atoms/InputSelect.tsx';
import useInputAddressModule from '../../hooks/useInputAddressModule.ts';
import { t } from 'i18next';

export function InputAddressModule() {
  const page = useInputAddressModule();
  return (
    <div>
      <InputSelect
        className={t('province')}
        placeholder={t('select_province')}
        options={page.listProvince}
        label={t('province')}
      />
    </div>
  );
}
