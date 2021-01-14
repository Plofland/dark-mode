import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};
export default useLocalStorage;
