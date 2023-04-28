import { useEffect, useState } from "react";
import { EMAIL, PASSWORD, ROL, USERNAME } from "../helpers/types";
import {
  validationsEmail,
  validationsUserName,
  validationsRol,
  validationsPassword,
} from "../helpers";

export const useForm = (initialForm = {}) => {
  const [values, setValues] = useState(initialForm);
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const createValidators = () => {
    setError({
      ...error,
      messageErrorUserName: validationsUserName(values.username),
      messageErrorEmail: validationsEmail(values.email),
      messageErrorRol: validationsRol(values.rol),
      messageErrorPassword: validationsPassword(values.password),
    });
  };

  const validationPassRequired = () => {
    setError({
      ...error,
      messageErrorPassword: validationsPassword(values.password),
    });
  };

  const validationsRequired = () => {
    let errors = {};
    for (const v of Object.keys(values)) {
      if (values[v] === "") {
        errors[`${v}Message`] = `${v} is required`;
      }
    }

    setError(errors);
  };

  const formValid = () => {
    console.log(values);
    return Object.keys(values).some(([key, value]) => {
      return value !== "";
    });
  };

  const onResetForm = () => {
    values(initialForm);
  };

  useEffect(() => {
    createValidators();
    setIsFormValid(formValid());
  }, [values]);

  return {
    ...values,
    values,
    onInputChange,
    onResetForm,

    error,
    isFormValid,
    createValidators,
    validationsRequired,
    validationPassRequired,
  };
};
