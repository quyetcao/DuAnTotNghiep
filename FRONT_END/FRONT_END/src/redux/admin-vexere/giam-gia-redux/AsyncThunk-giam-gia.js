
import axios from "axios";
import { getAllgiamgia, getOnegiamgia, showLoading, showPopupError, showPopupOk } from "./CreateSlice-giam-gia";


// call lấy tất cả xe 
export function CallapiGetAllGiamGia() {

  return async (dispatch) => {
    try {
      dispatch(showLoading(false));
      let res = await axios.get(`http://localhost:8000/api/discount-codes/`);
      console.log("all list ", res.data.data.data);
      dispatch(getAllgiamgia(res.data.data.data))
      dispatch(showLoading(true));
    } catch (error) {
      console.log(error);
    }
  };
}

//post Bài viết 
export function CallapiPostGiamGia(dataform) {
  return async (dispatch) => {
    try {

      let res = await axios.post(`http://localhost:8000/api/discount-codes/`, dataform
      );
      dispatch(showPopupOk(true));
    } catch (error) {
      console.log("erooor", error.response.data.message);
      dispatch(showPopupError(true));
    } finally {
      setTimeout(() => {
        dispatch(showPopupError(false));
        dispatch(showPopupOk(false));
      }, 3000);

    }
  };
}


//delete Event
export function CallapiGetDeleteGiamGia(id) {
  return async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8000/api/discount-codes/${id}`);
      console.log('delete xóa sự kiện', res);

    } catch (error) {
      console.log(error);
    }
  };
}

// lấy 1 loại xe để sửa 
export function CallapiGetOneEvent(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/discount-codes/${id}`);
      dispatch(getOnegiamgia(res.data.data))
    } catch (error) {
      console.log(error);
    }
  };
}

export function CallapiUpdateEvent(id,formdata) {
  return async (dispatch) => {
    try {
      let res = await axios.post(`http://localhost:8000/api/discount-codes/${id}`,formdata);
      dispatch(showPopupOk(true));
    } catch (error) {
      dispatch(showPopupError(true));
      console.log(error);
    }finally{
      setTimeout(() => {
        dispatch(showPopupError(false));
        dispatch(showPopupOk(false));
      }, 3000);
    }
  };
}

