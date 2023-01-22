import { IColorPalette } from "../../interfaces/IColorPalette";
import { IFontSize, IFontWeight, TextAlignment } from "../../interfaces/ITypographyRules";
import { tfgTypographyRules } from "../../values";
import { findPaletteColor, IColorFinder } from "../findPaletteColor";

interface ICreateTypographyRules {
  weight?: keyof IFontWeight,
  size?: keyof IFontSize,
  color?: IColorFinder
  textAlign?: TextAlignment 
}

export const createTypographyRules =
  (palette: IColorPalette) => ({
    weight = 'normal',
    size = 'md',
    color = { color: 'primary', type: 'contrastText' },
    textAlign = 'start'
  }: ICreateTypographyRules) => {
    
    const { 
      family,
      weight: themeWeight,
      size: themeSize 
    } = tfgTypographyRules

    const typographyColor = findPaletteColor(palette)(color)

    return `
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${family} !important;
      font-size: ${themeSize[size]};
      font-weight: ${themeWeight[weight]} !important;
      color: ${typographyColor} !important;
      text-align: ${textAlign} !important;
    `;
  }
