import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.tsx';


export const useAuth = () => {
  return useContext(AuthContext);
};
