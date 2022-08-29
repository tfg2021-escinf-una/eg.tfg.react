import { IApiResponse, IToken, IUser } from "../../interfaces";
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

const identityPrefix = '/api/User' || '/identity'
const identityService = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query<IApiResponse<IToken>, CredentialRequest>({
      query: (credentials) => ({
        url: `${identityPrefix}/login`,
        method: 'POST',
        body: credentials,
        validateStatus: (response) => response.status === 200,
      }),    
    }),
    register: builder.query<IApiResponse<RegisterUser>, RegisterUser>({
      query: (user) => ({
        url: `${identityPrefix}/register`,
        method: 'POST',
        body: user
      })
    }),
    refresh: builder.query<IApiResponse<IToken>, RefreshTokenRequest>({
      query: (tokens) => ({
        url: `${identityPrefix}/refresh`,
        method: 'POST',
        body: tokens
      })
    })
  })
})

export const {
  endpoints,
} = identityService
