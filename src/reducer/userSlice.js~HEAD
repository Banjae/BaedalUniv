import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    nickName: "",
    id: "",
    accessToken: "",
  },
  reducers: {
    loginUser: (state, action) => {
      state.nickName = action.payload.nickName;
      state.id = action.payload.id;
      state.accessToken = action.payload.accessToken;
    },
    clearUser: (state, action) => {
      state.nickName = "";
      state.id = "";
      state.accessToken = "";
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice;
