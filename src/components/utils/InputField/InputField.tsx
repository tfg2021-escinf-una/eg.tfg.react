import { TextField } from "@mui/material"
import styled from "styled-components"
import { IFontSize, IFontWeight } from "../../themes"


export const InputField = styled(TextField)<{
  size?: IFontSize
  weight?: IFontWeight
}>`
  label,
  input {
    ${({theme, size, weight}) => theme.typography.create({
      weight: weight ?? 'normal',
      size: size ?? 'md',
    })}
  }
`

