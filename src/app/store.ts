import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import feed from '../features/feed'
import showcaseFeed from "../features/showcaseFeed";

export interface SliceInitState<T> {
  data: T[]
  isLoading: boolean
  hasError: boolean
  page: number
}

export const store = configureStore({
  reducer: {
    feed,
    showcaseFeed
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
