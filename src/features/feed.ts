import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SliceInitState } from "../app/store";

export interface ImgProperties {
  urls: {
    small?: string;
    regular?: string;
  };
  id: string;
  description?: string;
}

export interface UnsplashDataProps extends ImgProperties {
  links: {
    self: string,
    download: string
  },
  likes: number,
  user: {
    username: string,
    profile_image: {
      large: string
    }
  },
}

const initialState: SliceInitState<UnsplashDataProps> = {
  data: [],
  isLoading: false,
  hasError: false,
  page: 1
}

export const fetchFotos = createAsyncThunk('feed/fetchFotos', async (page: number) => {
  const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&page=${page}`);
  const data = await res.json();

  return data
})


const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    nextPage: (state) => {
			state.page += 1
		}
  },
  extraReducers: builder => {
    builder.addCase(fetchFotos.fulfilled, (state, action) => {
      state.data = [...state.data, ...action.payload]
      state.hasError = false
      state.isLoading = false
    })
    .addCase(fetchFotos.rejected, (state) => {
      state.hasError = true
    })
    .addCase(fetchFotos.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const { nextPage } = feedSlice.actions
export default feedSlice.reducer