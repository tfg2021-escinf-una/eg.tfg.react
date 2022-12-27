import styled, { FlattenSimpleInterpolation } from 'styled-components'
import { IDeviceBreakpointsDefsProps } from '../../themes'

export const Container = styled.div<IDeviceBreakpointsDefsProps & {
  flex?: boolean,
  direction?: 'row' | 'column', 
  callback?: () => FlattenSimpleInterpolation
}>`
  ${({ theme, mobileS, mobileM, mobileL, laptop, laptopL, tablet, desktop, callback }) => 
    theme.breakpoints.create({
      mobileS: mobileS,
      mobileM: mobileM,
      mobileL: mobileL,
      laptop: laptop,
      laptopL: laptopL,
      tablet: tablet,
      desktop: desktop 
    })(callback)
  };

  ${({ flex, direction }) => flex && `
    display: flex;
    flex-direction: ${direction} !important;
  `};
`
