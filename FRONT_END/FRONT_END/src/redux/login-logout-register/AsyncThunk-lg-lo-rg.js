import axios from "axios";
import { postRegister, poststRegisterError } from "./login-lo-rg-createSlice";




export function dangkytaikhoan(body) {
  return async (dispatch) => {
    try {
      let res = await axios.post(
        `http://localhost:8000/api/auth/signup/`, body);
      console.log("ket qua dang ky ", res);
      dispatch(postRegister(true));

    } catch (error) {
      console.log("errỏr đăng ký",error);
      dispatch(poststRegisterError(true));
    } finally {
      setTimeout(() => {
        dispatch(postRegister(false));
        dispatch(poststRegisterError(false));
      }, 3000);
    }
  };
}

// export function dangnhap(body) {
//   return async (dispatch) => {
//     try {
//       let res = await axios.post(
//         `http://localhost:3000/users/login`, body
//       );
//       localStorage.setItem('access_token',res.data.accesToken)
//       console.log("ket qua dang nhap", res);
//       dispatch(postLogin(res.data));

//     } catch (error) {
//       dispatch(postLoginError(error));
//     } finally {
//       //   dispatch(loading(false));
//     }
//   };
// }
