import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UnsplashDataProps } from "./feed";
import { CollectionCardProps } from "./showcaseFeed";

interface QueryProps {
  query: string
  page: number
}

interface ResultsProps<T> {
  total: number
  total_pages: number
  results: T
}

const initialState = {
  collectionResults: [] as unknown as ResultsProps<CollectionCardProps[]>,
  photoResults: [] as unknown as ResultsProps<UnsplashDataProps[]>,
  collectionPage: 1,
  photoPage: 1,
  isLoading: false,
  hasError: false,
}

export const queryPhotosSearch = createAsyncThunk('searchResults/queryPhotosSearch', async ({query, page}: QueryProps) => {
  const res =  await fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${page}&query=${query}`)
  const data = await res.json()
  return data
})

export const queryCollectionsSearch = createAsyncThunk('searchResults/queryCollectionsSearch', async ({query, page}: QueryProps) => {
  const res =  await fetch(`https://api.unsplash.com/search/collections?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${page}&query=${query}`)
  const data = await res.json()
  return data
})

const searchResults = createSlice({
  name: 'searchResults',
  reducers: {
    incrementCollectionPage: (state) => {
      state.collectionPage += 1
    },
    incrementPhotoPage: (state) => {
      state.photoPage += 1
    }
  },
  initialState,
  extraReducers: builder => {
    builder
      .addCase(queryPhotosSearch.fulfilled, (state, action) => {
        state.photoResults = action.payload
        state.hasError = false
        state.isLoading = false
      })
      .addCase(queryPhotosSearch.pending, state => {
        state.isLoading = true
      })
      .addCase(queryPhotosSearch.rejected, state => {
        state.hasError = true
      })
      .addCase(queryCollectionsSearch.fulfilled, (state, action) => {
        state.collectionResults = action.payload
        state.hasError = false
        state.isLoading = false
      })
      .addCase(queryCollectionsSearch.pending, state => {
        state.isLoading = true
      })
      .addCase(queryCollectionsSearch.rejected, state => {
        state.hasError = true
      })
  }
})

export const { incrementCollectionPage, incrementPhotoPage } = searchResults.actions
export default searchResults.reducer