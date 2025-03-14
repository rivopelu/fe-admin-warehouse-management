import { useState } from 'react';
import { IconType } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { IChildrenSideBarMenuList } from '../../types/data/ISideBarMenuList.ts';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface IProps {
  label: string;
  icon: IconType;
  active?: boolean;
  children?: IChildrenSideBarMenuList[];
  path?: string;
}

export default function MultipleSidebarMenuList({ label, icon: Icon, active, children, path }: IProps) {
  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const isActive = path && (currentPath[1] === path.split('/')[1] || currentPath[2] === path.split('/')[2]);
  const firstPath = location.pathname.split('/')[2];

  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <div className="w-full" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(isActive)}>
      <Link
        to={path || ''}
        className={twMerge(
          'flex items-center justify-between py-2 px-4 rounded-md cursor-pointer text-gray-500 hover:bg-primary-main/10 duration-200',
          active ? 'text-primary-light' : '',
        )}
      >
        <div className="flex items-center gap-2">
          <Icon className="text-2xl" />
          <span>{label}</span>
        </div>
        <span className={twMerge(isOpen ? 'rotate-180' : '', 'duration-300')}>
          <MdKeyboardArrowDown />
        </span>
      </Link>
      {isOpen && children && (
        <div className="pl-6 mt-2 space-y-2 duration-200">
          {children.map((item, index) => {
            const itemFirstPath = item.path && item?.path.split('/')[2];

            return (
              <Link
                key={index}
                to={item.path || '#'}
                className={twMerge(
                  'flex items-center gap-3 py-1 px-4 rounded-md text-gray-500 hover:bg-primary-main/10 duration-200',
                  firstPath === itemFirstPath ? 'text-primary-light' : '',
                )}
              >
                <div
                  className={twMerge(
                    'h-3 rounded-full w-3 duration-300',
                    firstPath === itemFirstPath ? 'text-primary-light bg-primary-light' : 'bg-gray-300',
                  )}
                ></div>
                <div>{item.label}</div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
