import Button from '../../components/atoms/Button.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import { HttpService } from '../../services/http.service.ts';
import { useEffect } from 'react';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { BaseResponse } from '../../types/data/IResModel.ts';
import { IResGetMe } from '../../types/data/IResGetMe.ts';
import ErrorService from '../../services/error.service.ts';

export default function HomePage() {
  const auth = useAuth();
  const httpService = new HttpService();
  const errorService = new ErrorService();
  useEffect(() => {
    httpService
      .GET(ENDPOINT.GET_ME())
      .then((e: BaseResponse<IResGetMe>) => {
        console.info(e);
      })
      .catch((e) => {
        errorService.fetchApiError(e);
      });
  }, []);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <Button onClick={() => auth.logOut()}>LOGOUT</Button>
    </div>
  );
}
