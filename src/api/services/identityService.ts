import { IToken, IUser } from "../../interfaces";
import { api } from "../api";

export type CredentialRequest = {
  emailAddress : string,
  password: string
}

export type RegisterUser = Omit<IUser, "id" | "role"> & {
  password: string,
  confirmPassword: string
}

export type RefreshTokenRequest = {
  jwtToken : string,
  refreshToken: string,
}

const identityService = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query<IToken, CredentialRequest>({
      query: (credentials) => ({
        url: '/identity/login',
        method: 'POST',
        body: credentials,
        validateStatus: (response) => response.status === 200,
      }),    
    }),
    register: builder.query<RegisterUser, RegisterUser>({
      query: (user) => ({
        url: '/identity/register',
        method: 'POST',
        body: user
      })
    }),
    refresh: builder.query<IToken, RefreshTokenRequest>({
      query: (tokens) => ({
        url: '/identity/refresh',
        method: 'POST',
        body: tokens
      })
    })
  })
})

export const {
  endpoints,
} = identityService
