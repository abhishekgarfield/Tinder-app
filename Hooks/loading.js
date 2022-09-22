import { createSlice } from "@reduxjs/toolkit";

initialState = {
  isloading: false,
};

export const loadSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    isloading: function (state, action) {
      state.isloading = action.payload;
    },
  },
});

export const { isloading } = loadSlice.actions;

export default loadSlice.reducer;
