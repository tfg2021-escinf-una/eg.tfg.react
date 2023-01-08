import styled from "styled-components"
import { StyledLogin } from "../../../pages/Login/Login.styles"
import { StyledRegister } from "../../../pages/Register/Register.styles"
import { Container, Grid } from "../../containers"

export const StyledWrapper = styled(Container)`
  > ${Container}:nth-child(1){
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
  };

  > ${Container}:nth-child(2){
    padding-top: 64px;
    &:has(${StyledLogin}),
    &:has(${StyledRegister}) {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-evenly;
    }
  }

  > ${Container}:nth-child(3){
    background-color: ${({ theme }) =>
      theme.palette.find({ color: 'background', type: 'dark'})}
      !important;
    padding: 16px 0px;
    margin-top: auto;
    width: 100%;
    border-radius: 0px 0px 12px 12px;
    > ${Grid} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: min-content;
      row-gap: ${({theme}) => theme.spacing.find(1)};
    }    
  }
`
