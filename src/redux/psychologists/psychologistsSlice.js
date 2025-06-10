import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./psychologistsOps";

const initialState = {
  items: [],
  displayedItems: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 3,
  totalItems: 0,
};

export const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState,
  reducers: {
    loadMorePsyhologists: (state) => {
      const startIndex = 0;
      const endIndex = (state.currentPage + 1) * state.itemsPerPage;
      state.displayedItems = state.items.slice(startIndex, endIndex);
      state.currentPage += 1;
    },
    resetCurrentPage: (state) => {
      state.currentPage = 1;
      state.displayedItems = state.items.slice(0, state.itemsPerPage);
    },
    updateDisplayedItems: (state, action) => {
      const sortedItems = action.payload;
      const endIndex = state.currentPage * state.itemsPerPage;
      state.displayedItems = sortedItems.slice(0, endIndex);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.totalItems = action.payload.length;
        state.displayedItems = action.payload.slice(0, state.itemsPerPage);
        state.currentPage = 1;
      })
      .addCase(fetchPsychologists.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPsychologists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { loadMorePsyhologists, resetCurrentPage, updateDisplayedItems } =
  psychologistsSlice.actions;
export default psychologistsSlice.reducer;
