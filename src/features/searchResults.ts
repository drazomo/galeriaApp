import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UnsplashDataProps } from "./feed";
import { CollectionCardProps } from "./showcaseFeed";

interface QueryProps {
  query: string
  page: number
}

interface DetailProps {
  total: number
  total_pages: number
}

const initialState = {
  collectionResults: [] as CollectionCardProps[],
  collectionDetails: {} as DetailProps,
  photoResults: [] as UnsplashDataProps[],
  photoDetails: {} as DetailProps,
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
      state.collectionPage = state.collectionPage + 1
    },
    incrementPhotoPage: (state) => {
      state.photoPage = state.photoPage + 1
    }
  },
  initialState,
  extraReducers: builder => {
    builder
      .addCase(queryPhotosSearch.fulfilled, (state, action) => {
        state.photoResults = Array.from(new Set([...state.photoResults, ...action.payload.results]))
        state.photoDetails = {...action.payload}
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
        state.collectionResults = Array.from(new Set([...state.collectionResults, ...action.payload.results]))
        state.collectionDetails = {...action.payload}
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