import PageContainer from '../../components/atoms/PageContainer.tsx';
import { PageTitle } from '../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';

export default function HomePage() {
  return (
    <div>
      <PageContainer>
        <PageTitle title={t('home')} />
      </PageContainer>
    </div>
  );
}
