import { createContext } from 'react';
import { IAuthProviderProps } from './AuthProvider.tsx';

export const AuthContext = createContext<IAuthProviderProps>({
  loginAction: () => {},
  token: undefined,
  logOut: () => {},
  user: undefined,
});
