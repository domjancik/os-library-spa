import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface SearchState {
  filter: string
}

const initialState: SearchState = {
  filter: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
  },
})

export const { set } = searchSlice.actions

export const selectFilter = (state: RootState) => state.search.filter

export default searchSlice.reducer