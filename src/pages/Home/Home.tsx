import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, GridItem, Icon, Typography, useAuthData, withAuthentication } from "../../components";
import { ITFGComponent } from "../../interfaces";
import { StyledHome, ClickableCard } from "./Home.styles";

const Home = ({
  className
}: ITFGComponent) => {
  const { firstName } = useAuthData();
  const navigate = useNavigate()

  const WelcomeLegend = useCallback(() => (
    <GridItem xs={12}>
      <Typography as="h1"
                  size="xl"
                  weight="bolder"
                  textAlign={"center"}>
        Bienvenido de nuevo, {firstName}! 
      </Typography>
      <Typography as="h2"
                  size="lg"
                  weight="bold"
                  textAlign={"center"}>
        Seleccione el microservicio que desee probar 
      </Typography>
    </GridItem>
  ), [firstName])

  const CardGrid = useCallback(({
    leftCard,
    rightCard
  }: {
    leftCard: JSX.Element,
    rightCard: JSX.Element
  }) => (
    <>
      <GridItem xs={12}
                sm={5}
                md={4}
                lg={3}
                xl={2}>
        {leftCard}
      </GridItem>
      <GridItem xs={12}
                sm={5}
                md={4}
                lg={3}
                xl={2}>
        {rightCard}           
      </GridItem> 
    </>
  ), [])

  const IconCard = useCallback(({
    iconName,
    onClick,
  }: { 
    iconName: string 
    onClick: () => void
  }) => (
    <ClickableCard onClick={onClick}>
      <Icon iconName={iconName}
            size={150}/>
    </ClickableCard>
  ), [])

  return (
    <StyledHome>
      <Grid spacing={2}
            justify={"center"}
            alignItems={"center"}>
        <WelcomeLegend/>
        <CardGrid leftCard={<IconCard iconName="travel_explore" onClick={() => navigate('/cities')}/>}
                  rightCard={<IconCard iconName="coronavirus" onClick={() => navigate('/covid')}/>} />
      </Grid>
      <Grid spacing={2}
            justify={"center"}
            alignItems={"center"}>
        <CardGrid leftCard={<IconCard iconName="perm_identity" onClick={() => navigate('/profile')}/>}
                  rightCard={<IconCard iconName="forward_to_inbox" onClick={() => navigate('/mail')}/>}/>
      </Grid>       
    </StyledHome>
  );
}

export const AuthHome = withAuthentication(Home)
