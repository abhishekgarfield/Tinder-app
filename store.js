import { configureStore } from "@reduxjs/toolkit";
import { Store } from "react-native-navigation/lib/dist/src/components/Store";
import  userSlice  from "./Hooks/useAuth";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
