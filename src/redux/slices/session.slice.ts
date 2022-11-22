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
    const { sessionReducer } = getState() as RootState
    try {
      dispatch(request(true))
      const login = await dispatch(endpoints.login.initiate({
        emailAddress,
        password
      })).unwrap()   
      return {
        ...sessionReducer,
        isAuthenticated: true,
        isRequestingLogin: false,
        identity : identityBuilder(login!.data)
      }
    } catch (err: any) {
      return {
        ...sessionReducer,
        isAuthenticated: false,
        isNotFound: err.status === 404,
        isInvalidPassword: err.status === 400,
        isRequestingLogin: false
      }
    } finally {
      dispatch(request(false))
    } 
  }
)

export const refresh = createAsyncThunk('session/refresh',
  async ({ jwt, refresh } : any, { getState, dispatch }) => {
    const { sessionReducer } = getState() as RootState
    try{
      const request = await dispatch(endpoints.refresh.initiate({
        jwtToken: jwt,
        refreshToken: refresh
      })).unwrap()
      return {
        ...sessionReducer,
        isAuthenticated: true,
        identity: identityBuilder(request!.data)
      }
    } catch(err) {
      return {
        ...sessionReducer, 
        isAuthenticated: false,
        identity: undefined
      }
    }
  } 
)

export const checkAuthentication = createAsyncThunk('session/checkAuthentication',
  async (_ , { getState, dispatch }) => {
    const { sessionReducer: { identity, isAuthenticated } } = getState() as RootState
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

export const handleSubmit = createAsyncThunk('session/handleSubmit', 
  async ({ emailAddress, password }: any, { getState, dispatch }) => { 
    const { sessionReducer } = getState() as RootState
    try {
      if(emailAddress.length > 0 && password.length > 0){
        return {
          ...sessionReducer,
          ...await dispatch(login({
            emailAddress: emailAddress,
            password : password
          })).unwrap()
        }    
      }
    } catch (err: any){
      return {
        ...sessionReducer,
        isAuthenticated: false,
        isNotFound: err.status === 404,
        isInvalidPassword: err.status === 400,
        isRequestingLogin: false
      }
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
      builder.addCase(handleSubmit.fulfilled, (state, action) => ({
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
