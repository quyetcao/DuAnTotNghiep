
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // đăng ký 
  registerOK: false,
  registerError:false,
  //---------Đăng nhập-----
  infoUser: [],
  loginError: false,
  loginOK: false,
  //--------Xác thực-------
  statusXacthuc: false,
  usedaxacthuc: {},


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
      console.log("action.payload.loginok", action.payload);
      state.infoUser = action.payload;
      console.log("infouse", state.infoUser);
      state.loginOK = true;
    },


    setLoginOK(state, action) {
      console.log("action.payload.setLoginOK", action.payload);
      state.loginOK = false;
    },
    setLoginError(state, action) {
      console.log("action.payload.setLoginError", action.payload);
      state.loginError = false;
    },
    postLoginError(state) {
      state.loginError = true;
    },
    authorization(state, action) {
      console.log("xacs thuwcnjnjdabcjbdjbsjdbcbsdbbabdad1", action.payload);
      state.usedaxacthuc = action.payload
      state.statusXacthuc = true;
    }

  },
});

export const { postRegister,poststRegisterError, postRegisterrejct, postRegisterpedding,
  setStatusRegister, postLogin, postLoginError, setLoginOK,
  setLoginError, authorization } = LoginLogOutRegister.actions;