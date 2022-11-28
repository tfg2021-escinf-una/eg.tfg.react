import { GridDirection } from "@mui/material";
import { ReactNode } from "react";
import { StyledGrid } from "./Grid.styles";
import { Grid as MuiGrid } from '@mui/material'
import styled from "styled-components";
import { IFlexBoxComponent, ITFGComponent } from "../../../../interfaces";

export interface IGridProps extends ITFGComponent, IFlexBoxComponent {
  children: ReactNode,
  direction?: GridDirection,
  spacing: number,
}

export const Grid = styled(({
  className,
  spacing,
  direction = "row",
  children,
  justify = "flex-start",
  align = "center"
}: IGridProps) => {
  return (
    <StyledGrid className={className}
                direction={direction}
                spacing={spacing}>
      <MuiGrid container
               direction={direction}
               justifyContent={justify}
               alignContent={align}>
          {children}
      </MuiGrid>
    </StyledGrid>
  )
})``
