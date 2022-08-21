import { createSlice } from "@reduxjs/toolkit";

export interface ISessionState {
  isAuthenticated : boolean,
  isNotFound : boolean,
  isRequestingLogin : boolean,
  isInvalidPassword : boolean,
  refreshTriggered: boolean
  failure : boolean,
  identity: any,
}

const initialState : ISessionState = {
  isAuthenticated: false,
  isNotFound: false,
  isRequestingLogin: false,
  isInvalidPassword: false,
  failure: false,
  refreshTriggered: false,
  identity : {
    user : undefined,
    tokens: undefined
  } 
};


const sessionSlice = (state: ISessionState = initialState) => (
  createSlice({
    name: 'session',
    initialState: state,
    reducers: {},
    extraReducers: (builder) => {

    },
  })
)

export const sessionReducer = sessionSlice().reducer
