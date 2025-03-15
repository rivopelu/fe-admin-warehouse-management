import PageContainer from '../atoms/PageContainer.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import { getGreeting } from '../../utils/getGreeting.ts';
import Dropdown from '../atoms/Dropdown.tsx';
import { ListGroup, ListItem } from '../atoms/List.tsx';
import { t } from 'i18next';
import Avatar from '../atoms/Avatar.tsx';

function TopBar() {
  const auth = useAuth();

  return (
    <div className={'h-top-bar-height bg-white border-b '}>
      <div className={'w-full h-full'}>
        <PageContainer className={'h-full flex justify-between  items-center'}>
          <div>
            {getGreeting()} <span className={'font-bold'}>{auth?.user?.name}</span>
          </div>
          <Dropdown
            toggle={
              <div>
                <Avatar size={'sm'} name={auth?.user?.name} />
              </div>
            }
          >
            <ListGroup>
              <ListItem label={t('profile')} />
              <ListItem onClick={auth.logOut} label={t('logout')} />
            </ListGroup>
          </Dropdown>
        </PageContainer>
      </div>
    </div>
  );
}

export default TopBar;
