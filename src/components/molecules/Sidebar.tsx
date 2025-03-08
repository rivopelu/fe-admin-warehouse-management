import { BrandLogo } from '../atoms/BrandLogo.tsx';
import SidebarMenuList from '../atoms/SidebarMenuList.tsx';
import { sidebarMenuList } from '../../constants/sidebar-menu-list.ts';
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const firstPath = location.pathname.split('/')[1];

  return (
    <div className={'bg-orange-300 w-sidebar-width'}>
      <div className={'fixed top-0 h-screen border-r w-sidebar-width bg-white'}>
        <div className={'h-top-bar-height border-b px-4 flex items-center'}>
          <BrandLogo className={'w-28'} />
        </div>
        <div className={'p-4 grid gap-1'}>
          {sidebarMenuList.map((item, index) => {
            const itemFirstPath = item.path.split('/')[1];
            return (
              <SidebarMenuList
                active={firstPath === itemFirstPath}
                icon={item.icon}
                path={item.path}
                label={item.label}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
