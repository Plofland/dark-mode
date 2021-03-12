import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //function needs to check if we have a value in localStorage already
    if (window.localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  //custom setter function that updates the state && sets the new value to localStorage
  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};
export default useLocalStorage;
