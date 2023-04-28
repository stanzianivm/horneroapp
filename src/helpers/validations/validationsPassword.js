import {
  COND_PASSWORD_NUMBER,
  COND_PASSWORD_SPECIAL_CHARACTER,
  COND_PASSWORD_UPPER_CASE,
  COND_PASWORD_LOWER_CASE,
  PASSWORD_CAPITAL_LETTER,
  PASSWORD_IS_REQUIRED,
  PASSWORD_LONGER,
  PASSWORD_LOWERCASE,
  PASSWORD_NUMBER,
  PASSWORD_SHORTER,
  PASSWORD_SPECIAL_CHARACTER,
} from "../types";

export const validationsPassword = (password = "") => {
  const errorArray = [];

  if (password.trim() === "") {
    errorArray.push(PASSWORD_IS_REQUIRED);
  } else {
    if (password.trim().length < 6) {
      errorArray.push(PASSWORD_LONGER);
    }
    if (password.trim().length >= 20) {
      errorArray.push(PASSWORD_SHORTER);
    }
    if (!password.match(COND_PASWORD_LOWER_CASE)) {
      errorArray.push(PASSWORD_LOWERCASE);
    }
    if (!password.trim().match(COND_PASSWORD_UPPER_CASE)) {
      errorArray.push(PASSWORD_CAPITAL_LETTER);
    }
    if (!password.trim().match(COND_PASSWORD_NUMBER)) {
      errorArray.push(PASSWORD_NUMBER);
    }
    if (!password.match(COND_PASSWORD_SPECIAL_CHARACTER)) {
      errorArray.push(PASSWORD_SPECIAL_CHARACTER);
    }
  }

  if (errorArray.length === 0) {
    return "";
  } else {
    return errorArray;
  }
};
