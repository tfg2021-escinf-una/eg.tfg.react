import { createBreakpointsRules, createTypographyRules, findPaletteColor, findSpacingRules } from "../utils";
import { tfgDarkPalette, tfgDeviceBreakpointsDefinition, tfgSpacing } from "../values";
import { IColorPalette } from "./IColorPalette";
import { IDeviceBreakpointsDefinition } from "./IDeviceBreakpointsDefinition";
import { ITfgSpacing } from "./ITfgSpacing";
import { ITypographyRules } from "./ITypographyRules";

const curriedFindPaletteColor = findPaletteColor(tfgDarkPalette)
const curriedCreateTypographyRules = createTypographyRules(tfgDarkPalette)
const curriedFindSpacingRules = findSpacingRules(tfgSpacing)
const curriedCreateBreakpointsDeviceRules = createBreakpointsRules(tfgDeviceBreakpointsDefinition)


export interface ITfgTheme {
  palette: { find: typeof curriedFindPaletteColor } & IColorPalette
  typography: { create: typeof curriedCreateTypographyRules } & ITypographyRules,
  spacing: { find: typeof curriedFindSpacingRules } & ITfgSpacing,
  breakpoints: { create: typeof curriedCreateBreakpointsDeviceRules} & IDeviceBreakpointsDefinition,
}
