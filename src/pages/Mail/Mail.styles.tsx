import { Box } from "@mui/material"
import styled from "styled-components"
import { Grid, GridItem } from "../../components"
import { StyledCard } from "../../components/containers/Card/Card.styles"

export const StyledMail = styled(Grid)`
  display: flex;
  flex-direction: column !important;
  row-gap: 25px;
  > ${GridItem}{
    display: flex;
    flex-direction: column;
    width: 100%;
    > ${StyledCard} {
      ${GridItem}{
        display: flex;
        flex-direction: column;
        row-gap: 25px;

      }
    }
  }
`
export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`
