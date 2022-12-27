import { GridDirection } from "@mui/material";
import { ReactNode } from "react";
import { Grid as MuiGrid } from '@mui/material'
import styled from "styled-components";
import { IFlexBoxComponent, ITFGComponent } from "../../../../interfaces";

export interface IGridProps extends ITFGComponent, IFlexBoxComponent {
  children: ReactNode,
  direction?: GridDirection,
  spacing?: number,
}

export const Grid = styled(({
  className,
  children,
  direction = "row",
  justify = "flex-start",
  align = "center",
  alignItems = 'center',
  spacing = 0
}: IGridProps) => {
  return (
    <MuiGrid container
             className={className}
             direction={direction}
             justifyContent={justify}
             alignContent={align}
             alignItems={alignItems}
             spacing={spacing}>
      {children}
    </MuiGrid>
  )
})``
