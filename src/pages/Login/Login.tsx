import { Box, Button, CircularProgress } from "@mui/material";
import SnackBar from '@mui/material/Snackbar';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { Typography, InputField, GridItem, Card, Alert } from "../../components";
import { ISnackState } from "../../interfaces";
import { AppDispatch, RootState } from "../../redux";
import { login } from "../../redux/slices/session.slice";
import { StyledCardContent, StyledLogin } from "./Login.styles";

export const Login = () => {
  const { isAuthenticated, isRequesting } = useSelector((state : RootState)  => state.sessionReducer);
  const dispatch : AppDispatch = useDispatch();
  const [ emailAddress, setEmailAddress ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ emailAddressHasError, setEmailAddressHasError ] = useState<boolean>(false)
  const [ passwordHasError, setPasswordHasError ] = useState<boolean>(false)
  const [ snackState, setSnackState] = useState<ISnackState>({
    open: false,
    severity: 'error',
    vertical: 'bottom',
    horizontal: 'center',
    message: '',
  });
  const { vertical, horizontal, message,  open } = snackState;

  const handleSnack = (newState: ISnackState ) => {
    setSnackState({...newState,  open: true });
  };

  const onSubmit = async () => {
    try{
      const {
        isAuthenticated: isAuth,
        isNotFound: notFound
      } = await dispatch(login({ 
        emailAddress: emailAddress,
        password: password 
        })
      ).unwrap()
      
      if(!isAuth){
        if(notFound){
          handleSnack({...snackState, message: 'Usuario no encontrado'})
        } else {
          handleSnack({...snackState, message: 'Contraseña incorrecta' })
        }
      }
    } catch (err) {
      handleSnack({...snackState, message: 'Un error ha ocurrido, intente nuevamente' })
    }
  }

  const onBlurInput = (
    event: React.FocusEvent<HTMLInputElement>,
    callback: (flag: boolean) => void
  ) => {
    event.target.value.length > 0 
      ? callback(false)
      : callback(true)
  }

  const CardActions = useCallback(() => (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
      width: '100%'}}
        component="div">
      {
      isRequesting 
        ? <CircularProgress /> 
        : <Button variant="contained"
                  size="large"
                  color="primary"
                  sx={{ width: '100%' }}
                  onClick={onSubmit}
                  disabled={emailAddress.length === 0 || password.length === 0 }>
            <Typography as="h6"
                        size="md"
                        weight="bolder">
              Continuar
            </Typography>
          </Button>
    }
    </Box>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [
    isRequesting,
    emailAddress,
    password,
  ])

  const CardContent = useCallback(({
    email: [ address, addressError ],
    password: [ password, passwordError]
  }: any) => (
    <StyledCardContent>
      <Box component="div">
        <InputField required
                    error={addressError}
                    id="outlined-error"
                    label="Correo electronico"
                    value={address}
                    sx={{ width: '100%'}}
                    onChange={(event) => setEmailAddress(event.target.value)}
                    onBlur={(event: React.FocusEvent<HTMLInputElement>) => onBlurInput(event, (flag) => setEmailAddressHasError(flag))}/>
      </Box>
      <Box component="div">
      <InputField required 
                  error={passwordError}
                  id="outlined-password-input-error"
                  label="Contraseña"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  sx={{ width: '100%'}}
                  onChange={(event) => setPassword(event.target.value)} 
                  onBlur={(event: React.FocusEvent<HTMLInputElement>) => onBlurInput(event, (flag) => setPasswordHasError(flag))}/>
      </Box>
    </StyledCardContent>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [
    setEmailAddress,
    setEmailAddressHasError,
    setPassword,
    setPasswordHasError,
  ])
  
  return (
    (!isAuthenticated) ?
      <StyledLogin justify="center">
        <GridItem xs={12}
                  sm={7}
                  md={4}>
          <Card imgProps={{ src: "/logo.png", alt: "tfg-logo", height: 200 }}
                cardActions={<CardActions/>}>
            <CardContent email={[ emailAddress, emailAddressHasError ]}
                         password={[ password, passwordHasError ]}/>
          </Card>
          <SnackBar anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={() => setSnackState({ ...snackState, open: false })}
                    key={vertical + horizontal}
                    autoHideDuration={5000}>
            <Alert severity={snackState.severity}>{message}</Alert>
          </SnackBar>
        </GridItem>
      </StyledLogin> :
      <Navigate to="/" />
  );
}
