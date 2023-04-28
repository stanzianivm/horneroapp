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

export const schemaEdit = yup.object({
  username: yup
    .string()
    .required(USERNAME_IS_REQUIRED)
    .matches(COND_WITHOUT_BLANCK_SPACE, INCORRECT_FORMAT_USERNAME),
  rol: yup.string().required(ROL_IS_REQUIRED),
});
