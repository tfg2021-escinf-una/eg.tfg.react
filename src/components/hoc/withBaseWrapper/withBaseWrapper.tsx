import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux";
import { ISessionState, logout } from "../../../redux/slices/session.slice";
import { Container, Grid, GridItem, Navbar } from "../../containers";
import { Typography } from "../../utils";
import { defaultValues } from "./values";
import { StyledWrapper } from "./withBaseWrapper.styles";

export const withBaseWrapper =
  (WrappedComponent: any) =>
  (props: any) => {

  const { isAuthenticated } = useSelector((state : RootState)  => state.sessionReducer);
  const dispatch : AppDispatch = useDispatch();
  const navigate = useNavigate();
 
  return(
    <StyledWrapper { ...defaultValues } flex direction={'column'} >
      <Container>    
        <Navbar isAuthenticated={isAuthenticated}
                title={"TFG - Universidad Nacional"}
                handleOnClickLogin={() => navigate('/login')}
                handleSignOut={() => { dispatch(logout()) }} />
      </Container>
      <Container>
        <WrappedComponent { ...props } />
      </Container>
      <Container>
        <Grid spacing={0}
              direction={'column'}>
          <GridItem xs={12}
                    sm={12}
                    md={12}>
            <Typography as="h5"
                        size="lg"
                        weight="bolder">
              UNA - Trabajo Final de Graduación
            </Typography>
          </GridItem>
          <GridItem xs={12}
                    sm={12}
                    md={12}>
            <Typography as="h5"
                        size="md"
                        weight="normal">
              Creado por Luis Ramírez y Edwin Lobo
            </Typography>
          </GridItem>
          <GridItem xs={12}
                    sm={12}
                    md={12}>
            <Typography as="h5"
                        size="md"
                        weight="normal">
              Copyright © {new Date().getUTCFullYear()}
            </Typography>
          </GridItem>
        </Grid>
      </Container>
    </StyledWrapper>    
  )
}

           