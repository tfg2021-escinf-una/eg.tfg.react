import { ReactNode, useCallback } from "react"
import { Grid, GridItem, Hero, Icon, Typography } from "../../components"
import { IFontSize } from "../../components/themes"
import { StyledCard, StyledInformative, StyledLeftNode, StyledRightNode } from "./Informative.styles"

const StyledTypography = ({ 
  children, 
  size
 }: { children: ReactNode, size: keyof IFontSize }) => (
  <Typography as="h5"
              size={size}
              weight="bolder"
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
    <Grid spacing={2}
          justify={'center'}
          alignItems={'center'}>
      <GridItem xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                justify={'center'}
                align={'center'}>
        {firstCard}
      </GridItem>
      <GridItem xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                justify={'center'}
                align={'center'}>
        {secondCard}
      </GridItem>
      <GridItem xs={12}
                sm={5}
                md={4}
                lg={4}
                xl={4}
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
                md={6}
                lg={4}
                xl={4}>
        <Hero leftNode={<LeftNode/>}
              rightNode={<RightNode/>}/>
      </GridItem>
      <GridItem xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                justify={'center'}>
        <CardGrid firstCard={
          <StyledCard onClick={() => window.open("https://tfg2021-escinf-una.github.io/Microservicios", "_blank")}>
            <StyledTypography size="xl">Microservicios</StyledTypography>
            <Icon size={220} 
                  iconName={"grid_view"} />        
          </StyledCard>
        } secondCard={
          <StyledCard onClick={() => window.open("https://tfg2021-escinf-una.github.io/CI_CD", "_blank")}>
            <StyledTypography size="xl" >CI/CD</StyledTypography>
            <Icon size={220}
                  iconName={"rocket_launch"} />  
          </StyledCard>
        } thirdCard={
          <StyledCard onClick={() => window.open("https://tfg2021-escinf-una.github.io/Tutorial/Microservicios/ReactUI/", "_blank")}>
            <StyledTypography size="xl">Interfaz de Usuario</StyledTypography>
            <Icon size={220}
                  iconName={"desktop_windows"} />  
          </StyledCard>
        }/>
      </GridItem>
    </StyledInformative>
  )
}
