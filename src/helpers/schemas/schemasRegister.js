import * as yup from "yup";
import {
  COND_WITHOUT_BLANCK_SPACE,
  EMAIL_IS_REQUIRED,
  INCORRECT_FORMAT_EMAIL,
  INCORRECT_FORMAT_USERNAME,
  PASSWORD_IS_REQUIRED,
  PASSWORD_MESSAGES,
  PATTERN_EMAIL,
  PATTERN_PASSWORD,
  ROL_IS_REQUIRED,
  USERNAME_IS_REQUIRED,
} from "../types";

export const schemaRegister = yup.object({
  username: yup
    .string()
    .required(USERNAME_IS_REQUIRED)
    .matches(COND_WITHOUT_BLANCK_SPACE, INCORRECT_FORMAT_USERNAME),
  email: yup
    .string()
    .required(EMAIL_IS_REQUIRED)
    .matches(PATTERN_EMAIL, INCORRECT_FORMAT_EMAIL),
  password: yup
    .string()
    .required(PASSWORD_IS_REQUIRED)
    .matches(PATTERN_PASSWORD, PASSWORD_MESSAGES),
  rol: yup.string().required(ROL_IS_REQUIRED),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    // .matches(PATTERN_PASSWORD, PASSWORD_MESSAGES)
    .oneOf([yup.ref("password")], "Passwords do not match"),
});
