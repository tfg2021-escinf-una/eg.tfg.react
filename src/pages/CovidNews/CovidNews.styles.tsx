import Carousel from 'react-material-ui-carousel'
import styled from 'styled-components'
import { Grid, GridItem, Typography } from '../../components'

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  padding: 8px;
`
export const StyledMainContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center !important;
  row-gap: 25px;
`
export const StyledImg = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 18px 18px 18px 18px;
`
export const StyledCarouselContainer = styled(GridItem)` 
  height: 100%;
  width: 70%;
  border-radius: 18px 18px 18px 18px;
  background-color: ${({theme}) => theme.palette.find({
    color: 'background',
    type: 'dark'
  })};

  ${Grid}{
    height: 90%; 
    > ${GridItem}{
      height: inherit;
      flex-direction: column;
      row-gap: 10px;
    };
    > ${GridItem}:nth-child(2){
      display: flex;
      height: inherit;
      padding: 12px;
      background-color: ${({theme}) => theme.palette.find({
        color: 'background',
        type: 'dark'
      })};
      > ${Typography}{
        padding: 15px;
      }
    }
  }
`
export const StyledVaccinesInfoContainer = styled(GridItem)`
  display: flex;
  flex-direction: column !important;
  row-gap: 10px;
  align-items: center;
  align-content: center;
  justify-content: center !important;
`
