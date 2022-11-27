import { GridDirection } from '@mui/system';
import styled from 'styled-components';

export const StyledGrid = styled.div<{
  direction: GridDirection
  spacing: number
}>`
  display: flex;
  flex-grow: 1;
  flex-direction: ${({ direction }) => direction}
  flex-wrap: wrap;
  > div {
    > div {
      padding: 0px ${({ theme, spacing }) => theme.spacing.find(spacing)};
    } 
  }
`

