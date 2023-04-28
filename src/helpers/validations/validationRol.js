import { ROL_IS_REQUIRED } from "../types";

export const validationsRol = (rol) => {
  if (rol === "") {
    return ROL_IS_REQUIRED;
  } else {
    return "";
  }
};
