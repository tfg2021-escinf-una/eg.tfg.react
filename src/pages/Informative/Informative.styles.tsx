import styled from "styled-components";
import { Grid } from "../../components";

export const StyledInformative = styled(Grid)`
  display: flex;
  flex-direction: column;
  row-gap: 15px;  
`
export const StyledLeftNode = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
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
`
