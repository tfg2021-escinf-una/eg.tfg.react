import { Card } from '@mui/material'
import styled from 'styled-components'

export const StyledCard = styled(Card)`
  width: ${({sx}) => (sx as any)?.width 
    ? `${(sx as any)?.width}px`
    : `${100}%` 
  };
  background-color: ${({ theme, sx }) => 
    theme.palette.find((sx as any).backgroundColor)} !important;
  
  > img {
    object-fit: contain;
  }
`
