import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SliceInitState } from "../app/store";
import { UnsplashDataProps } from "./feed";
import { userProps } from "./userFeed";

const initialState: SliceInitState<UnsplashDataProps> = {
  page: 1,
  data: [],
  hasError: false,
  isLoading: false,
}

export const fetchUserCollection = createAsyncThunk('userCollection/fetchUserCollection', async ({page, user}: userProps) => {
  const res = await fetch(`https://api.unsplash.com/users/${user}/collections?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${page}`);
  const data = await res.json()
  return data
})

const userCollection = createSlice({
  name: 'userCollection',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserCollection.fulfilled, (state, action) => {
      state.data = Array.from(new Set([...state.data as UnsplashDataProps[], ...action.payload]))
      state.hasError = false
      state.isLoading = false
    })
      .addCase(fetchUserCollection.rejected, state => {
        state.hasError = true
      })
      .addCase(fetchUserCollection.pending, state => {
        state.isLoading = true
      })
  }
})

export const { nextPage } = userCollection.actions
export default userCollection.reducer