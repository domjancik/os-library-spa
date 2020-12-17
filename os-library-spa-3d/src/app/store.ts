import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import librariesReducer from '../features/libraries/librariesSlice';
import libraryReducer from '../features/library/librarySlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    libraries: librariesReducer,
    search: searchReducer,
    library: libraryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
