import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SliceInitState } from "../app/store";


export interface UnsplashUsrDataProps {
  name: string
  profile_image: {
    large: string
  }
  portfolio_url: string
  followers_count?: number
  following_count?: number
  total_photos: number
};

const initialState: SliceInitState<UnsplashUsrDataProps> = {
  data: {} as UnsplashUsrDataProps,
  hasError: false,
  isLoading: false,
  page: 1
};

export const fetchUserData = createAsyncThunk('userFeed/fetchUserData', async () => {
  const res = await fetch(
    `https://api.unsplash.com/users/mailchimp?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
  );
  const data = await res.json();

  return data
});

const userFeed = createSlice({
  name: 'userFeed',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
      state.hasError = false
    })
    .addCase(fetchUserData.rejected, (state, action) => {
      state.hasError = true
    })
    .addCase(fetchUserData.pending, (state, action) => {
      state.isLoading = true
    })
  }
})

export default userFeed.reducer