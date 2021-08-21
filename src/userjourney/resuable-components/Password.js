import React, { useState } from "react";
import InputField from "../resuable-components/InputField";

export default function Password({
  passwordIsValid,
  label,
  isValidationRequired
}) {
  const [state, setState] = useState({
    password: "",
    isValid: true,
  });

  const validatePassword = (password) => {
    if (
      !(
        password === "" ||
        password.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/
        )
      )
    )
      return false;
    else return true;
  };

  const handleChange = (event) => {
    const password = event.target.value;
    setState((prevState) => ({
      ...prevState,
      password,
    }));
    passwordIsValid(password);
    if(isValidationRequired){
    if (validatePassword(password)) {
      passwordIsValid(password, true);
      setState((prevState) => ({
        ...prevState,
        isValid: true,
      }));
    } else {
      passwordIsValid(password, false);
      setState((prevState) => ({
        ...prevState,
        isValid: false,
      }));
    }
  }
  };

  const { password, isValid } = state;
  return (
    <InputField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      value={password}
      label=""
      type="password"
      id="password"
      placeholder={label}
      autoComplete="current-password"
      error={isValid ? false : true}
      helperText={
        isValid
          ? ""
          : "*Password should be min 8 characters long, must contain atleast one uppercase letter, one lowercase letter, one number and one special character."
      }
      onChange={handleChange}
    />
  );
}
