import { BrandLogo } from '../atoms/BrandLogo.tsx';
import SidebarMenuList from '../atoms/SidebarMenuList.tsx';
import { sidebarMenuList } from '../../constants/sidebar-menu-list.ts';
import { useLocation } from 'react-router-dom';
import { ISideBarMenuList } from '../../types/data/ISideBarMenuList.ts';
import { useAuth } from '../../hooks/useAuth.ts';
import MultipleSidebarMenuList from '../atoms/MultipleSidebarMenuList.tsx';

export default function Sidebar() {
  const location = useLocation();
  const firstPath = location.pathname.split('/')[1];
  const auth = useAuth();

  function menuList(item: ISideBarMenuList) {
    const itemFirstPath = item.path && item?.path.split('/')[1];
    if (item.children) {
      return (
        <MultipleSidebarMenuList
          key={item.path}
          path={item.path}
          active={firstPath === itemFirstPath}
          children={item.children}
          icon={item.icon}
          label={item.label}
        />
      );
    }
    return (
      <SidebarMenuList
        key={item.path}
        active={firstPath === itemFirstPath}
        icon={item.icon}
        path={item.path}
        label={item.label}
      />
    );
  }

  return (
    <div className={' w-sidebar-width'}>
      <div className={'fixed top-0 h-screen border-r w-sidebar-width bg-white'}>
        <div className={'h-top-bar-height border-b px-4 flex items-center'}>
          <BrandLogo className={'w-28'} />
        </div>
        <div className={'p-4 grid gap-1'}>
          {sidebarMenuList.map((item) => {
            if (item.privilege) {
              if (auth.checkPrivilege(item.privilege)) {
                return menuList(item);
              }
            } else {
              return menuList(item);
            }
          })}
        </div>
      </div>
    </div>
  );
}
