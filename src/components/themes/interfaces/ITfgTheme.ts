import { createTypographyRules, findPaletteColor } from "../utils";
import { tfgDarkPalette } from "../values";
import { IColorPalette } from "./IColorPalette";
import { ITypographyRules } from "./ITypographyRules";

const curriedFindPaletteColor = findPaletteColor(tfgDarkPalette)
const curriedCreateTypographyRules = createTypographyRules(tfgDarkPalette)

export interface ITfgTheme {
  palette: { find: typeof curriedFindPaletteColor } & IColorPalette
  typography: { create: typeof curriedCreateTypographyRules } & ITypographyRules,
}
