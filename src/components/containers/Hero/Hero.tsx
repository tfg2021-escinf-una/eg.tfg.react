import { ReactNode } from "react"
import { ITFGComponent } from "../../../interfaces"
import { Grid, GridItem } from "../GridSystem"
import { StyledHero } from "./Hero.styles"

export interface IHeroProps extends ITFGComponent {
  leftNode: ReactNode,
  rightNode: ReactNode,
  maxHeight?: number
}

export const Hero = ({
  className,
  leftNode,
  rightNode,
  maxHeight = 550 
}: IHeroProps) => {
  return (
    <StyledHero className={className}
                maxHeight={maxHeight}>
       <Grid  spacing={0}>
        <GridItem xs={12}
                  sm={12}
                  md={5}>
          {leftNode}
        </GridItem>
        <GridItem xs={12}
                  sm={12}
                  md={7}>
          {rightNode}
        </GridItem>
      </Grid>
    </StyledHero>
  )
}
