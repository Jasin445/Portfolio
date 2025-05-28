import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Theme } from "../types";

const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

const isValidTheme = (value: string | null): value is Theme => {
  if (typeof window === "undefined") {
    return false;
  }

  if (value === "light" || value === "dark") {
    return true;
  }

  return false;
};

const getThemeFromLocalStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = localStorage.getItem("theme");
  if (isValidTheme(storedTheme)) {
    return storedTheme;
  }

  return null;
};

const setThemeToLocalStorage = (theme: Theme) => {
  localStorage.setItem("theme", theme);
};

export { cn, getThemeFromLocalStorage, isValidTheme, setThemeToLocalStorage };
