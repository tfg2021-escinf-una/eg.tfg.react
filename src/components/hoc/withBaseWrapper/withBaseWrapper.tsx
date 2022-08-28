import { Typography } from "@mui/material";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux";
import { ISessionState } from "../../../redux/slices/session.slice";
import { Navbar } from "../../containers";
import { StyledContent, StyledFooter, StyledFooterContent, StyledHeader } from "./withBaseWrapper.styles";

interface IIdentityHandler {
  sessionState : ISessionState,
  dispatch : AppDispatch
  children: ReactNode,
}

const IdentityHandler = ({
  sessionState,
  dispatch,
  children
} : IIdentityHandler) => {

  useEffect(() => {
    //dispatch(retrieveIdentity())
  }, [])

  return(
    <>{children}</>
  )
}

export const withBaseWrapper =
  (WrappedComponent: any) =>
  (props: any) => {

  const session : ISessionState = useSelector((state : RootState)  => state.sessionReducer);
  const dispatch : AppDispatch = useDispatch();
  const navigate = useNavigate();
  const dt = new Date();

  return(
    <>
      <StyledHeader>
        <Navbar isAuthenticated={session.isAuthenticated}
                title={"TFG - Universidad Nacional"}
                handleOnClickLogin={() => navigate('/login')}
                handleSignOut={() => { console.log('missing') }} />
      </StyledHeader>
      <StyledContent>
        <IdentityHandler sessionState={session}
                         dispatch={dispatch}>
          <WrappedComponent {...props} />
        </IdentityHandler>
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
            Copyright © {dt.getUTCFullYear()}
          </Typography>
        </StyledFooterContent>
      </StyledFooter>
    </>
  )
}
