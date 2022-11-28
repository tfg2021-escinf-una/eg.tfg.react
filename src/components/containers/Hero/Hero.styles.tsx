import styled from 'styled-components'
import { Grid, GridItem } from '../GridSystem'

export const StyledHero = styled.div<{
  maxHeight: number
}>`
  display: flex;
  background-color: ${({theme}) => theme.palette.find({ color: 'background', type: 'dark' })};
  max-height: ${({maxHeight}) => maxHeight}px;
  > ${Grid} 
    > div {
      > ${GridItem}:nth-child(2){
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
`
