import styled from 'styled-components'

export const StyledMainContainer = styled.div`
  height: 100%;
  width: 100%;
`
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  display: inline;
`
export const StyledCarouselCardContainer = styled.div`
  display: flex;
  background-color: #71828A;
  flex-direction: row;
  width: 100%;
  height: 85%;
  margin-top: 5rem;
  border-radius: 25px;
  overflow: hidden;
`
export const StyledCarouselContainer = styled.div`
  height: 45%;
  width: 100%;
`
export const StyledImgContainer = styled.div`
  width: 50%;
`
export const StyledContent = styled.div`
  width: 50%;
  color: white;
  margin-left: 1rem;
`
export const StyledVaccinesInfoContainer = styled.div`
  width: 100%;
  height: 40%;
`
export const StyledVaccinesTitle = styled.h1`
  color: ${({theme}) => theme.palette['primary'].light};
`
