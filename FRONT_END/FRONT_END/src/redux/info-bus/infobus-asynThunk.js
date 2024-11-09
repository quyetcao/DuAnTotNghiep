import axios from "axios";
import { getinfoChuyenXeSearch } from "./createSlice-infobus";




// call api lấy thông tin chuyến xe khi nhận props từ ds cx
export function callApiGetCarType(car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/car/${car_id}`);
      let data = res.data.data;
      console.log("infocars", data);
      dispatch(getinfoChuyenXeSearch({car_id,data}));

    } catch (error) {
      console.log(error);
    } 
  };
}

export function callAsbydropoffpoint(car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/car/${car_id}`);
      let data = res.data.data;
      console.log("infocars", data);
      dispatch(getinfoChuyenXeSearch({car_id,data}));

    } catch (error) {
      console.log(error);
    } 
  };
}

export function callAsbypickuppoint(car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/car/${car_id}`);
      let data = res.data.data;
      console.log("infocars", data);
      dispatch(getinfoChuyenXeSearch({car_id,data}));

    } catch (error) {
      console.log(error);
    } 
  };
}