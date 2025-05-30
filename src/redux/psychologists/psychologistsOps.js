import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const rootRef = ref(database);
      const snapshot = await get(rootRef);

      if (snapshot.exists()) {
        const data = snapshot.val();

        const psychologists = Array.isArray(data) ? data : Object.values(data);
        return psychologists;
      } else {
        return [];
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
