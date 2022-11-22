import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { AppDispatch, RootState } from "../../../redux";
import { checkAuthentication, refresh } from "../../../redux/slices/session.slice";
import { useInterval } from "../../hooks";

export const withAuthentication =
  (WrappedComponent : any) =>
  (props: any) => {
    const { 
      isAuthenticated,
      identity,
    } = useSelector((state : RootState)  => state.sessionReducer);
    const dispatch : AppDispatch = useDispatch();
    
    useEffect(() => {
      dispatch(checkAuthentication())
    }, [dispatch])

    useInterval(() => {
      if(identity && identity.tokens){
        const { tokens: { jwtToken, refreshToken }} = identity
        dispatch(refresh({
          jwt: jwtToken,
          refresh: refreshToken
        }))
      }
    }, 150000)
    
    if(isAuthenticated){
      return (
        <WrappedComponent {...props} />
      );
    }
    return <Navigate to="/login"/>
  }
