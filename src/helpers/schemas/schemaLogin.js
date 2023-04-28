import * as yup from "yup";
import {
  EMAIL_IS_REQUIRED,
  INCORRECT_FORMAT_EMAIL,
  PASSWORD_IS_REQUIRED,
  PATTERN_EMAIL,
} from "../types";

export const schemaLogin = yup.object({
  email: yup
    .string()
    .required(EMAIL_IS_REQUIRED)
    .matches(PATTERN_EMAIL, INCORRECT_FORMAT_EMAIL),
  password: yup.string().required(PASSWORD_IS_REQUIRED),
});
