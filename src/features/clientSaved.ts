import { createSlice } from "@reduxjs/toolkit";
import { SAVED_COLLECTIONS, SAVED_IMGS } from "../utils";
import { UnsplashDataProps } from "./feed";

const initialState = {
  selectedCollections: {},
  selectedPhotos: {},
}

const clientSaved = createSlice({
  name: 'clientSaved',
  reducers: {
    fetchSavedCollections(state){
      state.selectedCollections = JSON.parse(localStorage.getItem(SAVED_COLLECTIONS) as string) || {}
      state.selectedPhotos = JSON.parse(localStorage.getItem(SAVED_IMGS) as string) || {}
    },
    saveCollection(state, action) {
      let savedCollections:Record<string, UnsplashDataProps> = {}
      //FOR COLLECTIONS
      if(action.payload.type === 'collection') {
        if(localStorage.getItem(SAVED_COLLECTIONS) !== null) {
          savedCollections = JSON.parse(localStorage.getItem(SAVED_COLLECTIONS) as string)
        }
        savedCollections[action.payload.id] = action.payload
        localStorage.setItem(SAVED_COLLECTIONS, JSON.stringify(savedCollections))
        state.selectedCollections = savedCollections
      } else {
        //FOR PHOTOS
        if(localStorage.getItem(SAVED_IMGS) !== null) {
          savedCollections = JSON.parse(localStorage.getItem(SAVED_IMGS) as string)
        }
        savedCollections[action.payload.id] = action.payload
        localStorage.setItem(SAVED_IMGS, JSON.stringify(savedCollections))
        state.selectedPhotos = savedCollections
      }
    },
    removeCollection(state, action) {
      //FOR COLLECTIONS
      if(action.payload.type === 'collection') {
        let savedCollections = JSON.parse(localStorage.getItem(SAVED_COLLECTIONS) as string)
        delete savedCollections[`${action.payload.id}`]
        localStorage.setItem(SAVED_COLLECTIONS, JSON.stringify(savedCollections))
        state.selectedCollections = savedCollections
      } else {
        let savedCollections = JSON.parse(localStorage.getItem(SAVED_IMGS) as string)
        delete savedCollections[`${action.payload.id}`]
        localStorage.setItem(SAVED_IMGS, JSON.stringify(savedCollections))
        state.selectedPhotos = savedCollections
      }
    }},
  initialState
})

export const { saveCollection, removeCollection, fetchSavedCollections } = clientSaved.actions
export default clientSaved.reducer