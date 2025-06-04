import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/theme/themeSlice";

const themes = [
  { value: "theme-green", color: "#54BE96" },
  { value: "theme-orange", color: "#FC832C" },
  { value: "theme-blue", color: "#3470FF" },
];

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className="flex justify-end mx-5 mt-2 gap-1">
      {themes.map((theme) => (
        <button
          key={theme.value}
          onClick={() => dispatch(setTheme(theme.value))}
          style={{ backgroundColor: theme.color }}
          className={`w-4 h-4 rounded-full border border-transparent ${
            theme.value === currentTheme
              ? "bg-[rgb(var(--primary-color))] "
              : ""
          }`}
        >
          {" "}
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
