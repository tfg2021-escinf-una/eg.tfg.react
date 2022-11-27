import { Grid, GridItem } from "../../components"

export const Informative = () => {
  return (
    <Grid spacing={8}
          direction={'row-reverse'}>
      <GridItem xs={12}
                sm={12}
                md={4}>
        <div style={{backgroundColor: '#fff'}}>Test</div>
      </GridItem>
      <GridItem xs={12}
                sm={12}
                md={4}>
        <div style={{backgroundColor: '#fff'}}>Grid</div>
      </GridItem>    
      <GridItem xs={12}
                sm={12}
                md={4}>
        <div style={{backgroundColor: '#fff'}}>Experience</div>
      </GridItem>  
    </Grid>
  )
}
