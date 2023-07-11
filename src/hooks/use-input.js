import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState('');

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

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return {
    value: enteredValue,
    fileValue: file,
    imageUrl,
    valid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    handleBirthDateChange,
    handleFileChange
  };
};

export default useInput;
