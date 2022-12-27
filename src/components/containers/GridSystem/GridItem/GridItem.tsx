import { Grid } from '@mui/material'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { IFlexBoxComponent, ITFGComponent } from '../../../../interfaces'

export type PixelSize = 
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11 
  | 12

export interface IGridItemProps extends ITFGComponent, IFlexBoxComponent {
  children: ReactNode,
  xs?: PixelSize,
  sm?: PixelSize,
  md?: PixelSize,
  lg?: PixelSize,
  xl?: PixelSize
}

export const GridItem = styled(({
  className,
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  justify = 'flex-start',
  align = 'flex-start',
}: IGridItemProps) => {
  return (
    <Grid item
          className={className} 
          xs={xs}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          justifyContent={justify}
          alignContent={align}>
      {children}
    </Grid>
  )
})`
  display: flex;
`
