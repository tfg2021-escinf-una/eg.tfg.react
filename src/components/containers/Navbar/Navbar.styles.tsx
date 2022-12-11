import { AppBar } from "@mui/material"
import styled from "styled-components"

export const StyledNavbar = styled(AppBar)`
  display: block !important;
  position: inherit !important;
  background-color: ${({ theme }) => theme.palette.find({ color: 'primary', type: 'main' })} !important;
`
export const StyledContainer = styled.div<{
  flexGrow?: boolean
}>`
  display: flex; 
  flex-direction: row;
  ${({flexGrow}) => flexGrow && 'flex-grow: 1'};
`
