import styled from 'styled-components'
import { Grid, GridItem } from '../../components'

export const StyledProfile = styled(Grid)`
  row-gap: 10px;
  > ${Grid}{
    >${GridItem}{
      align-items: center;
      flex-direction: column;
      row-gap: 10px;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 15px;
      };
    };
  };
`
