import axios from "axios";
import { getinfoBusHouse, getinfoCarType, getinfoChuyenXeSearch, getinfodropoffpoint, getinfopickuppoint, getinfoTuyenDuong } from "./createSlice-infobus";




// call api lấy thông tin chuyến xe khi nhận props từ ds cx
export function callApiGetCar(car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/car/${car_id}`);
      let data = res.data.data;
      // console.log("infocars", data);
      dispatch(getinfoChuyenXeSearch({car_id,data}));

    } catch (error) {
      console.log(error);
    } 
  };
}


// call nhà xe 
export function callApiGetCarHouse(car_house_id,car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/carhouse/${car_house_id}`);
      let data = res.data.data;
      // console.log("nhà xe", data);
      dispatch(getinfoBusHouse({car_id,data}));

    } catch (error) {
      console.log(error); 
    } 
  };
}

//call loại xe 
export function callApiGetCarType(cartypeid,car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/cartypes/${cartypeid}`);
      let data = res.data.data;
      // console.log("thông tin loại xe ", data);
      dispatch(getinfoCarType({car_id,data}));

    } catch (error) {
      console.log(error);
    } 
  };
}

// call api điểm trả 
export function callAsbydropoffpoint(id,car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/dropoffpoint/${id}`);
      let data = res.data.data;
      // console.log("dropoffpoint", data);
      dispatch(getinfodropoffpoint({car_id,data}));

    } catch (error) {
      console.log(error);
    } 
  };
}

// call api điểm đón 
export function callAsbypickuppoint(id,car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/pickuppoint/${id}`);
      let data = res.data.data;
      // console.log("pickuppoint", data);
      dispatch(getinfopickuppoint({car_id,data}));

    } catch (error) {
      console.log(error);
    } 
  };
}

// call api tuyến đường
export function callApiTuyenDuong(car_route_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/carroute/${car_route_id}`);
      let data = res.data.data;
      console.log("áuncthunktuyenduong",data);
      dispatch(getinfoTuyenDuong({data}));

    } catch (error) {
      console.log(error);
    } 
  };
}