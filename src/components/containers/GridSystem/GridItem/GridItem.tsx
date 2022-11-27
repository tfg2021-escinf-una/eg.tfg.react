import { Grid } from '@mui/material'
import { ReactNode } from 'react'
import styled from 'styled-components'

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

export interface IGridItemProps {
  children: ReactNode,
  xs?: PixelSize,
  sm?: PixelSize,
  md?: PixelSize,
  lg?: PixelSize,
  xl?: PixelSize
}

export const GridItem = styled(({
  children,
  xs,
  sm,
  md,
  lg,
  xl
}: IGridItemProps) => {
  return (
    <Grid item 
          xs={xs}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}>
      {children}
    </Grid>
  )
})``
