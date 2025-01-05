import axios from "axios";
import { postLogin, postRegister, poststRegisterError, setLoginError, setLoginOK } from "./login-lo-rg-createSlice";
import { logError } from "../ErrorandOK/createSlice_log";


export function dangkytaikhoan(dk, body) {
  return async (dispatch) => {
    if(dk == 0){
      // Chuyển hướng người dùng đến trang Google OAuth
      window.location.href = 'http://localhost:8000/auth/google'; // Đảm bảo URL này đúng với route trong Laravel của bạn
    } else if(dk == 1){
      try {
        let res = await axios.post(
          `http://localhost:8000/api/auth/signup/`, body);
        dispatch(postRegister(true));
      } catch (error) {
        dispatch(poststRegisterError(true));
        dispatch(logError(error.response.data.data));
      } finally {
        setTimeout(() => {
          dispatch(postRegister(false));
          dispatch(poststRegisterError(false));
        }, 2000);
      }
    }
  }
}


// export function dangkytaikhoan(dk,body) {
//   return async (dispatch) => {
//     if(dk == 0){
//       try {
//         let res = await axios.get(
//           `http://localhost:8000/auth/google/`);
//       } catch (error) {
//         dispatch(poststRegisterError(true));
//         dispatch(logError(error.response.data.data));
  
//       } finally {
//         setTimeout(() => {
//           dispatch(postRegister(false));
//           dispatch(poststRegisterError(false));
//         }, 2000);
//       }

//     }else if(dk == 1){
//       try {
//         let res = await axios.post(
//           `http://localhost:8000/api/auth/signup/`, body);
//         // console.log("ket qua dang ky ", res);
//         dispatch(postRegister(true));
  
//       } catch (error) {
//         // console.log("errỏr đăng ký",error.response.data.data);
//         dispatch(poststRegisterError(true));
//         dispatch(logError(error.response.data.data));
  
//       } finally {
//         setTimeout(() => {
//           dispatch(postRegister(false));
//           dispatch(poststRegisterError(false));
//         }, 2000);
//       }
//     };
//     }
  
// }

export function dangnhap(body) {
  return async (dispatch) => {
    try {
      let res = await axios.post(
        `http://localhost:8000/api/auth/login/`, body
      );
      localStorage.setItem('access_token',res.data.data.token)
      console.log("ket qua dang nhap", res);
      dispatch(postLogin(res.data.data.user))
      dispatch(setLoginOK(true));
    } catch (error) {
      console.log("error login",error);
      dispatch(setLoginError(true));
    } finally {
      setTimeout(() => {
        dispatch(setLoginError(false));
      }, 3000);
    }
  };
}
