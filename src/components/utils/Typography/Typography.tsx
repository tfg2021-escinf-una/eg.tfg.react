import { Typography as MUITypography} from "@mui/material";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { ITFGComponent } from "../../../interfaces";
import { IFontSize, IFontWeight, TextAlignment } from "../../themes/interfaces";
import { IColorFinder } from "../../themes/utils";

export interface ITypographyProps extends ITFGComponent, HTMLAttributes<HTMLHeadingElement>{
  size?: keyof IFontSize,
  weight?: keyof IFontWeight,
  fontColor?: IColorFinder
  textAlign?: TextAlignment
}

export const Typography = styled(MUITypography)<ITypographyProps>`
  box-sizing: border-box;
  margin: 0;
  ${({ theme, size, weight, fontColor, textAlign }) => theme.typography.create({
    weight: weight,
    size: size,
    color: fontColor,
    textAlign: textAlign
  })}
`
