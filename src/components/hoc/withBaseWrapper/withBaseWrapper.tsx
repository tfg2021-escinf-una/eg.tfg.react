import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux";
import { ISessionState, logout } from "../../../redux/slices/session.slice";
import { Navbar } from "../../containers";
import { StyledContent, StyledFooter, StyledFooterContent, StyledHeader } from "./withBaseWrapper.styles";

export const withBaseWrapper =
  (WrappedComponent: any) =>
  (props: any) => {

  const session : ISessionState = useSelector((state : RootState)  => state.sessionReducer);
  const dispatch : AppDispatch = useDispatch();
  const navigate = useNavigate();
 
  return(
    <>
      <StyledHeader>
        <Navbar isAuthenticated={session.isAuthenticated}
                title={"TFG - Universidad Nacional"}
                handleOnClickLogin={() => navigate('/login')}
                handleSignOut={() => { dispatch(logout()) }} />
      </StyledHeader>
      <StyledContent>
        <WrappedComponent {...props} />
      </StyledContent>
      <StyledFooter>
        <StyledFooterContent>
          <Typography color="textPrimary" variant="h5">
            UNA - Trabajo Final de Graduacion
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Creado por Luis Ramírez y Edwin Lobo
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Copyright © {new Date().getUTCFullYear()}
          </Typography>
        </StyledFooterContent>
      </StyledFooter>
    </>
  )
}
