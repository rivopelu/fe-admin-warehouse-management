import { BrandLogo } from '../atoms/BrandLogo.tsx';
import { ROUTES } from '../../routes/routes.ts';
import { t } from 'i18next';
import SidebarMenuList from '../atoms/SidebarMenuList.tsx';
import { ISideBarMenuList } from '../../types/data/ISideBarMenuList.ts';
import { MdHome, MdWarehouse } from 'react-icons/md';

export default function Sidebar() {
  const data : ISideBarMenuList[] = [
    {
      path: ROUTES.HOME(),
      label: t('home'),
      icon : MdHome
    },
    {
      path: ROUTES.WAREHOUSE(),
      label: t('warehouse'),
      icon : MdWarehouse
    },
  ];
  return (
    <div className={'bg-orange-300 w-sidebar-width'}>
      <div className={'fixed top-0 h-screen border-r w-sidebar-width bg-white'}>
        <div className={'h-top-bar-height border-b px-4 flex items-center'}>
          <BrandLogo className={'w-38'} />
        </div>
        <div className={"p-4 grid gap-1"}>
          {data.map((item, index) => (
            <SidebarMenuList icon={item.icon}  path={item.path} label={item.label} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
