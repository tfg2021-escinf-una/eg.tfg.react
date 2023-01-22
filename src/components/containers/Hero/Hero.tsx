import { ReactNode } from "react"
import { ITFGComponent } from "../../../interfaces"
import { GridItem } from "../GridSystem"
import { StyledHero } from "./Hero.styles"

export interface IHeroProps extends ITFGComponent {
  leftNode: ReactNode,
  rightNode: ReactNode,
}

export const Hero = ({
  className,
  leftNode,
  rightNode,
}: IHeroProps) => {
  return (
    <StyledHero className={className}
                spacing={0}>
      <GridItem xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={4}>
        {leftNode}
      </GridItem>
      <GridItem xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={4}>
        {rightNode}
      </GridItem>
    </StyledHero>
  )
}
