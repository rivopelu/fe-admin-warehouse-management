import Button from '../../components/atoms/Button.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import PageContainer from '../../components/atoms/PageContainer.tsx';
import { PageTitle } from '../../components/atoms/PageTitle.tsx';
import { t } from 'i18next';

export default function HomePage() {
  const auth = useAuth();

  return (
    <div>
      <PageContainer>
        <PageTitle title={t('home')} />
        <Button onClick={() => auth.logOut()}>LOGOUT</Button>
      </PageContainer>
    </div>
  );
}
