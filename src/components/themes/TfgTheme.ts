import { createGlobalStyle } from "styled-components";
import { ITfgTheme } from "./interfaces";
import { createTypographyRules, findPaletteColor, findSpacingRules } from "./utils";
import { tfgDarkPalette, tfgSpacing, tfgTypographyRules } from "./values";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    min-height: 100vh;
    overflow-x: hidden;
  }
`

export const TfgTheme: ITfgTheme = {
  palette: { ...tfgDarkPalette, find: findPaletteColor(tfgDarkPalette) },
  typography: { ...tfgTypographyRules, create: createTypographyRules(tfgDarkPalette) },
  spacing: { ...tfgSpacing, find: findSpacingRules(tfgSpacing) }
}
