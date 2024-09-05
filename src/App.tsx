import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import routes from '@/routes';
import { Home } from '@/pages';
import { LayoutExample } from '@/components/layouts';

function App() {
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
          path="/home"
          element={<Home />}
        />
        <Route
          path="/examples"
          element={<LayoutExample />}>
          {routes.examples.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
        {/* <Route
          path="/popuptest"
          element={<PopupExample />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
