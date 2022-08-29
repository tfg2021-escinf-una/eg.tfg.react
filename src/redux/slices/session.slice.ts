import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { endpoints } from "../../api";
import { IUserIdentity } from "../../interfaces";
import { checkAuthToken, identityBuilder } from "../utils";

export interface ISessionState {
  isAuthenticated : boolean,
  isNotFound : boolean,
  isRequestingLogin : boolean,
  isInvalidPassword : boolean,
  identity?: IUserIdentity,
}

const initialState : ISessionState = {
  isAuthenticated: false,
  isNotFound: false,
  isRequestingLogin: false,
  isInvalidPassword: false,
  identity : undefined
};

export const login = createAsyncThunk('session/login', 
  async ({ emailAddress, password } : any, { getState, dispatch }) => {
    dispatch(request(true))
    const { sessionReducer } = getState() as RootState
    const loginRequest = await dispatch(endpoints.login.initiate({
      emailAddress,
      password
    }))
    const { data } = loginRequest
    if(loginRequest.isError){
      const error : any = loginRequest.error
      return {
        ...sessionReducer,
        isAuthenticated: false,
        isNotFound: error.originalStatus === 404,
        isInvalidPassword: error.originalStatus === 400,
        isRequestingLogin: false
      }
    }

    return {
      ...sessionReducer,
      isAuthenticated: true,
      isRequestingLogin: false,
      identity : identityBuilder(data!.data)
    }
  }
)

export const refresh = createAsyncThunk('session/refresh',
  async ({ jwt, refresh } : any, { getState, dispatch }) => {
    const { sessionReducer } = getState() as RootState
    const refreshRequest = await dispatch(endpoints.refresh.initiate({
      jwtToken: jwt,
      refreshToken: refresh
    }))

    if(refreshRequest.isSuccess){
      const { data } = refreshRequest
      return {
        ...sessionReducer,
        isAuthenticated: true,
        identity: identityBuilder(data!.data)
      }
    }
    return {
      ...sessionReducer, 
      isAuthenticated: false,
      identity: undefined
    }
  } 
)

export const checkAuthentication = createAsyncThunk('session/checkAuthentication',
  async (_ , { getState, dispatch }) => {
    const { sessionReducer } = getState() as RootState
    const { identity, isAuthenticated } = sessionReducer
    if(identity && identity.tokens && isAuthenticated){
      if(!checkAuthToken(identity.tokens)){
        const refreshRequest = await dispatch(endpoints.refresh.initiate({
          jwtToken: identity.tokens.jwtToken,
          refreshToken: identity.tokens.refreshToken
        }))
        if(refreshRequest.isSuccess){
          const { data } = refreshRequest
          return {
            ...sessionReducer,
            isAuthenticated: true,
            identity: identityBuilder(data!.data)
          }
        }
      }
    }
    return {
      ...sessionReducer, 
      isAuthenticated: false,
      identity: undefined
    }
  } 
)

const sessionSlice = (state: ISessionState = initialState) => (
  createSlice({
    name: 'session',
    initialState: state,
    reducers: {
      request: (state, action: PayloadAction<boolean>) => ({
        ...state, isRequestingLogin: action.payload
      }),
      failure: (state, action: PayloadAction<boolean>) => ({
        ...state, failure: action.payload
      }),
      logout: (state) => ({
        ...state, 
        identity: undefined,
        isAuthenticated: false
      })
    },
    extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, action) => ({
        ...state, ...action.payload
      }))
      builder.addCase(refresh.fulfilled, (state, action) => ({
        ...state, ...action.payload
      }))
    }
  })
)

export const {
  request,
  failure,
  logout
} = sessionSlice().actions
export const sessionReducer = sessionSlice().reducer
