import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

export default function SidebarMenuList(props: IProps) {
  const Icon = props.icon;
  return (
    <Link
      to={props.path}
      className={twMerge(
        ' rounded-md py-2 px-4 capitalize active:border-primary-main/20 border border-transparent flex items-center gap-2 text-gray-500 hover:bg-primary-main/10 duration-200',
        props.active ? 'text-primary-light' : '',
      )}
    >
      <Icon className={'text-2xl'} />
      <div>{props.label}</div>
    </Link>
  );
}

interface IProps {
  path: string;
  label: string;
  icon: IconType;
  active?: boolean;
}
