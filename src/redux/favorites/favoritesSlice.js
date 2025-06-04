import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesPsychologists: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const psychologist = action.payload;

      const exists = state.favoritesPsychologists.find(
        (item) => item.id === psychologist.id,
      );

      if (!exists) {
        state.favoritesPsychologists.push(psychologist);
      }
    },
    removeFromFavorites: (state, action) => {
      const psychologistId = action.payload;
      state.favoritesPsychologists = state.favoritesPsychologists.filter(
        (item) => item.id !== psychologistId,
      );
    },
    toggleFavorite: (state, action) => {
      const psychologist = action.payload;
      const existingIndex = state.favoritesPsychologists.findIndex(
        (item) => item.id === psychologist.id,
      );

      if (existingIndex >= 0) {
        state.favoritesPsychologists.splice(existingIndex, 1);
      } else {
        state.favoritesPsychologists.push(psychologist);
      }
    },
    clearFavorites: (state) => {
      state.favoritesPsychologists = [];
    },
  },
});

export const selectFavorites = (state) =>
  state.favorites.favoritesPsychologists;
export const selectIsFavorite = (state, psychologistId) =>
  state.favorites.favoritesPsychologists.some(
    (item) => item.id === psychologistId,
  );

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearFavorites,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
