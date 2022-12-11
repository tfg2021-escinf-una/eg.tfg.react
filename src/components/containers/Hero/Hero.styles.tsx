import styled from 'styled-components'
import { Grid, GridItem } from '../GridSystem'

export const StyledHero = styled(Grid)`
  display: flex;
  background-color: ${({theme}) => theme.palette.find({ color: 'background', type: 'dark' })};
  > ${GridItem}:nth-child(2){
    align-items: center;
    display: flex;
    justify-content: center;
  }
`
