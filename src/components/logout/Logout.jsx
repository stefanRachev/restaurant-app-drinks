import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authServices";
import AuthContext from "../../contexts/authContext";
import Path from "../../path";

function Logout() {
  const { accessToken, logoutHandler } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    authService
      .logout(accessToken)
      .then(() => logoutHandler())
      .catch(() => navigate(Path.Home));
  }, []);
  return null;
}

export default Logout;
