import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from "../api/api";
import { sessionReducer as sReducer } from "./slices/session.slice";

const sessionPersistConfig = {
  key: 'sessionReducer',
  storage,
}

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  sessionReducer: persistReducer(sessionPersistConfig, sReducer)
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(api.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
