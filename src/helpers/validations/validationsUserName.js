import { COND_WITHOUT_BLANCK_SPACE, USERNAME_IS_REQUIRED } from "../types";

export const validationsUserName = (username = "") => {
  if (username.length === 0) {
    return USERNAME_IS_REQUIRED;
  } else if (!username.trim().match(COND_WITHOUT_BLANCK_SPACE)) {
    return INCORRECT_FORMAT_USERNAME;
  } else {
    return "";
  }
};
