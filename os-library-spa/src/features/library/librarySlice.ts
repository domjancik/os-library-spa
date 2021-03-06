import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import axios from '../../app/axios';

export interface ILibrary {
    uid?: string
    name: string
    repository: 'Custom' | 'RubyGems'
    downloads: number
    author: string
    uri?: string
}

interface LibrariesState {
    library: ILibrary,
    error?: string,
    loading: boolean,
}

interface Update {
    field: string,
    value: any,
}

const initialState: LibrariesState = {
  library: {
    name: '',
    repository: 'Custom',
    downloads: 0,
    author: '',
  },
  error: undefined,
  loading: false,
};

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    success: (state, action: PayloadAction<ILibrary>) => {
      state.library = action.payload;
      state.error = undefined;
      state.loading = false;
    },
    update: (state, action: PayloadAction<Update>) => {
      state.library = { ...state.library, [action.payload.field]: action.payload.value };
      state.error = undefined;
    },
    failure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  start, success, update, failure, reset,
} = librarySlice.actions;

export const fetchLibrary = (uid: string): AppThunk => (dispatch) => {
  dispatch(start());

  axios
    .get<ILibrary>(`/library/${uid}`)
    .then((response) => {
      dispatch(success(response.data));
    })
    .catch((reason) => dispatch(failure(reason.toString())));
};

/* eslint-disable no-unused-vars */
export const updateLibrary = (
  library: ILibrary,
  successCb: ((dispatch: any) => any),
): AppThunk => (dispatch) => {
  dispatch(start());

  axios
    .put(`/library/${library.uid}`, library)
    .then(() => successCb(dispatch))
    .catch((reason) => dispatch(failure(reason.toString())));
};
/* eslint-enable no-unused-vars */

/* eslint-disable no-unused-vars */
export const insertLibrary = (
  library: ILibrary,
  successCb: ((dispatch: any) => any),
): AppThunk => (dispatch) => {
  dispatch(start());

  axios
    .post('/library', library)
    .then(() => successCb(dispatch))
    .catch((reason) => dispatch(failure(reason.toString())));
};
/* eslint-enable no-unused-vars */

export const selectLibrary = (state: RootState) => state.library.library;

export default librarySlice.reducer;
