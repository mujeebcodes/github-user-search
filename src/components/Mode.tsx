import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

interface ModeProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<boolean>;
}
const Mode = ({ isDarkMode, setIsDarkMode }: ModeProps) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className="flex justify-between gap-x-4 hover:text-black dark:hover:text-white dark:hover:opacity-90"
      onClick={toggleDarkMode}
    >
      <span className="text-sm font-bold ">
        {isDarkMode ? "LIGHT" : "DARK"}
      </span>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};
export default Mode;
