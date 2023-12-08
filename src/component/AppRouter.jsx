import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../component/UI/Navbar/Navbar";
import { priveteRoutes, publicRoutes } from "../Router/Routes";
import Log from "../Pages/Log";
import { AuthContext } from "../Context/Context";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return isAuth ? (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {priveteRoutes.map((rout) => (
          <Route
            key={rout.path}
            exect={rout.exect}
            path={rout.path}
            element={rout.component}
          />
        ))}
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {publicRoutes.map((rout) => (
          <Route
            key={rout.path}
            exect={rout.exect}
            path={rout.path}
            element={rout.component}
          />
        ))}
        <Route path="*" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
