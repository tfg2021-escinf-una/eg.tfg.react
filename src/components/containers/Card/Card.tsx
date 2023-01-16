import { CardActions, CardContent, CardMedia } from '@mui/material'
import { ReactNode } from 'react'
import { ITFGComponent } from '../../../interfaces'
import { IColorFinder } from '../../themes/utils'
import { StyledCard } from './Card.styles'

export interface ICardProps extends ITFGComponent {
  children: ReactNode,
  cardActions?: ReactNode,
  width?: number,
  imgProps?: { 
    src: string,
    alt: string,
    height?: number
  } | null,
  backgroundColor?: IColorFinder
  onClick?: () => void;
}

export const Card = ({
  className,
  children,
  width,
  imgProps = null,
  backgroundColor = { color: 'background', type: 'dark' },
  cardActions,
  onClick
}: ICardProps) => {
  const { src, alt } = imgProps || { src: "", alt: "" }
  return ( 
    <StyledCard sx={{ width: width, backgroundColor: backgroundColor }}
                className={className}
                onClick={onClick}>
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
