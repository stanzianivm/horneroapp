export const COND_WITHOUT_BLANCK_SPACE = /^\S+$/;
export const COND_PASWORD_LOWER_CASE = /[a-z]+/;
export const COND_PASSWORD_UPPER_CASE = /[A-Z]+/;
export const COND_PASSWORD_NUMBER = /[0-9]+/;
export const COND_PASSWORD_SPECIAL_CHARACTER = /^(?=.*[-\#\$\.\%\&\*\!\@])/;
export const PATTERN_EMAIL =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const PATTERN_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

export const USERNAME = "username";
export const EMAIL = "email";
export const ROL = "rol";
export const PASSWORD = "password";
export const TEXT = "text";

export const USERNAME_IS_REQUIRED = "Username is required";
export const EMAIL_IS_REQUIRED = "Email is required";
export const ROL_IS_REQUIRED = "Rol is required";
export const PASSWORD_IS_REQUIRED = "Password is required";

export const INCORRECT_FORMAT_USERNAME = "Incorrect format username";
export const INCORRECT_FORMAT_EMAIL = "Incorrect format email";

export const PASSWORD_LONGER = "Password must be longer than 6 characters";
export const PASSWORD_SHORTER = "Password must shorter than 20 characters";
export const PASSWORD_LOWERCASE =
  "Password must contain at least one lowercase";
export const PASSWORD_CAPITAL_LETTER =
  "Password must contain at least one capital letter";
export const PASSWORD_NUMBER = "Password must contain at least a number";
export const PASSWORD_SPECIAL_CHARACTER =
  "Password must contain at least a special character";
export const PASSWORD_MESSAGES =
  "Password must contain minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
