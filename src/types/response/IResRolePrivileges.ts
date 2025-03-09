import { PRIVILEGE } from '../../enums/privilege-enum.ts';

export interface IResRolePrivileges {
  role: string;
  privileges: PRIVILEGE[];
}
