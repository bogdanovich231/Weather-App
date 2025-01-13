import { createSlice } from '@reduxjs/toolkit';

const initialState: { city: string; favorites: string[]; searchResults: string[] } = {
  city: '',
  favorites: [],
  searchResults: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setCity, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
