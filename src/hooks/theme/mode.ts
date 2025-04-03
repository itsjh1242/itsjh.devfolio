export const THEME_KEY = "itsjh-theme";

export const applySavedTheme = () => {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme === "dark") {
    document.documentElement.classList.remove("itsjh-light");
    document.documentElement.classList.add("itsjh-dark");
    document.documentElement.setAttribute("data-theme", "itsjh-dark");
  } else {
    document.documentElement.classList.remove("itsjh-dark");
    document.documentElement.classList.add("itsjh-light");
    document.documentElement.setAttribute("data-theme", "itsjh-light");
  }
};

export const getTheme = () => {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme === "dark") {
    return "dark";
  } else if (theme === "light") {
    return "light";
  } else {
    // Default to light mode if no theme is set
    setLightMode();
    return "light";
  }
};

export const toggleTheme = () => {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
};

export const setLightMode = () => {
  localStorage.setItem(THEME_KEY, "light");
  document.documentElement.classList.remove("itsjh-dark");
  document.documentElement.classList.add("itsjh-light");
  document.documentElement.setAttribute("data-theme", "itsjh-light");
};

export const setDarkMode = () => {
  localStorage.setItem(THEME_KEY, "dark");
  document.documentElement.classList.remove("itsjh-light");
  document.documentElement.classList.add("itsjh-dark");
  document.documentElement.setAttribute("data-theme", "itsjh-dark");
};
