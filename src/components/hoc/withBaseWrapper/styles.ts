
import { CSSObject } from "styled-components";
import { IDeviceBreakpointsDefsProps } from "../../themes";
import { TfgTheme } from "../../themes/TfgTheme";

export const commonStyles: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '15px',
  minWidth: '-webkit-fill-available',
  minHeight: '-webkit-fill-available',
  backgroundClip: 'content-box',
  backgroundColor: `${TfgTheme.palette.find({
    color: 'background',
    type: 'main'
  })} !important`
}

export const defaultValues : IDeviceBreakpointsDefsProps = {
  mobileS: { 
    ...commonStyles,
    padding: `${TfgTheme.spacing.find(4)}`,
    boxShadow: `inset 0 0 0 
      ${TfgTheme.spacing.find(4)} 
      ${TfgTheme.palette.find({ color: 'background', type: 'main' })}`,
  },
  mobileM: {
    ...commonStyles,
    padding: `${TfgTheme.spacing.find(4)}`,
    boxShadow: `inset 0 0 0 
      ${TfgTheme.spacing.find(4)} 
      ${TfgTheme.palette.find({ color: 'background', type: 'main' })}`,
  },
  mobileL: {
    ...commonStyles,
    padding: `${TfgTheme.spacing.find(3)}`,
    boxShadow: `inset 0 0 0 
      ${TfgTheme.spacing.find(3)} 
      ${TfgTheme.palette.find({ color: 'background', type: 'main' })}`,
  },
  tablet: {
    ...commonStyles, 
    padding: `${TfgTheme.spacing.find(3)}`,
    boxShadow: `inset 0 0 0 
      ${TfgTheme.spacing.find(3)} 
      ${TfgTheme.palette.find({ color: 'background', type: 'main' })}`,
  },
  laptop: { 
    ...commonStyles,
    padding: `${TfgTheme.spacing.find(2)}`,
    boxShadow: `inset 0 0 0 
      ${TfgTheme.spacing.find(3)} 
      ${TfgTheme.palette.find({ color: 'background', type: 'main' })}`,
    justifyContent: 'space-between',   
  },
  laptopL: { 
    ...commonStyles,
    padding: `${TfgTheme.spacing.find(2)}`,
    boxShadow: `inset 0 0 0 
      ${TfgTheme.spacing.find(2)} 
      ${TfgTheme.palette.find({ color: 'background', type: 'main' })}`,
    justifyContent: 'space-between',  
  },
  desktop: {
    ...commonStyles,
  } 
}
