import { Route, Routes } from 'react-router-dom';
import { publicRoutesList, routesList } from '../../routes/routes-list.ts';
import { MainProviders } from '../providers/MainProviders.tsx';
import NotFoundPage from '../../pages/NotFoundPage.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import { IRouteList } from '../../types/data/IRouteList.ts';

export function RoutesBuilder() {
  const auth = useAuth();
  const token = auth.token;

  function route(item: IRouteList) {
    const Element = item.elements;
    return (
      <Route
        id={item.route}
        key={item.route}
        path={item.route}
        element={
          <MainProviders type={item.type}>
            <Element />
          </MainProviders>
        }
      />
    );
  }

  return (
    <Routes>
      {token
        ? routesList.map((item) => {
            if (item.privilege) {
              const checkPrivileges = auth.checkPrivilege(item.privilege);
              if (checkPrivileges) {
                return route(item);
              }
            } else {
              return route(item);
            }
          })
        : publicRoutesList.map((item) => {
            return route(item);
          })}
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}
