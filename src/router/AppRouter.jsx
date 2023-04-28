import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks";
import { HorneroRoutes } from "../hornero/routes/HorneroRoutes";
import { CheckingAuth } from "../ui/components";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { loggedIn, isLoading } = useCheckAuth();

  // if (isLoading) {
  //   return <CheckingAuth />;
  // }

  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HorneroRoutes />
          </PrivateRoute>
        }
      />

      {/* {loggedIn ? (
        <Route path="/*" element={<HorneroRoutes />}></Route>
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />}></Route>
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />}></Route> */}
    </Routes>
  );
};
