
import { Typography } from "../../utils";
import { Grid, GridItem } from "../GridSystem";

export const Footer = () => (
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
)
