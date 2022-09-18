import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import feed from '../features/feed'
import showcaseFeed from "../features/showcaseFeed";
import userCollection from "../features/userCollection";
import userFeed from "../features/userFeed";
import userPhotosFeed from "../features/userPhotosFeed";
import collection from "../features/collection";

export interface SliceInitState<T> {
  data: T[] | T
  isLoading: boolean
  hasError: boolean
  page: number
}

export const store = configureStore({
  reducer: {
    feed,
    collection,
    showcaseFeed,
    userFeed,
    userPhotosFeed,
    userCollection
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
