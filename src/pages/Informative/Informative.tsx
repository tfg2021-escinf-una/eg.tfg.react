import { useCallback } from "react"
import { Card, Grid, GridItem, Hero, Typography,  } from "../../components"
import { StyledInformative, StyledLeftNode, StyledRightNode } from "./Informative.styles"

export const Informative = () => {
  const LeftNode = useCallback(() => (
    <StyledLeftNode>
      <Typography as="h1"
                  size="xl"
                  weight="bolder">
        Sitio web didáctico sobre mejores prácticas para el desarrollo web.
      </Typography>
      <Typography as="h4"
                  size="lg"
                  weight="normal">
        Utilizando una infraestructura de microservicios
        bajo un marco de Integración y Entrega Continua en la nube.
      </Typography>
      <Typography as="h6"
                  size="sm"
                  weight="normal">
        Version: 1.0.0
      </Typography>
    </StyledLeftNode>
  ), [])
  
  const RightNode = useCallback(() => (
    <StyledRightNode>
      <img src="/logo.png"
           aria-label="tfglogo" />
    </StyledRightNode>
  ), [])
  
  const CardGrid = useCallback(({
    firstCard,
    secondCard,
    thirdCard
  }: any) => (
    <Grid spacing={5}
          justify={'center'}>
      <GridItem xs={12}
                sm={12}
                md={4}
                justify={'center'}
                align={'center'}>
        {firstCard}
      </GridItem>
      <GridItem xs={12}
                sm={12}
                md={4}
                justify={'center'}>
        {secondCard}
      </GridItem>
      <GridItem xs={12}
                sm={12}
                md={4}
                justify={'center'}>
        {thirdCard}
      </GridItem>
    </Grid>    
  ), [])

  return (
    <StyledInformative justify="center"
                       direction="column">
      <GridItem xs={12}
                md={12}
                justify={'center'}>
        <Hero leftNode={<LeftNode/>}
              rightNode={<RightNode/>}/>
      </GridItem>
      <GridItem xs={12}
                md={12}>
        
      </GridItem>
    </StyledInformative>
  )
}
