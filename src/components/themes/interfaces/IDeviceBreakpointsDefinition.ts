import { CSSObject } from "styled-components";
import { PixelSize } from "../types";

export interface IDeviceBreakpointsDefinition {
  mobileS: PixelSize,
  mobileM: PixelSize,
  mobileL: PixelSize,
  tablet: PixelSize,
  laptop: PixelSize,
  laptopL: PixelSize,
  desktop: PixelSize
}

export interface IDeviceBreakpointsDefsProps {
  mobileS?: CSSObject,
  mobileM?: CSSObject,
  mobileL?: CSSObject,
  tablet?: CSSObject,
  laptop?: CSSObject,
  laptopL?: CSSObject,
  desktop?: CSSObject
}
