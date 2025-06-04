import { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-green", "theme-orange", "theme-blue");
    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeWrapper;
