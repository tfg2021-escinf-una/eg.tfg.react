import { IColorPalette, IColorTypes } from "../../interfaces/IColorPalette";

export interface IColorFinder {
  color?: keyof IColorPalette
  type?: keyof IColorTypes
}

export const findPaletteColor = 
  (palette: IColorPalette) => 
  ({ color = 'primary', type = 'main' }: IColorFinder) => (
    palette[color][type]
  )
