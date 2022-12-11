import styled from "styled-components"
import { Container, Grid } from "../../containers"

export const StyledWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  > ${Container}:nth-child(1){
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
  };

  > ${Container}:nth-child(2){
    padding-top: 80px; 
  }

  > ${Container}:nth-child(3){
    background-color: ${({ theme }) => theme.palette.find({ color: 'background', type: 'dark'})} !important;
    padding: 16px 0px;
    width: 100%;
    > ${Grid} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: min-content;
      row-gap: ${({theme}) => theme.spacing.find(1)};
    }    
  }
`
