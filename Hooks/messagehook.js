import { createSlice } from "@reduxjs/toolkit";

initialState = {
  message: null,
};

export const usermessageSlice = createSlice({
  name: "usermessage",
  initialState,
  reducers: {
    signin: function (state, action) {
      state.usermessage = action.payload.pull();
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { signin, logout } = usermessageSlice.actions;

export default usermessageSlice.reducer;
