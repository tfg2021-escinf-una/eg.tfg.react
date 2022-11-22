import { Card, CardActions, CardContent, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.find({ color: 'background', type: 'dark' })} !important;
`

export const StyledCardContent = styled(CardContent)`
  padding: 50px;
`
export const StyledCardActions = styled(CardActions)`
  padding: 50px;
`
export const StyledLogo = styled.div`
  display: flex;
  height: 120px;
  justify-content: center;
  margin-bottom: 40px;
`
export const StyledTextField = styled(TextField)`
  label,
  input {
    ${({theme}) => theme.typography.create({
      weight: 'normal',
      size: 'md',
    })}
  }
`
