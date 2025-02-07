import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import searchReducer from './slices/search.slice';
import favoriteReducer from './slices/favorite.slice';
import temperatureReducer from './slices/temperature.slice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  search: searchReducer,
  favorites: favoriteReducer,
  temperature: temperatureReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
