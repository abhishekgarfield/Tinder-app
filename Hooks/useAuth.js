import { createSlice } from "@reduxjs/toolkit";

initialState = {
  userinfo: null,
};

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers: {
    signin: function (state, action) {
      console.log("HERE");
      state.userinfo = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {signin,logout}=userSlice.actions;

export default userSlice.reducer;