import { createSlice } from "@reduxjs/toolkit";

export const sortPsychologists = (data = [], sortOption) => {
  const sorted = [...data];

  switch (sortOption) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating-asc":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "rating-desc":
      return sorted.sort((a, b) => a.rating - b.rating);
    case "show-all":
    default:
      return data;
  }
};

const initialState = {
  sortOption: "show-all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    resetFilters: (state) => {
      state.sortOption = "show-all";
    },
  },
});

export const { setSortOption, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
