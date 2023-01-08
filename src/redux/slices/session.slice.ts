import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { endpoints } from "../../api";
import { IUserIdentity } from "../../interfaces";
import { IRegisterFormState } from "../../pages";
import { checkAuthToken, identityBuilder } from "../utils";

export interface ISessionState {
  isAuthenticated : boolean,
  isNotFound : boolean,
  isRequesting : boolean,
  isInvalidPassword : boolean,
  identity?: IUserIdentity,
  register?: {
    isSuccedded: boolean,
    errors: any []
  }
}

const initialState : ISessionState = {
  isAuthenticated: false,
  isNotFound: false,
  isRequesting: false,
  isInvalidPassword: false,
  identity : undefined,
  register: undefined
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
        isRequesting: false,
        identity : identityBuilder(login!.data)
      }
    } catch (err: any) {
      return {
        ...sessionReducer,
        isAuthenticated: false,
        isNotFound: err.status === 404,
        isInvalidPassword: err.status === 400,
        isRequesting: false
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

export const register = createAsyncThunk('session/register', 
  async ({ userName, ...rest } : IRegisterFormState, { getState, dispatch }) => {
    const { sessionReducer } = getState() as RootState 
    try{
      dispatch(request(true))
      const {
        errors
      } = await dispatch(endpoints.register.initiate({
        username: userName,
        ...rest, 
      })).unwrap()

      return {
        ...sessionReducer,
        register: {
          isSuccedded: errors.length === 0 ? true : false,
          errors: errors
        }
      }
    } catch(err){
      return {
        ...sessionReducer,
        register: {
          isSuccedded: false,
          errors: []
        }
      }
    } finally {
      dispatch(request(false))
    }
  }
);

const sessionSlice = (state: ISessionState = initialState) => (
  createSlice({
    name: 'session',
    initialState: state,
    reducers: {
      resetState: (state) => ({ 
        ...state, ...initialState
      }),
      request: (state, action: PayloadAction<boolean>) => ({
        ...state, isRequesting: action.payload
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
      builder.addCase(register.fulfilled, (state, action) => ({
        ...state, ...action.payload
      }))
    }
  })
)

export const {
  request,
  failure,
  logout,
  resetState
} = sessionSlice().actions
export const sessionReducer = sessionSlice().reducer
