import { createGlobalStyle } from "styled-components";
import { ITfgTheme } from "./interfaces";
import { createTypographyRules, findPaletteColor } from "./utils";
import { tfgDarkPalette, tfgTypographyRules } from "./values";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    min-height: 100vh;
    overflow-x: hidden;
  }
`

export const TfgTheme: ITfgTheme = {
  palette: { ...tfgDarkPalette, find: findPaletteColor(tfgDarkPalette) },
  typography: { ...tfgTypographyRules, create: createTypographyRules(tfgDarkPalette) }
}
