import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const dataLS = JSON.parse(localStorage.getItem(key));
    if (dataLS) {
      return dataLS;
    }
    return initialValue;
  });
  const setLS = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, setLS];
};
