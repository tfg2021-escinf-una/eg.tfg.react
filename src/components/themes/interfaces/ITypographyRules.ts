export interface IFontSize {
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
}

export interface IFontWeight {
  thin: number,
  normal: number,
  bold: number,
  bolder: number
}

export interface ITypographyRules {
  size: IFontSize,
  weight: IFontWeight,
  family: string
}
