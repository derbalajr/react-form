import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  const handleBirthDateChange = (date) => {
    setEnteredValue(date);
  };

  return {
    value: enteredValue,
    valid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    handleBirthDateChange,
  };
};

export default useInput;
