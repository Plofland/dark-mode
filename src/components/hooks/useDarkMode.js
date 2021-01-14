import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, setOn) => {
  const [value, setValue] = useLocalStorage(key, setOn);
  const toggleDarkMode = () => {
    setValue(!value);
  };
  return [value, toggleDarkMode];
};
export default useDarkMode;
