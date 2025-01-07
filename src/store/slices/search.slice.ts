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
    addFavorite: (state, action: { payload: string }) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: { payload: string }) => {
      state.favorites = state.favorites.filter(
        (city) => city !== action.payload
      );
    },
  },
});

export const { setCity, setSearchResults, addFavorite, removeFavorite } = searchSlice.actions;
export default searchSlice.reducer;
