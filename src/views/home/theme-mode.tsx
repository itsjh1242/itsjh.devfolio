import { getTheme, toggleTheme } from "@/hooks/theme/mode";
import { useStyle } from "@/hooks/useStyle";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export const ThemeMode: React.FC = () => {
  const style = useStyle();
  const [theme, setTheme] = useState(getTheme());

  const toggleThemeHandler = () => {
    toggleTheme();
    setTheme(getTheme());
  };

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  const icons = {
    light: <SunIcon />,
    dark: <MoonIcon />,
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {(["light", "dark"] as const).map((mode) => (
        <motion.div
          key={mode}
          className={`absolute top-0 w-full p-2 ${style.text("caption")}`}
          animate={{ x: theme === mode ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {icons[mode]}
        </motion.div>
      ))}

      <div className={`absolute right-0 bottom-0 p-2 ${style.text("caption")}`}>
        <div
          onClick={toggleThemeHandler}
          className="cursor-pointer hover:underline"
        >
          <p>{capitalize(theme)} Mode</p>
        </div>
      </div>
    </div>
  );
};
