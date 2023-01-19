
import { Card, Grid, GridItem, Icon, Typography, useAuthData, withAuthentication } from "../../components"
import { StyledProfile } from "./Profile.styles";

const Profile = () => {
  const {
    firstName,
    userName,
    emailAddress
  } = useAuthData();

  return (
    <StyledProfile>
      <Grid spacing={2}
            direction="column"
            justify={"center"}
            alignItems={"center"}>
        <GridItem xs={12}
                  sm={5}
                  md={4}
                  lg={3}
                  xl={2}>
          <Typography as="h1"
                      size="xl"
                      weight="bolder"
                      textAlign={"center"}>
            Datos proveeídos por el Identity Management API 
          </Typography>
        </GridItem>
        <GridItem xs={12}
                  sm={5}
                  md={4}
                  lg={3}
                  xl={2}>
          <Card>
            <Icon iconName="perm_identity" 
                  size={150} />
            <Typography as="h2"
                        size="lg"
                        weight="bolder"
                        textAlign={"center"}>
              Nombre: <em>{firstName}</em>
            </Typography>
            <Typography as="h3"
                        size="md"
                        weight="bolder"
                        textAlign={"center"}>
              Nickname: <em>{userName}</em>
            </Typography>
            <Typography as="h3"
                        size="md"
                        weight="bolder"
                        textAlign={"center"}>
              Correo electrónico: <em>{emailAddress}</em>
            </Typography>
          </Card>
        </GridItem>
      </Grid>
    </StyledProfile>
  )
}

export const AuthProfile = withAuthentication(Profile)
