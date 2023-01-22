import styled from 'styled-components'
import { Grid, GridItem } from '../GridSystem'

export const StyledHero = styled(Grid)`
  display: flex;
  align-items: stretch !important;
  justify-content: center !important;

  > ${GridItem} {
    background-color: ${({theme}) => theme.palette.find({ color: 'background', type: 'dark' })};
  }
  > ${GridItem}:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
