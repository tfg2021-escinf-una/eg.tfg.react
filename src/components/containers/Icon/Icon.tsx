import styled from "styled-components"

export interface IconProps {
  iconName: string,
  size: number
}

const StyledIcon = styled.span<{
  size?: number
}>`
  ${({size}) => size && 
    `font-size: ${size}px;`
  }; 
`

export const Icon = ({
  iconName,
  size
}: IconProps) => {
  return (
    <StyledIcon className="material-icons"
                size={size}>
      {iconName}
    </StyledIcon>
  )
}
