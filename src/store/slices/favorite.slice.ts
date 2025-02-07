import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  cities: string[];
}
const loadFromLocalStorage = (): string[] => {
  const storedFavorites = localStorage.getItem('favoriteCities');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const initialState: FavoritesState = {
  cities: loadFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.cities.includes(action.payload)) {
        state.cities.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter((city) => city !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
