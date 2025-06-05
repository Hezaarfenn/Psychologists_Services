import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import psychologistsReducer from "./psychologists/psychologistsSlice";
import filtersReducer from "./filters/filtersSlice";
import favoritesReducer from "./favorites/favoritesSlice";
import themeReducer from "./theme/themeSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isLoggedIn"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const persistFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer,
);

const themePersistConfig = {
  key: "theme",
  storage,
};

const persistThemeReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    psychologists: psychologistsReducer,
    filters: filtersReducer,
    favorites: persistFavoritesReducer,
    theme: persistThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
