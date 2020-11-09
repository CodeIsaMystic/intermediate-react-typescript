import { createContext, useState } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  (theme: string) => theme
]);

export default ThemeContext;