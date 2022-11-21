export interface IColorTypes {
  main?: string,
  light?: string,
  dark?: string,
  contrastText?: string,
}

export interface IColorPalette {
  primary: IColorTypes,
  secondary: IColorTypes,
  error: IColorTypes,
  warning: IColorTypes,
  success: IColorTypes,
  background: IColorTypes
}
