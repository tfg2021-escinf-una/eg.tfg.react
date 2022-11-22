import { Box, Button, CircularProgress, SnackbarOrigin } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import SnackBar from '@mui/material/Snackbar';
import { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { Typography } from "../../components/utils";
import { AppDispatch, RootState } from "../../redux";
import { handleSubmit, ISessionState } from "../../redux/slices/session.slice";
import { StyledCard, StyledCardActions, StyledCardContent, StyledDiv, StyledLogo, StyledTextField } from "./Login.styles";

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
  const { isAuthenticated, isRequestingLogin } : ISessionState = useSelector((state : RootState)  => state.sessionReducer);
  const dispatch : AppDispatch = useDispatch();
  const [ emailAddress, setEmailAddress ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ emailAddressHasError, setEmailAddressHasError ] = useState<boolean>(false)
  const [ passwordHasError, setPasswordHasError ] = useState<boolean>(false)
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

  const onSubmit = async () => {
    try{
      const request = await dispatch(handleSubmit({ emailAddress: emailAddress, password: password })).unwrap()
      const { 
        isAuthenticated: isAuth,
        isNotFound: notFound
      } = request || { isAuthenticated: false, isNotFound: false}  
      if(!isAuth){
        if(notFound){
          handleSnack({...snackState, message: 'The entered user is not found'})
        } else {
          handleSnack({...snackState, message: 'The entered password is incorrect'})
        }
      }
    } catch (err) {
      handleSnack({...snackState, message: 'An unexpected error has occurred, please try again'})
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

  return (
    (!isAuthenticated) ?
      <StyledDiv>
        <StyledCard sx={{minWidth: 400}}>
          <StyledCardContent>
            <StyledLogo>
              <img src={"/logo.png"} alt="tfg-logo" />
            </StyledLogo>
            <Box component="div"
                 sx={{ marginBottom: '20px',  width: '100%'}}>
              <StyledTextField required
                               error={emailAddressHasError}
                               id="outlined-error"
                               label="Email Address"
                               sx={{ width: '100%'}}
                               onChange={(event) => setEmailAddress(event.target.value)}
                               onBlur={(event: React.FocusEvent<HTMLInputElement>) => onBlurInput(event, (flag) => setEmailAddressHasError(flag))}/>
            </Box>
            <Box component="div">
              <StyledTextField required 
                               error={passwordHasError}
                               id="outlined-password-input-error"
                               label="Password"
                               type="password"
                               autoComplete="current-password"
                               sx={{ width: '100%'}}
                               onChange={(event) => setPassword(event.target.value)} 
                               onBlur={(event: React.FocusEvent<HTMLInputElement>) => onBlurInput(event, (flag) => setPasswordHasError(flag))}/>
            </Box>
          </StyledCardContent>
          <StyledCardActions>
            <Box component="div"
                sx={{ display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      width: '100%'}}>
              {
                isRequestingLogin 
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
                        Continue
                      </Typography>
                    </Button>
              }
            </Box>
          </StyledCardActions>
        </StyledCard>
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
