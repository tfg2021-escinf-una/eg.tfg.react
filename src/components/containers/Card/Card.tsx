import {Button, Card as MuiCard, CardActions, CardContent, CardMedia} from '@mui/material'
import { ReactNode } from 'react'
import { IColorFinder } from '../../themes/utils'
import { Typography } from '../../utils'
import { StyledCard } from './Card.styles'

export interface ICardProps {
  title: string,
  body: string,
  children: ReactNode,
  maxWidth?: number,
  imgProps?: HTMLImageElement | null,
  backgroundColor?: IColorFinder
}

export const Card = ({
  title,
  body,
  maxWidth = 345,
  imgProps = null,
  backgroundColor = { color: 'background', type: 'dark' }
}: ICardProps) => {
  const { src, alt } = imgProps 
     || { src: "", alt: "" }

  return (
    <StyledCard backgroundColor={backgroundColor}>
      <MuiCard sx={{ maxWidth: maxWidth }}>
        { imgProps && 
            <CardMedia component="img"
                      height="140"
                      image={src}
                      alt={alt} /> 
        }
        <CardContent>
          <Typography as="h5"
                      size="lg"
                      fontColor={{ color: 'primary', type: 'contrastText' }}>
            {title}
          </Typography>
          <Typography as="h5"
                      size="sm"
                      fontColor={{ color: 'primary', type: 'contrastText' }}>
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </MuiCard>
    </StyledCard>
  )
}
