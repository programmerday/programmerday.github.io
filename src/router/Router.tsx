import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import routes from "./Routes";
import { NotFound } from "~/pages/NotFound/NotFound";

export function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("login");
    if (token) {
      setIsAuth(true);
      console.log("token", token);
    }
  }, []);

  function routeToRender(route: any) {
    let componentToRender;

    if (route.Private) {
      componentToRender = isAuth ? <route.component /> : <NotFound />;
    } else {
      componentToRender = <route.component />;
    }

    return componentToRender;
  }

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={routeToRender(route)} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
