import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useCheckAuth } from "../hooks";

export const PrivateRoute = ({ children }) => {
  const { loggedIn } = useCheckAuth();
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  const navigate = useNavigate();

  useEffect(() => {
    const lastPath = localStorage.getItem("lastPath" || "/");
    navigate(lastPath, {
      replace: true,
    });
  }, []);

  return loggedIn ? children : <Navigate to="/auth/*" />;
};
