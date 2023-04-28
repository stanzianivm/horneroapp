import { Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks";

export const PublicRoute = ({ children }) => {
  const { loggedIn } = useCheckAuth();

  return !loggedIn ? children : <Navigate to="/" />;
};
