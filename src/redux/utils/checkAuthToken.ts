import { IToken } from "../../interfaces";

export const checkAuthToken = (idpTokens : IToken) => {
  if(idpTokens){  
    const expireDate = new Date(idpTokens.expiresat)
    return expireDate.getTime() > Date.now()     
  }
  return false
}
