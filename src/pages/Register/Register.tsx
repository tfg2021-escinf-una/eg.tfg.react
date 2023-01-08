import { Box, Button, CircularProgress } from "@mui/material";
import SnackBar from '@mui/material/Snackbar';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, GridItem, Card, Alert } from "../../components";
import { ISnackState } from "../../interfaces";
import { AppDispatch, RootState } from "../../redux";
import { StyledRegister } from "./Register.styles";
import { useLocalSlice } from "use-local-slice"
import { RegisterForm } from "./RegisterForm";
import { register as registerAction, resetState} from "../../redux/slices/session.slice";

type Payload = {
  property: keyof IRegisterFormState,
  value: string
}

export interface IRegisterFormState {
  userName: string,
  emailAddress: string,
  password: string,
  confirmPassword: string,
  firstName: string,
  lastName: string,
}

const initialRegisterState : IRegisterFormState = {
  userName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: ""
} 

export const Register = () => {
  const { isRequesting } = useSelector((state : RootState)  => state.sessionReducer);
  const dispatch : AppDispatch = useDispatch();
  const [ snackState, setSnackState ] = useState<ISnackState>({
    open: false,
    severity: 'error',
    vertical: 'bottom',
    horizontal: 'center',
    message: '',
  });

  const [{
    userName,
    firstName,
    lastName,
    emailAddress,
    password,
    confirmPassword
  }, dispatcher ] = useLocalSlice({
    initialState: initialRegisterState,
    reducers: {
      fill: (state, action: { payload: Payload }) => {
        const {
          payload: {
            property, value
          }
        } = action

        return (({
          "userName": { ...state, userName: value },
          "firstName": { ...state, firstName: value },
          "lastName": { ...state, lastName: value },
          "emailAddress": { ...state, emailAddress: value },
          "password": { ...state, password: value },
          "confirmPassword": { ...state, confirmPassword: value }
        })[property]);      
      }
    }
  });

  const handleSnack = (newState: ISnackState ) => {
    setSnackState({ ...newState,  open: true });
  };

  const onSubmitForm = async () => {
    const { 
      register: {
        isSuccedded,
      }
    } = await dispatch(registerAction({
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: password,
      confirmPassword: confirmPassword
    })).unwrap()

    if(!isSuccedded){
      handleSnack({ ...snackState, message: "Un error ocurrió mientras se realizaba el registro" })
    } else {
      handleSnack({ ...snackState, message: "Usuario registrado correctamente", severity: 'success'})
    }

    dispatch(resetState())
  };

  const isFormCompleted = () => (
    userName.length > 0
    && firstName.length > 0
    && lastName.length > 0
    && emailAddress.length > 0
    && password.length > 0
    && confirmPassword.length > 0
    && password === confirmPassword
  );

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
                  onClick={onSubmitForm}
                  disabled={!isFormCompleted()}>
            <Typography as="h6"
                        size="md"
                        weight="bolder">
              Registrarme
            </Typography>
          </Button>
    }
    </Box>
  ), [
    isRequesting,
    emailAddress,
    password,
    confirmPassword,
  ])

  return (
    <StyledRegister justify="center">
      <GridItem xs={12}
                sm={7}
                md={5}
                lg={4}>
        <Card imgProps={{ src: "/logo.png", alt: "tfg-logo", height: 200 }}
              cardActions={<CardActions/>}>
          <RegisterForm userName={userName}
                        firstName={firstName}
                        lastName={lastName}
                        emailAddress={emailAddress}
                        password={password}
                        confirmPassword={confirmPassword}
                        dispatcher={dispatcher} />
        </Card>
        <SnackBar anchorOrigin={{ vertical: snackState.vertical, horizontal: snackState.horizontal }}
                  open={snackState.open}
                  onClose={() => setSnackState({ ...snackState, open: false })}
                  key={snackState.vertical + snackState.horizontal}
                  autoHideDuration={5000}>
          <Alert severity={snackState.severity}>{snackState.message}</Alert>
        </SnackBar>
      </GridItem>
    </StyledRegister> 
  );
};
