
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // đăng ký 
  registerOK: false,
  registerError: false,
  //---------Đăng nhập-----
  infoUser: [],
  loginError: false,
  loginOK: false,
  //--------Xác thực-------
  statusXacthuc: false,
  usedaxacthuc: {},
  //----------đã đăng nhập-----
  isAuthentication: false,


};


export const LoginLogOutRegister = createSlice({
  name: "LoginLogOutRegister",
  initialState,
  reducers: {

    // đăng ký
    postRegister(state, action) {
      state.registerOK = action.payload;
    },
    poststRegisterError(state, action) {
      state.registerError = action.payload;
    },
    postRegisterpedding(state, action) {
      console.log("action.payload", action.payload);

    },
    postRegisterrejct(state, action) {
      console.log("action.payload", action.payload);

    },

    //------------------------------đăng nhập-------------------------------------------

    postLogin(state, action) {
      state.infoUser = action.payload;
      console.log("infoUser>>>>>>>", state.infoUser);
    },


    setLoginOK(state, action) {
      state.loginOK = action.payload;
      state.isAuthentication = action.payload;
    },
    setLoginError(state, action) {
      state.loginError = action.payload;
    },
    postLoginError(state, action) {
      state.loginError = action.payload;
    },
    authorization(state, action) {
      console.log("xacs thuwcnjnjdabcjbdjbsjdbcbsdbbabdad1", action.payload);
      state.usedaxacthuc = action.payload
      state.statusXacthuc = true;
    }

  },
});

export const { postRegister, poststRegisterError, postRegisterrejct, postRegisterpedding,
  setStatusRegister, postLogin, postLoginError, setLoginOK,
  setLoginError, authorization } = LoginLogOutRegister.actions;