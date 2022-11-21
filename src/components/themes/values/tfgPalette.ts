import { IColorPalette } from "../interfaces/IColorPalette"

export const tfgDarkPalette : IColorPalette = {
  primary: {
    main: '#5893df',
    light: 'rgb(121, 168, 229)',
    dark: 'rgb(121, 168, 229)',
    contrastText: '#fff'
  },
  secondary: {
    main: '#2ec5d3',
    light: 'rgb(87, 208, 219)',
    dark: 'rgb(32, 137, 147)',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#fff'
  },
  warning : {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  success: {
    main: '#4caf50',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  background: {
    main: '#192231',
    dark: '#24344d'
  }
}
