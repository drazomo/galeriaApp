import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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

const initialState = {
  data: {
    name: '',
    portfolio_url: '',
    profile_image: '',
    followers_count: 0,
    total_photos: 0,
    following_count: 0,
  } as unknown as UnsplashUsrDataProps,
  hasError: false,
  isLoading: false,
  page: 1
};

export const fetchUserData = createAsyncThunk('userFeed/fetchUserData', async (username: string) => {
  const res = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`);
  const data = await res.json();
  return data
})

const userFeed = createSlice({
  name: 'userFeed',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload
      state.hasError = false
      state.isLoading = false
    })
    .addCase(fetchUserData.rejected, (state) => {
      state.hasError = true
    })
    .addCase(fetchUserData.pending, (state) => {
      state.isLoading = true
    })
  }
})

export default userFeed.reducer