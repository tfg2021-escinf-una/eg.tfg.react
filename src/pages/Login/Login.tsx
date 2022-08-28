import { Box, Button, Card, CircularProgress, SnackbarOrigin, TextField, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import SnackBar from '@mui/material/Snackbar';
import { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import imgSrc from '../../assets/logo.png';
import { AppDispatch, RootState } from "../../redux";
import { ISessionState, login } from "../../redux/slices/session.slice";
import { StyledCardActions, StyledCardContent, StyledDiv, StyledLogoWrapper } from "./Login.styles";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ISnackState extends SnackbarOrigin {
  open?: boolean,
  message: string
}

export const Login = () => {
  const session : ISessionState = useSelector((state : RootState)  => state.sessionReducer);
  const dispatch : AppDispatch = useDispatch();
  const [ emailAddress, setEmailAddress ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ snackState, setSnackState] = useState<ISnackState>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
    message: '',
  });
  const { vertical, horizontal, message,  open } = snackState;

  const handleSnack = (newState: ISnackState ) => {
    setSnackState({...newState,  open: true });
  };

  const handleSubmit = async () => {
    if(emailAddress.length > 0 && password.length > 0){
      const updatedState = await dispatch(login({
        emailAddress: emailAddress,
        password : password
      })).unwrap();
      
      if(!updatedState.isAuthenticated){
        if(updatedState.isNotFound){
          handleSnack({...snackState, message: 'The entered user is not found'})
        } else {
          handleSnack({...snackState, message: 'The entered password is incorrect'})
        }
      }
    }
  }

  return (
    (!session.isAuthenticated) ?
      <StyledDiv>
        <Card sx={{ minWidth: 400 }} className="card">
          <StyledCardContent>
            <StyledLogoWrapper>
              <img src={imgSrc} alt="tfg-logo" />
            </StyledLogoWrapper>
            <Box component="div"
                 sx={{ marginBottom: '20px',  width: '100%'}}>
              <TextField required
                         error={emailAddress === ""}
                         id="outlined-error"
                         label="Email Address"
                         sx={{ width: '100%'}}
                         onChange={(event) => setEmailAddress(event.target.value)}/>
            </Box>
            <Box component="div">
              <TextField required
                        error={password === ""}
                        id="outlined-password-input-error"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        sx={{ width: '100%'}}
                        onChange={(event) => setPassword(event.target.value)} />
            </Box>
          </StyledCardContent>
          <StyledCardActions>
            <Box component="div"
                sx={{ display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      width: '100%'}}>
              {
                session.isRequestingLogin ?
                  <CircularProgress /> :
                  <Button variant="contained"
                          size="large"
                          color="primary"
                          sx={{ width: '100%' }}
                          onClick={handleSubmit}>
                    <Typography variant="h6"
                                sx={{fontWeight: 'normal',
                                    textTransform: 'capitalize'}}>
                      Continue
                    </Typography>
                  </Button>
              }
            </Box>
          </StyledCardActions>
        </Card>
        <SnackBar anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={() => setSnackState({ ...snackState, open: false })}
                  key={vertical + horizontal}
                  autoHideDuration={5000}>
          <Alert severity="error">{message}</Alert>
        </SnackBar>
      </StyledDiv> :
      <Navigate to="/" />
  );
}
