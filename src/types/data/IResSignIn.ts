import { IResGetMe } from './IResGetMe.ts';
import { PRIVILEGE } from '../../enums/privilege-enum.ts';

export type IResSignIn = {
  access_token: string;
  account_data : IResGetMe;
  privileges : PRIVILEGE[]
};


