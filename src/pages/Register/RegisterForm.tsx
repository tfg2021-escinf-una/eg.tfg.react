import { Box } from "@mui/material";
import { InputField } from "../../components";
import { IRegisterFormState } from "./Register";
import { StyledCardContent } from "./Register.styles";

export const RegisterForm = ({
  dispatcher,
  ...props
}: IRegisterFormState & {
  dispatcher: any
}) => {
  return (
    <StyledCardContent>
      <Box component="div">
        <InputField required
                    id="outlined-error"
                    label="Username"
                    sx={{ width: '100%'}}
                    value={props.userName}
                    onChange={(event) => dispatcher.fill({ property: 'userName', value: event.target.value })} />
      </Box>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'row', columnGap: '5px'}}>
        <InputField required
                    id="outlined-error"
                    label="Nombre"
                    sx={{ width: '50%'}}
                    value={props.firstName}
                    onChange={(event) => dispatcher.fill({ property: 'firstName', value: event.target.value })} />        
        <InputField required
                    id="outlined-error"
                    label="Apellido"
                    sx={{ width: '50%'}}
                    value={props.lastName}
                    onChange={(event) => dispatcher.fill({ property: 'lastName', value: event.target.value })} />
      </Box>
      <Box component="div">
        <InputField required
                    id="outlined-error"
                    label="Correo electronico"
                    sx={{ width: '100%'}}
                    value={props.emailAddress}
                    onChange={(event) => dispatcher.fill({ property: 'emailAddress', value: event.target.value })} />
      </Box>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'row', columnGap: '5px'}}>
        <InputField required 
                    id="outlined-password-input-error"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    sx={{ width: '50%'}}
                    value={props.password}
                    onChange={(event) => dispatcher.fill({ property: 'password', value: event.target.value} )} />
        <InputField required 
                    id="outlined-password-input-error"
                    label="Confirmar contraseña"
                    type="password"
                    color={props.password === props.confirmPassword ? 'success' : 'error'}
                    autoComplete="current-password"
                    focused={props.password !== "" ? true : false}
                    sx={{ width: '50%'}}
                    value={props.confirmPassword}
                    onChange={(event) => dispatcher.fill({ property: 'confirmPassword', value: event.target.value })} />
        </Box>
    </StyledCardContent>
  )
}
