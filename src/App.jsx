import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Menu from "./components/menu-page/menu/Menu";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Pizza from "./components/menu-page/pizza/Pizza";
import SaladsAndAppetizers from "./components/menu-page/appetizers/SaladsAndAppetizers";
import Grilled from "./components/menu-page/grilled/Grilled";
import Drinks from "./components/menu-page/drinks/Drinks";
import Order from "./components/order/Order";

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Path from "./path";
import AuthContext from "./contexts/authContext";
import * as authServices from "./services/authServices";

function App() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authServices.login(values.email, values.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate(Path.Home);
  };

  const valueData = {
    logoutHandler,
    loginSubmitHandler,
    username: auth.username,
    email: auth.email,
    _id: auth._id,
    accessToken: auth.accessToken,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={valueData}>
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Menu />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Logout} element={<Logout />} />
          <Route path={Path.Pizza} element={<Pizza />} />
          <Route path={Path.Appetizers} element={<SaladsAndAppetizers />} />
          <Route path={Path.Grilled} element={<Grilled />} />
          <Route path={Path.Drinks} element={<Drinks />} />
          <Route path={Path.Order} element={<Order />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
