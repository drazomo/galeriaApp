import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { SliceInitState } from "../app/store"
import { UnsplashDataProps } from "./feed"

const initialState: SliceInitState<UnsplashDataProps> = {
  page: 1,
  isLoading: false,
  hasError: false,
  data: []
}

interface CollectionProps {
  page: number
  id: string
}

export const fetchCollection = createAsyncThunk('collection/fetchCollection', async ({id, page}: CollectionProps) => {
  const res = await fetch(`https://api.unsplash.com/collections/${id}/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${page}`)
  const data = await res.json()
  return data
})

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCollection.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(fetchCollection.rejected, (state) => {
        state.hasError = true
      })
      .addCase(fetchCollection.pending, (state) => {
        state.isLoading = true
      })
  }
})

export default collectionSlice.reducer