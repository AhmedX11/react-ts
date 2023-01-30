import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;