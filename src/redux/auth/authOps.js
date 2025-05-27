import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredentials.user;

      await updateProfile(user, { displayName: name });

      toast.success("Registration successful!");

      return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredentials.user;
      if (user) {
        toast.success("Logged in successfuly!");
      }
      return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
