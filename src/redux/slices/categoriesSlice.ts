/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../../types/category';
import {RootState} from '../store'; // Import RootState for type safety

interface CategoriesState {
  data: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  data: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Selector to get categories with colors from the store
export const selectCategories = (state: RootState) => {
  const categories = state.categories.data;
  const colors = state.colors.brand; // Get colors from the store

  return categories.map(category => ({
    ...category,
    color: colors[category.colorKey as keyof typeof colors] || '#FFFFFF', // No error here
  }));
};

// Export actions
export const {setCategories, setLoading, setError} = categoriesSlice.actions;

export default categoriesSlice.reducer;
