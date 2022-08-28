import { AppBar } from "@mui/material"
import styled from "styled-components"

export const StyledNavbar = styled(AppBar)`
  display: block;
  position: inherit;
  background-color: ${({ theme }) => theme.palette['primary'].main };
`
