import { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthContext.tsx';


export const useAuth = () => {
  return useContext(AuthContext);
};
