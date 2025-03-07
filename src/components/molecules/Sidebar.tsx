import { BrandLogo } from '../atoms/BrandLogo.tsx';

export default function Sidebar() {
  return (
    <div className={'bg-orange-300 w-sidebar-width'}>
      <div className={'fixed top-0 h-screen border-r w-sidebar-width bg-white'}>
        <div className={'h-top-bar-height border-b px-4 flex items-center'}>
          <BrandLogo className={'w-38'} />
        </div>
      </div>
    </div>
  );
}
