import { CardActions, CardContent, CardMedia } from '@mui/material'
import { ReactNode } from 'react'
import { IColorFinder } from '../../themes/utils'
import { StyledCard } from './Card.styles'

export interface ICardProps {
  children: ReactNode,
  cardActions?: ReactNode,
  width?: number,
  imgProps?: { 
    src: string,
    alt: string,
    height?: number
  } | null,
  backgroundColor?: IColorFinder
}

export const Card = ({
  children,
  width,
  imgProps = null,
  backgroundColor = { color: 'background', type: 'dark' },
  cardActions
}: ICardProps) => {
  const { src, alt } = imgProps || { src: "", alt: "" }
  return ( 
    <StyledCard sx={{ width: width, backgroundColor: backgroundColor }}>
      { imgProps && 
          <CardMedia component={"img"}
                     height={imgProps.height}
                     image={src}
                     alt={alt} /> 
      }
      <CardContent sx={{ padding: '8px'}}>
        { children }
      </CardContent>
      { cardActions && 
        <CardActions>
          {cardActions}
        </CardActions>}
    </StyledCard>
  )
}
