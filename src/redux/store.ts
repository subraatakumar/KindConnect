import {configureStore} from '@reduxjs/toolkit';
import {colorsSlice, configSlice} from '@redux/slices';
import categoriesReducer from '@redux/slices/categoriesSlice';
import dimSlice from '@redux/slices/dimSlice';

export const store = configureStore({
  reducer: {
    colors: colorsSlice,
    configs: configSlice,
    categories: categoriesReducer,
    dim: dimSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
