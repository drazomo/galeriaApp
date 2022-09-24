import { createSlice } from "@reduxjs/toolkit";
import { COLLECTIONS_IDS } from "../utils";
import { UnsplashDataProps } from "./feed";

const initialState = {
  selectedCollections: {},
}

const clientSaved = createSlice({
  name: 'clientSaved',
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
    }},
  initialState
})

export const { saveCollection, removeCollection, fetchSavedCollections } = clientSaved.actions
export default clientSaved.reducer