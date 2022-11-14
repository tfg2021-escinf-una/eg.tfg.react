import { Button } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { useNewsQuery, useVaccinesQuery } from '../../api'
import { withAuthentication } from '../../components'
import { DataTable } from './components/DataTable'
import { StyledCarouselCardContainer, StyledCarouselContainer, StyledContent, StyledImg, StyledImgContainer, StyledMainContainer, StyledVaccinesInfoContainer, StyledVaccinesTitle } from './CovidNews.styles'

const CovidNews = () => {
  const { data: newsData } = useNewsQuery({})
  const { data: vaccinesData } = useVaccinesQuery({})

  return (
    <StyledMainContainer>
      <StyledCarouselContainer>
        {
          newsData && 
            <Carousel height={'500px'}>
              {
              newsData.news.map((news, i) => (       
                  <StyledCarouselCardContainer key={i}>
                    <StyledImgContainer>
                      <StyledImg src={news.urlToImage} 
                                alt={news.title} />
                    </StyledImgContainer>
                    <StyledContent>
                      <h2>{news.title}</h2>
                      <p>{news.content.split('[')[0]}</p>
                      <Button className="CheckButton">
                        Check it out!
                      </Button>
                    </StyledContent>
                  </StyledCarouselCardContainer>
                ))
              }
            </Carousel>
        }
      </StyledCarouselContainer>
     {
        vaccinesData && 
        <StyledVaccinesInfoContainer>
          <StyledVaccinesTitle>
            Vaccines Research Info
          </StyledVaccinesTitle>
          <DataTable vaccines={vaccinesData} />
        </StyledVaccinesInfoContainer>
     } 
    </StyledMainContainer>
  )
}

export const AuthCovidNews = withAuthentication(CovidNews)
