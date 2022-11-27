import { GridDirection } from "@mui/material";
import { ReactNode } from "react";
import { StyledGrid } from "./Grid.styles";
import { Grid as MuiGrid } from '@mui/material'
export interface IGridProps {
  children: ReactNode,
  direction?: GridDirection,
  spacing: number,
}

export const Grid = ({
  spacing,
  direction = "row",
  children
}: IGridProps) => {
  return (
    <StyledGrid direction={direction}
                spacing={spacing}>
      <MuiGrid container
               direction={direction}>
          {children}
      </MuiGrid>
    </StyledGrid>
    
  )
}
