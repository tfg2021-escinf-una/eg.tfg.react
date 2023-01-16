import styled from 'styled-components'
import { Card, Grid, GridItem } from '../../components'

export const StyledHome = styled(Grid)`
  row-gap: 10px;
  > ${Grid}{
    >${GridItem}:nth-child(1){
      align-items: center;
      flex-direction: column;
      row-gap: 10px;
    };
  };
`
export const ClickableCard = styled(Card)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({theme}) => theme.palette.find({
      color: 'primary',
      type: 'main'
    })} !important;
  };
  > div {
    padding: 12px !important;
  }
`
