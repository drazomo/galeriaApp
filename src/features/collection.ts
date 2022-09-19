import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { UnsplashDataProps } from "./feed"

const initialState = {
  page: 1,
  isLoading: false,
  hasError: false,
  data: [] as UnsplashDataProps[],
  detail: {
    total_photos: 0
  }
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

export const fetchCollectionDetail = createAsyncThunk('collection/fetchCollectionDetail', async (id: string) => {
  const res = await fetch(`https://api.unsplash.com/collections/${id}?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`)
  const data = await res.json()
  return data
})


const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCollection.fulfilled, (state, action) => {
        state.data = Array.from(new Set([...state.data as UnsplashDataProps[], ...action.payload]))
        state.isLoading = false
        state.hasError = false
      })
      .addCase(fetchCollection.rejected, (state) => {
        state.hasError = true
      })
      .addCase(fetchCollection.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCollectionDetail.fulfilled, (state, action) => {
        state.detail = action.payload
        state.isLoading = false
        state.hasError = false
      })
      .addCase(fetchCollectionDetail.rejected, state => {
        state.hasError = true
      })
      .addCase(fetchCollectionDetail.pending, state => {
        state.isLoading = true
      })
  }
})

export const { nextPage } = collectionSlice.actions
export default collectionSlice.reducer