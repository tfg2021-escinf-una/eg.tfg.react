import { ReactNode } from "react"
import { ITFGComponent } from "../../../interfaces"
import { GridItem } from "../GridSystem"
import { StyledHero } from "./Hero.styles"

export interface IHeroProps extends ITFGComponent {
  leftNode: ReactNode,
  rightNode: ReactNode,
  maxHeight?: number,
}

export const Hero = ({
  className,
  leftNode,
  rightNode,
  ...rest
}: IHeroProps) => {
  return (
    <StyledHero className={className}
                spacing={0}>
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
    </StyledHero>
  )
}
