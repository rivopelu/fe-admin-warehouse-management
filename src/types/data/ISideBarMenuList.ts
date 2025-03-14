import { IconType } from 'react-icons';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';

export interface ISideBarMenuList {
  label: string;
  path?: string;
  icon: IconType;
  privilege?: PRIVILEGE;
  children?: IChildrenSideBarMenuList[];
}

export interface  IChildrenSideBarMenuList {
  label: string;
  path?: string;
  privilege?: PRIVILEGE;
}
