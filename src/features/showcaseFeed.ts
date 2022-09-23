import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLLECTIONS_IDS } from "../utils";
import { UnsplashDataProps } from "./feed";
export interface CollectionCardProps {
  title: string
  id: string
  preview_photos: any
}

const initialState = {
  selectedCollections: {},
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
  reducers: {
    fetchSavedCollections(state){
      state.selectedCollections = JSON.parse(localStorage.getItem(COLLECTIONS_IDS) as string) || {}
    },
    saveCollection(state, action) {
      let savedCollections:Record<string, UnsplashDataProps> = {}
      if(localStorage.getItem(COLLECTIONS_IDS) !== null) {
        savedCollections = JSON.parse(localStorage.getItem(COLLECTIONS_IDS) as string)
      }
      savedCollections[action.payload.id] = action.payload
      localStorage.setItem(COLLECTIONS_IDS, JSON.stringify(savedCollections))
      state.selectedCollections = savedCollections
    },
    removeCollection(state, action) {
      let savedCollections = JSON.parse(localStorage.getItem(COLLECTIONS_IDS) as string)
      delete savedCollections[`${action.payload}`]
      localStorage.setItem(COLLECTIONS_IDS, JSON.stringify(savedCollections))
      state.selectedCollections = savedCollections
    }
  },
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

export const { saveCollection, removeCollection, fetchSavedCollections } = showcaseFeed.actions
export default showcaseFeed.reducer