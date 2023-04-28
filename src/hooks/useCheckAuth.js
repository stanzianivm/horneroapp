import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "../store/auth";

export const useCheckAuth = () => {
  const { loggedIn, isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));

    if (user === null) {
      dispatch(logoutSuccess());
    } else {
      dispatch(loginSuccess(user));
    }
  }, []);

  return { loggedIn, isLoading, user };
};
