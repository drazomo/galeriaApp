import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SliceInitState } from "../app/store";
import { UnsplashDataProps } from "./feed";


export const fetchUserFotos = createAsyncThunk('userFotosFeed/fetchUserFotos', async (page: number) => {
  const res = await fetch(`https://api.unsplash.com/users/mailchimp/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${page}`);
  const data = await res.json();
  return data
});

const initialState: SliceInitState<UnsplashDataProps> = {
  data: [],
  hasError: false,
  isLoading: false,
  page: 1
}

const userFotosFeed = createSlice({
  name: 'userFotosFeed',
  initialState,
  reducers: {
    nextPage: (state) => {
			state.page += 1
		}
  },
  extraReducers: builder => {
    builder.addCase(fetchUserFotos.fulfilled, (state, action) => {
      state.data = Array.from(new Set([...state.data as UnsplashDataProps[], ...action.payload]))
      state.hasError = false
      state.isLoading = false
    })
    .addCase(fetchUserFotos.rejected, (state) => {
      state.hasError = true
    })
    .addCase(fetchUserFotos.pending, (state) => {
      state.isLoading = true
    })
  }
})

export default userFotosFeed.reducer;
export const { nextPage } = userFotosFeed.actions