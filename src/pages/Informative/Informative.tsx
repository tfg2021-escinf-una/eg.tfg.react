import { Button } from "@mui/material"
import { ReactNode, useCallback } from "react"
import { Card, Grid, GridItem, Hero, Typography } from "../../components"
import { IFontSize } from "../../components/themes"
import { StyledInformative, StyledLeftNode, StyledRightNode } from "./Informative.styles"

const StyledTypography = ({ 
  children, 
  size
 }: { children: ReactNode, size: keyof IFontSize }) => (
  <Typography as="h5"
              size={size}
              fontColor={{ color: 'primary', type: 'contrastText' }}>
    {children}
  </Typography>
)

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
          justify={'center'}
          alignItems={'center'}>
      <GridItem xs={12}
                sm={6}
                md={3}
                lg={3}
                xl={2}
                justify={'center'}
                align={'center'}>
        {firstCard}
      </GridItem>
      <GridItem xs={12}
                sm={6}
                md={3}
                lg={3}
                xl={2}
                justify={'center'}
                align={'center'}>
        {secondCard}
      </GridItem>
      <GridItem xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={2}
                justify={'center'}
                align={'center'}>
        {thirdCard}
      </GridItem>
    </Grid>    
  ), [])

  return (
    <StyledInformative justify="center"
                       direction="column">
      <GridItem xs={12}
                sm={12}
                md={12}
                justify={'center'}>
        <Hero leftNode={<LeftNode/>}
              rightNode={<RightNode/>}/>
      </GridItem>
      <GridItem xs={12}
                md={12}
                justify={'center'}>
        <CardGrid firstCard={
          <Card cardActions={<Button size="small">Learn More</Button>}>
            <StyledTypography size="lg">Microservicios</StyledTypography>
            <StyledTypography size="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum at felis quis bibendum.
              Pellentesque metus diam, fermentum vitae orci at, cursus feugiat tellus. Proin lobortis imperdiet
              dui euismod facilisis. Aliquam bibendum sem vel convallis porttitor. Mauris tincidunt vel est et
              euismod. Cras sit amet iaculis sem. Etiam varius eget dui ac congue. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst.
            </StyledTypography>   
          </Card>
        } secondCard={
          <Card cardActions={<Button size="small">Learn More</Button>}>
            <StyledTypography size="lg">CI/CD</StyledTypography>
            <StyledTypography size="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum at felis quis bibendum.
              Pellentesque metus diam, fermentum vitae orci at, cursus feugiat tellus. Proin lobortis imperdiet
              dui euismod facilisis. Aliquam bibendum sem vel convallis porttitor. Mauris tincidunt vel est et
              euismod. Cras sit amet iaculis sem. Etiam varius eget dui ac congue. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst.
            </StyledTypography>   
          </Card>
        } thirdCard={
          <Card cardActions={<Button size="small">Learn More</Button>}>
            <StyledTypography size="lg">UI</StyledTypography>
            <StyledTypography size="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum at felis quis bibendum.
              Pellentesque metus diam, fermentum vitae orci at, cursus feugiat tellus. Proin lobortis imperdiet
              dui euismod facilisis. Aliquam bibendum sem vel convallis porttitor. Mauris tincidunt vel est et
              euismod. Cras sit amet iaculis sem. Etiam varius eget dui ac congue. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst.
            </StyledTypography>   
          </Card>
        }/>
      </GridItem>
    </StyledInformative>
  )
}
