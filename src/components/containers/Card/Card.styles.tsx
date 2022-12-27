import styled from 'styled-components'
import { IColorFinder } from '../../themes/utils'

export const StyledCard = styled.div<{
  backgroundColor: IColorFinder
}>`
  display: flex;
  > div {
    background-color: ${({ theme, backgroundColor }) => theme.palette.find(backgroundColor) };
  }
`
