import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import psychologistsReducer from "./psychologists/psychologistsSlice";
import filtersReducer from "./filters/filtersSlice";
import favoritesReducer from "./favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    psychologists: psychologistsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
