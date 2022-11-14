import { PaletteMode } from "@mui/material";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { createCustomTheme } from "./TfgTheme.styles";

export interface IThemeProps {
  mode : PaletteMode
  children : ReactNode
}

export const TfgThemeProvider = ({
  mode = 'dark',
  children 
} : IThemeProps) => {
  const theme = createCustomTheme(mode);
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
