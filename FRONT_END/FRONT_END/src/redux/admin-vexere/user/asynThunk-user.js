
import axios from "axios";
import { getAllUser, showLoading } from "./createSlice-use";
import { postLogin } from "../../login-logout-register/login-lo-rg-createSlice";


// call lấy tất cả người dùng 
export function CallapiGetAllUser() {

  return async (dispatch) => {
    try {
      dispatch(showLoading(false));
      let res = await axios.get(`http://localhost:8000/api/user/`);
      console.log("all list ", res.data.data);

      dispatch(getAllUser(res.data.data))
      dispatch(showLoading(true));
    } catch (error) {
      console.log(error);
    }
  };
}

export function CallapiUpdateUser(id,formData) {

  return async (dispatch) => {
    try {
      let res = await axios.post(`http://localhost:8000/api/user/update/${id}`,formData);
    } catch (error) {
      console.log(error);
    }
  };
}

export function dangxuattaikhoan(token) {

  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/auth/logout/`,{
        headers: {
          Authorization: `Bearer ${token}`  // Gửi token trong header
        }
      });
      dispatch(postLogin([]));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
}


