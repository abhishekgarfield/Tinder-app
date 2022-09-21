import { configureStore } from "@reduxjs/toolkit";
import { Store } from "react-native-navigation/lib/dist/src/components/Store";
import userSlice from "./Hooks/useAuth";
import loaderSlice from "./Hooks/loading";

export const store = configureStore({
  reducer: {
    user: userSlice,
    loader:loaderSlice
  },
});
