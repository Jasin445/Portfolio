"use client"; 

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";
import { PropsWithChildren } from "react";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider