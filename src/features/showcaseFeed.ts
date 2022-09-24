import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export interface CollectionCardProps {
  title: string
  id: string
  preview_photos: any
}

const initialState = {
  data: [] as CollectionCardProps[],
  isLoading: false,
  hasError: false,
  page: 1
}

export const fetchShowcaseFeed = createAsyncThunk('showcaseFeed/fetchShowcaseFeed', async () => {
  const res =  await fetch(`https://api.unsplash.com/collections?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&per_page=5&page=${Math.floor(Math.random() * (200 - 1) + 1)}`)
  const data = await res.json()
  return data
})

const showcaseFeed = createSlice({
  name: 'showcaseFeed',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchShowcaseFeed.fulfilled, (state, action) => {
      state.data = action.payload
      state.hasError = false
      state.isLoading = false
    })
    .addCase(fetchShowcaseFeed.pending, state =>{
      state.isLoading = true
    })
    .addCase(fetchShowcaseFeed.rejected, state => {
      state.hasError = true
    })
  }
})

export default showcaseFeed.reducer