import { IDeviceBreakpointsDefinition, IDeviceBreakpointsDefsProps } from "../../interfaces";
import { css, FlattenSimpleInterpolation } from "styled-components";

export const createBreakpointsRules = 
  (deviceBreakpoints: IDeviceBreakpointsDefinition) => 
  (deviceRulesProps: IDeviceBreakpointsDefsProps) =>
  (callback?: () => string)  : FlattenSimpleInterpolation => {
    let styles = ``;
    Object.keys(deviceBreakpoints).forEach((key) => {
      if(deviceRulesProps[key as keyof IDeviceBreakpointsDefinition]){
        styles += `
          @media screen and (min-width: ${deviceBreakpoints[key as keyof IDeviceBreakpointsDefinition]}){
            ${callback ? callback() : ""};
            ${deviceRulesProps[key as keyof IDeviceBreakpointsDefsProps] 
              ? css`${deviceRulesProps[key as keyof IDeviceBreakpointsDefsProps]}` 
              : ``
            };
          };
        `
      }
    });

    return css`${styles.replaceAll(',', '')}`;
};
