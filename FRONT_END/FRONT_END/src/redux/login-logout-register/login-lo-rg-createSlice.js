
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // đăng ký 
  registerOK:false,


  
  };

  
  export const LoginLogOutRegister = createSlice({
    name: "LoginLogOutRegister",
    initialState,
    reducers: {

    // đăng ký
    postRegister(state, action) {
      console.log("action.payload", action.payload);
      state.registerOK = true;

    },
    setStatusRegister(state, action) {
      console.log("setStatusRegister", action.payload);
      state.registerOK = false;
      console.log("  state.registerOK", state.registerOK);

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
      console.log("xacs thuwcnjnjdabcjbdjbsjdbcbsdbbabdad1",action.payload);
      state.usedaxacthuc = action.payload
      state.statusXacthuc = true;
    }

  },
});
  
  export const {postRegister, postRegisterrejct, postRegisterpedding,
    setStatusRegister, postLogin, postLoginError, setLoginOK,
    setLoginError, authorization} = LoginLogOutRegister.actions;