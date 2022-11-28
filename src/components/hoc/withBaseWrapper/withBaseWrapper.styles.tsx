import styled from "styled-components"

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
`
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const StyledContent = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.find({ color: 'background', type: 'main'})};
  height: 100vh;
  padding: 64px 319px 0px 319px;
`
export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 48px 0px;
  background-color: ${({ theme }) => theme.palette.find({ color: 'background', type: 'dark'})};
`
export const StyledFooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: ${({theme}) => theme.spacing.find(1)};
`
