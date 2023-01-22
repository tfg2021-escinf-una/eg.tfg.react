import styled from "styled-components";
import { Card, Grid } from "../../components";

export const StyledInformative = styled(Grid)`
  row-gap: 15px;  
`
export const StyledLeftNode = styled(Grid)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: inherit;
  > h1 {
    font-size: 40px;
  }

  > h1,
    h4,
    h6 {
      margin: 25px;
    }
`
export const StyledRightNode = styled.div`
  display: flex;
  width: inherit;
`

export const StyledCard = styled(Card)`
  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.palette.find({
      color: 'primary',
      type: 'main'
    })} !important;
  };
  & .MuiCardContent-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    margin-top: 15px;
  }
`
