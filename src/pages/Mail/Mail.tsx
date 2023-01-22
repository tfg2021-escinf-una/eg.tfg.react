import { Card, Grid,  GridItem, withAuthentication, Typography, InputField, useAuthData } from "../../components"
import Textarea from '@mui/joy/Textarea';
import { StyledBox, StyledMail } from "./Mail.styles"
import { useCallback } from "react";
import { useLazySendEmailQuery } from "../../api";
import { Button, CircularProgress } from "@mui/material";
import { PayloadAction, useLocalSlice } from "use-local-slice";

interface MailState {
  subject: string,
  message: string
}

const initialMailState: MailState = {
  subject: "",
  message: ""
}

const Mail = () => {
  const [ sendEmail, { isLoading: isRequesting } ] = useLazySendEmailQuery()
  const { emailAddress } = useAuthData() 
  const [{
    subject,
    message,
  }, { 
    setMessage,
    setSubject,
    clean
  }] = useLocalSlice({
    initialState: initialMailState,
    reducers: {
      setSubject: (state, action: PayloadAction<string>) => ({ ...state, subject: action.payload }),
      setMessage: (state, action: PayloadAction<string>) => ({ ...state, message: action.payload }),
      clean: (state) => ({ ...state, ...initialMailState })
    }
  })

  const onSendEmail = useCallback(async({ address, subject, message }: any) => {
    try {
      await sendEmail({
        address: address,
        subject: subject,
        message: message
      }).unwrap();
      clean()
      alert("Mensaje enviado")
    } catch (err) {
      alert("Error al enviar")
    }
  },[ sendEmail, clean ])

  const CardActions = useCallback(() => (
    <StyledBox component="div">
      {
      isRequesting 
        ? <CircularProgress /> 
        : <Button variant="contained"
                  size="large"
                  color="primary"
                  sx={{ width: '100%' }}
                  onClick={() => onSendEmail({
                    address: emailAddress,
                    subject: subject,
                    message: message
                  })}
                  disabled={subject.length === 0 || message.length === 0 }>
            <Typography as="h6"
                        size="md"
                        weight="bolder">
              Enviar
            </Typography>
          </Button>
    }
    </StyledBox>
  ), [
    isRequesting,
    onSendEmail,
    emailAddress,
    subject,
    message
  ]);

  return (
    <StyledMail justify="center">
      <GridItem xs={12}
                sm={12}
                md={12}>
          <Typography weight="bolder"
                      size="lg"
                      textAlign="center">
          Envie un correo electrónico por medio de MailJet 
          </Typography>
          <Typography weight="bolder"
                      size="sm"
                      textAlign="center">
            Este será enviado al email con el que se registró
          </Typography>
      </GridItem>
      <GridItem xs={12}
                sm={7}
                md={4}>
          <Card cardActions={<CardActions/>}>
            <Grid justify={'center'}>
              <GridItem xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}>
                <InputField placeholder="Asunto"
                            value={subject}
                            onChange={({ target: { value } }) => setSubject(value)}/>
                <Textarea minRows={10}
                          placeholder="Escriba el mensaje a enviar"
                          size="lg"
                          variant="outlined"
                          value={message}
                          onChange={({ target: { value } }) => setMessage(value)} />
              </GridItem>
            </Grid>            
          </Card>
        </GridItem>
    </StyledMail>
  )
}

export const AuthMail = withAuthentication(Mail)
