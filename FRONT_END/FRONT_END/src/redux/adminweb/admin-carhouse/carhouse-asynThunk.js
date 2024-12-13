import axios from "axios";
import { getAllCarHouse, getOneCarHouse, showPopupError, showPopupOk } from "./createSlice-carhouse";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;


// call  lấy tất cả  nhà xe 
export function CallapiGetAllCarHouse(){
    return async (dispatch) => {
      try {
     
        let res = await axios.get(`http://localhost:8000/api/carhouse/`);
        console.log("all nhà xe ",res);
      
       dispatch(getAllCarHouse(res.data.data))
      } catch (error) {
        console.log(error);
      } 
    };
  }

// call add thêm nhà xe 
export function CallapiAddCarHouse(formcarhouse){
  return async (dispatch) => {
    try {
   
      let res = await axios.post(
        `http://localhost:8000/api/carhouse/create/`,formcarhouse);
      console.log(res);

    } catch (error) {
      console.log(error);
    } 
  };
}

// call api lấy  nhà xe 
export function CallapiGetOneCarHouse(id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/carhouse/${id}`);
      console.log(res);
      dispatch(getOneCarHouse(res.data.data))

    } catch (error) {
      console.log(error);
    } 
  };
}

// call api chỉnh sửa nhà xe 
export function CallapiEditCarHouse(id,formData){
  return async (dispatch) => {
    try {
   
      let res = await axios.post(
        `http://localhost:8000/api/carhouse/update/${id}`,formData);
      console.log(res);
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

export function CallapiGetDeleteCarHouse(id) {
  return async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8000/api/carhouse/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
}