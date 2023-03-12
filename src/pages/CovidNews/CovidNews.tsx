import { useNewsQuery, useVaccinesQuery } from '../../api'
import { Grid, GridItem, Typography, withAuthentication } from '../../components'
import { DataTable } from './composites/DataTable'
import { StyledCarousel, StyledCarouselContainer, StyledImg, StyledMainContainer, StyledVaccinesInfoContainer } from './CovidNews.styles'

const CovidNews = () => {
  const { data: newsData, isLoading: isLoadingNews } = useNewsQuery({})
  const { data: vaccinesData } = useVaccinesQuery({})
  return (
    <StyledMainContainer>
      { newsData && !isLoadingNews && 
        <StyledCarouselContainer xs={12}
                                 sm={11}
                                 md={10}
                                 lg={8}
                                 xl={8}>
          <StyledCarousel>
            {
              newsData.news.map((news, i) => (       
                <Grid key={i}>
                  <GridItem xs={12}
                            sm={12}
                            md={6}
                            lg={6}>
                    <StyledImg src={news.urlToImage} 
                              alt={news.title} />
                  </GridItem>
                  <GridItem xs={12}
                            sm={12}
                            md={6}
                            lg={6}>
                    <Typography as="h2"
                                weight='bolder'
                                size="xl">
                      {news.title}
                    </Typography>
                    <Typography as="h2"
                                size="md">
                      {news.content?.split('[')[0] ?? ""}
                    </Typography>
                  </GridItem>
                </Grid>)
              )
            }
          </StyledCarousel>
        </StyledCarouselContainer>
      } 
      {
        vaccinesData && 
          <StyledVaccinesInfoContainer xs={12}
                                       sm={11}
                                       md={10}
                                       lg={7}
                                       xl={7}>
            <Typography as="h2"
                        size='xl'
                        weight='bolder'
                        textAlign="center">
              Vaccines Research Info
            </Typography>
            <DataTable vaccines={vaccinesData} />
          </StyledVaccinesInfoContainer>
      } 
    </StyledMainContainer>
  )
}

export const AuthCovidNews = withAuthentication(CovidNews)
