import axios from "axios";
import { getAllCarHouse, getOneCarHouse } from "./createSlice-carhouse";
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

