import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  ciBirthday:"",
  ciEmail:"",
  ciId: "",
  ciJoinDt: "",
  ciName: "",
  ciNickName: "",
  ciPhone: "",
  ciPwd: "",
  ciSeq: "",
  ciStatus: "",
  ciUiSeq: "",
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.ciBirthday = action.payload.ciBirthday;
      state.ciEmail = action.payload.ciEmail;
      state.ciId = action.payload.ciId;
      state.ciJoinDt = action.payload.ciJoinDt;
      state.ciName = action.payload.ciName;
      state.ciNickName = action.payload.ciNickName;
      state.ciPhone = action.payload.ciPhone;
      state.ciPwd = action.payload.ciPwd;
      state.ciSeq = action.payload.ciSeq;
      state.ciStatus = action.payload.ciStatus;
      state.ciUiSeq = action.payload.ciUiSeq;
    },
    clearUser: (state, action) => {
      state.ciBirthday ="";
      state.ciEmail = "";
      state.ciId = "";
      state.ciJoinDt = "";
      state.ciName = "";
      state.ciNickName = "";
      state.ciPhone = "";
      state.ciPwd = "";
      state.ciSeq = "";
      state.ciStatus = "";
      state.ciUiSeq = "";
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice;
