import {
  EMAIL_IS_REQUIRED,
  INCORRECT_FORMAT_EMAIL,
  PATTERN_EMAIL,
} from "../types";

export const validationsEmail = (email) => {
  if (email.length === 0) {
    return EMAIL_IS_REQUIRED;
  } else if (!PATTERN_EMAIL.test(email.trim())) {
    return INCORRECT_FORMAT_EMAIL;
  } else {
    return "";
  }
};
