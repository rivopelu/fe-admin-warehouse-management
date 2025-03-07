import { BrandLogo } from '../atoms/BrandLogo.tsx';
import { ROUTES } from '../../routes/routes.ts';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const data = [
    {
      path: ROUTES.HOME(),
      label: t('home'),
    },
    {
      path: ROUTES.TEST(),
      label: t('test'),
    },
  ];
  return (
    <div className={'bg-orange-300 w-sidebar-width'}>
      <div className={'fixed top-0 h-screen border-r w-sidebar-width bg-white'}>
        <div className={'h-top-bar-height border-b px-4 flex items-center'}>
          <BrandLogo className={'w-38'} />
        </div>
        <div>
          {data.map((item, index) => (
            <Link to={item.path} key={index}>
              <div>{item.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
