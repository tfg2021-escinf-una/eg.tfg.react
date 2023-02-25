import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { logout } from "../../../redux/slices/session.slice";
import { Container, Navbar, Footer } from "../../containers";
import { defaultValues } from "./styles";
import { StyledWrapper } from "./withBaseWrapper.styles";

export const withBaseWrapper =
  (WrappedComponent: any) =>
  (props: any) => {

  const { isAuthenticated } = useSelector((state : RootState)  => state.sessionReducer);
  const dispatch : AppDispatch = useDispatch(); 
  return(
    <StyledWrapper { ...defaultValues } 
                   flex
                   direction={'column'} >
      <Container>    
        <Navbar isAuthenticated={isAuthenticated}
                title={`TFG - Universidad Nacional ${new Date().getUTCFullYear()}`}
                handleSignOut={() => { dispatch(logout()) }} />
      </Container>
      <Container>
        <WrappedComponent { ...props } />
      </Container>
      <Container>
        <Footer />
      </Container>
    </StyledWrapper>    
  )
}

           