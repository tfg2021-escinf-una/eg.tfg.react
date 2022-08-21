import { configureStore } from "@reduxjs/toolkit";
import { sessionReducer } from "./slices/session.slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    }),
  reducer: {
    sessionReducer: sessionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
