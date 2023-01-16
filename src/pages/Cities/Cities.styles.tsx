
import styled from "styled-components";
import { Grid, GridItem } from "../../components";

export const StyledGridCities = styled(Grid)`
  >${GridItem} {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    > ${Grid}{
      > ${GridItem}:nth-child(1){
        align-items: center;
      }
      > ${GridItem}{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
      }
    }
  }
`
