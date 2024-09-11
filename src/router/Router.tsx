import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import routeInfo from '@/router/RouterInfo';
import { Home, Login } from '@/pages';
import { LayoutExample } from '@/components/layouts';
import { PopupExample } from '@/components/atoms';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              replace
              to="/home"
            />
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/examples"
          element={<LayoutExample />}>
          {routeInfo.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
        <Route
          path="/popuptest"
          element={<PopupExample />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
