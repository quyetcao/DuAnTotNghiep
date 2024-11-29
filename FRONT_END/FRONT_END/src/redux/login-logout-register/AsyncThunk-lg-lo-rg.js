import axios from "axios";
import { postRegister } from "./login-lo-rg-createSlice";




export function dangkytaikhoan(body) {
  return async (dispatch) => {
    try {
      let res = await axios.post(
        `http://localhost:3000/api/auth/signup`, body
      );
      console.log("ket qua dang ky ", res);
      dispatch(postRegister(res));

    } catch (error) {
      dispatch(postRegisterrejct(error));
    } finally {
      //   dispatch(loading(false));
    }
  };
}

export function dangnhap(body) {
  return async (dispatch) => {
    try {
      let res = await axios.post(
        `http://localhost:3000/users/login`, body
      );
      localStorage.setItem('access_token',res.data.accesToken)
      console.log("ket qua dang nhap", res);
      dispatch(postLogin(res.data));

    } catch (error) {
      dispatch(postLoginError(error));
    } finally {
      //   dispatch(loading(false));
    }
  };
}
