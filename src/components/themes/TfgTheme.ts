import { createGlobalStyle } from "styled-components";
import { ITfgTheme } from "./interfaces";
import { createBreakpointsRules, createTypographyRules, findPaletteColor, findSpacingRules } from "./utils";
import { tfgDarkPalette, tfgDeviceBreakpointsDefinition, tfgSpacing, tfgTypographyRules } from "./values";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    overflow-x: hidden;
  }
`

export const TfgTheme: ITfgTheme = {
  palette: { ...tfgDarkPalette, find: findPaletteColor(tfgDarkPalette) },
  typography: { ...tfgTypographyRules, create: createTypographyRules(tfgDarkPalette) },
  spacing: { ...tfgSpacing, find: findSpacingRules(tfgSpacing) },
  breakpoints: { ...tfgDeviceBreakpointsDefinition, create: createBreakpointsRules(tfgDeviceBreakpointsDefinition)}
}
