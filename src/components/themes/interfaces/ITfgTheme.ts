import { createTypographyRules, findPaletteColor, findSpacingRules } from "../utils";
import { tfgDarkPalette, tfgSpacing } from "../values";
import { IColorPalette } from "./IColorPalette";
import { ITfgSpacing } from "./ITfgSpacing";
import { ITypographyRules } from "./ITypographyRules";

const curriedFindPaletteColor = findPaletteColor(tfgDarkPalette)
const curriedCreateTypographyRules = createTypographyRules(tfgDarkPalette)
const curriedFindSpacingRules = findSpacingRules(tfgSpacing)

export interface ITfgTheme {
  palette: { find: typeof curriedFindPaletteColor } & IColorPalette
  typography: { create: typeof curriedCreateTypographyRules } & ITypographyRules,
  spacing: { find: typeof curriedFindSpacingRules } & ITfgSpacing
}
