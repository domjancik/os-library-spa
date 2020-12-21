import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { prop, max } from 'lodash/fp';
import { AppThunk, RootState } from '../../app/store';
import axios from '../../app/axios';

import { ILibrary } from '../library/librarySlice';

interface LibrariesState {
    libraries?: ILibrary[],
    loading: boolean
    error?: string
    maxDownloads: number,
}

const initialState: LibrariesState = {
  libraries: undefined,
  loading: false,
  maxDownloads: 0,
  error: undefined,
};

export const librariesSlice = createSlice({
  name: 'libraries',
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    success: (state, action: PayloadAction<ILibrary[]>) => {
      state.libraries = action.payload;
      state.error = undefined;
      state.maxDownloads = max(action.payload.map(prop('downloads')))!;
    },
    failure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { start, success, failure } = librariesSlice.actions;

export const fetchLibraries = (): AppThunk => (dispatch) => {
  dispatch(start());

  axios
    .get<ILibrary[]>('/libraries')
    .then((response) => {
      dispatch(success(response.data));
    })
    .catch((reason) => dispatch(failure(reason.toString())));
};

export const deleteLibrary = (uid: string): AppThunk => (dispatch) => {
  dispatch(start());

  axios
    .delete(`/library/${uid}`)
    .then(() => dispatch(fetchLibraries()))
    .catch((reason) => dispatch(failure(reason.toString())));
};

export const selectLibraries = (state: RootState) => state.libraries.libraries;
export const selectMaxDownloads = (state: RootState) => state.libraries.maxDownloads;

export default librariesSlice.reducer;
