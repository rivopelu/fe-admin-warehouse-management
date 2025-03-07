import PageContainer from '../atoms/PageContainer.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import { getGreeting } from '../../utils/getGreeting.ts';

function TopBar() {
  const auth = useAuth();

  return (
    <div className={'h-top-bar-height '}>
      <div className={'w-full h-full'}>
        <PageContainer className={'h-full flex justify-between  items-center'}>
          <div>
            {getGreeting()} <span className={'font-bold'}>{auth?.user?.name}</span>
          </div>
          <div>PROFILE MENU</div>
        </PageContainer>
      </div>
    </div>
  );
}

export default TopBar;
