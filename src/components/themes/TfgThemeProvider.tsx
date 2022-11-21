import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { TfgTheme } from "./TfgTheme";
import { GlobalStyles } from "./TfgTheme";

export interface IThemeProps {
  children : ReactNode
}

export const TfgThemeProvider = ({
  children 
} : IThemeProps) => (
  <ThemeProvider theme={TfgTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)
