
import { CSSObject } from "styled-components";
import { IDeviceBreakpointsDefsProps } from "../../themes";
import { TfgTheme } from "../../themes/TfgTheme";

const { 
  breakpoints: {
    mobileS, 
    mobileM,
    mobileL,
    laptop,
    laptopL,
    tablet,
    desktop
  }
} = TfgTheme

export const commonStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: window.innerWidth,
  height: 'max-content',
  maxHeight: 'max-content',
  backgroundColor: `${TfgTheme.palette.find({
    color: 'background',
    type: 'main'
  })} !important`
}

export const defaultValues : IDeviceBreakpointsDefsProps = {
  mobileS: { 
    ...commonStyles,
  },
  mobileM: {
    ...commonStyles,
  },
  mobileL: {
    ...commonStyles,
  },
  tablet: {
    ...commonStyles, 
  },
  laptop: { 
    ...commonStyles,
    height: '100vh'
  },
  laptopL: { 
    ...commonStyles,
    height: '100vh'
  },
  desktop: {
    ...commonStyles,  
    height: '100vh'
  } 
}
