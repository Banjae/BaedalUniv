import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    pw: "",
  },
  reducers: {
    // 로그인 되면 user store state 업데이트
    loginUser: (state, action) => {
      // action.payload 로 담겨온다.
      state.id = action.payload.id;
      state.pw = action.payload.pw;
    },
    // 로그아웃 되면 user store state 비우기
    clearUser: (state, action) => {
      state.id = "";
      state.pw = "";
    },
  },
});
export default userSlice;