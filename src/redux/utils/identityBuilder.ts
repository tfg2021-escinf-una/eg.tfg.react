import jwtDecode, { JwtPayload } from 'jwt-decode';
import { IToken, IUserIdentity } from "../../interfaces";

type CustomJwtPayload = JwtPayload & {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string,
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string,
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string,
  'username': string,
  'id': number
}

export const identityBuilder = (idpTokens : IToken) : IUserIdentity => {
  const { 
    jwtToken,
    refreshToken,
    expiresat } = idpTokens;
  const decoded = jwtDecode<CustomJwtPayload>(jwtToken);
  return {
    id: 1,
    username: decoded.username,
    emailAddress: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
    firstName : decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],    
    role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
    tokens: {
      jwtToken: jwtToken,
      refreshToken: refreshToken,
      expiresat: expiresat
    }
  }
}
