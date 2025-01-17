import axios from "axios";
import { logEr, logError, logOk } from "../ErrorandOK/createSlice_log";
import { updateError } from "../error/creaslice_error";
import { getonedh, storedhuse } from "./createSlice_thanhtoan";




// call api lấy thông tin chuyến xe khi nhận props từ ds cx
export function callApiPostDonHang(formData){
  return async (dispatch) => {
    try {
       dispatch(updateError())
      let res = await axios.post(`http://127.0.0.1:8000/api/orders/create/`,formData,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
          console.log('res',res);
          dispatch(logOk(true));
    } catch (error) {
      console.log(error);
      dispatch(updateError(error.response.data))
      dispatch(logEr(true));
    } finally {
      setTimeout(() => {
                     dispatch(logOk(false));
                     dispatch(logEr(false));
                 }, 3000);
             }
         };
}



/// lấy đơn hàng của user

export function callApidonhanguser(user_id){
  return async (dispatch) => {
    try {
       dispatch(updateError())
      let res = await axios.get(`http://127.0.0.1:8000/api/orders/user/${user_id}`);
          console.log('res',res);
          dispatch(storedhuse(res.data.data));
    } catch (error) {
      console.log(error);
    }}
}

/// Gọi xe để render ra đơn hàng của khách hàng 
export function callApixe(user_id){
  return async (dispatch) => {
    try {
       dispatch(updateError())
      let res = await axios.get(`http://127.0.0.1:8000/api/orders/user/${user_id}`);
          console.log('res',res);
          dispatch(storedhuse(res.data.data));
    } catch (error) {
      console.log(error);
    }}
}


//// Chỉnh sửa trạng thái đơn hàng 
export function callApiEditStatusdonhang(dh_id,data){
  return async (dispatch) => {
    try {
       dispatch(updateError())
      let res = await axios.post(`http://127.0.0.1:8000/api/orders/update/${dh_id}`,data);
          console.log('res',res);
    } catch (error) {
      console.log(error);
    }}
}


export function callApidonhangbyid(dh_id){
  return async (dispatch) => {
    try {
       dispatch(updateError())
      let res = await axios.get(`http://127.0.0.1:8000/api/orders/${dh_id}`);
          console.log('res',res);
          dispatch(getonedh(res.data.data));
    } catch (error) {
      console.log(error);
    }}
}
