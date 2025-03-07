import { Route, Routes } from 'react-router-dom';
import { publicRoutesList, routesList } from '../../routes/routes-list.ts';
import { MainProviders } from '../providers/MainProviders.tsx';
import NotFoundPage from '../../pages/NotFoundPage.tsx';

export function RoutesBuilder() {
  const token = null;
  return (
    <Routes>
      {token
        ? routesList.map((item) => {
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
          })
        : publicRoutesList.map((item) => {
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
          })}
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}
