import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import feed from '../features/feed'

export const store = configureStore({
  reducer: {
    feed
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
