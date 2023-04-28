export const validationsForm = (values = {}) => {
  const error = {};
  const messagesErrorPassword = [];

  const patternEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const condPasswordLowerCase = /[a-z]+/;
  // const condPasswordLowerCase = /^(?=.*[a-z]).{6,20}$/;
  const condPasswordUpperCase = /[A-Z]+/;
  // const condPasswordUpperCase = /^(?=.*[A-Z]).{6,20}$/;
  // const condPasswordNumber = /^(?=.*[0-9]).{6,20}$/;
  const condPasswordNumber = /[0-9]+/;
  const condPasswordSpecialCharacter = /^(?=.*[-\#\$\.\%\&\*\!\@])/;
  const condPasswordWithoutBlankSpace = /^\S+$/;

  if (values.name.length === 0) {
    error.isValidName = "Name is required";
  } else if (!values.name.trim().match(condPasswordWithoutBlankSpace)) {
    error.isValidName = "Incorrect user name";
  }

  if (values.email.length === 0) {
    error.isValidEmail = "Email is required";
  } else if (!patternEmail.test(values.email.trim())) {
    error.isValidEmail = "Incorrect format email";
  }

  if (values.password.trim() === "") {
    messagesErrorPassword.push("Password is required");
    error.passwordErrorsMessages = messagesErrorPassword;
  } else {
    if (values.password.trim().length < 6) {
      messagesErrorPassword.push("Password must be longer than 6 characters");
      error.passwordErrorsMessages = messagesErrorPassword;
    }
    if (values.password.trim().length >= 20) {
      messagesErrorPassword.push("Password must shorter than 20 characters");
      error.passwordErrorsMessages = messagesErrorPassword;
    }
    if (!values.password.match(condPasswordLowerCase)) {
      messagesErrorPassword.push(
        "Password must contain at least one lowercase"
      );
      error.passwordErrorsMessages = messagesErrorPassword;
    }
    if (!values.password.trim().match(condPasswordUpperCase)) {
      messagesErrorPassword.push(
        "Password must contain at least one capital letter"
      );
      error.passwordErrorsMessages = messagesErrorPassword;
    }
    if (!values.password.trim().match(condPasswordNumber)) {
      messagesErrorPassword.push("Password must contain at least a number");
      error.passwordErrorsMessages = messagesErrorPassword;
    }
    if (!values.password.match(condPasswordSpecialCharacter)) {
      messagesErrorPassword.push(
        "Password must contain at least a special character"
      );
      error.passwordErrorsMessages = messagesErrorPassword;
    }
  }

  if (values.rol === "") {
    error.isValidRol = "Rol is required";
  }

  return error;
};
