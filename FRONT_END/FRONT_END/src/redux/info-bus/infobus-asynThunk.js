import axios from "axios";
import { getAllseatbycarid, getallseatcarid, getAllTuyenDuong, getinfoBusHouse, getinfoCarType, getinfoChuyenXeSearch, getinfodropoffpoint, getinfopickuppoint, getinfoTuyenDuong, getonecxdetaodon, getSeatCarTripbyCarTripId } from "./createSlice-infobus";




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
        `http://localhost:8000/api/car-house/${car_house_id}`);
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
        `http://localhost:8000/api/car-type/${cartypeid}`);
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




///////////////////////////// call api tuyến đường
export function callApiTuyenDuong(car_route_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/car-route/${car_route_id}`);
      let data = res.data.data;
      dispatch(getinfoTuyenDuong({data}));

    } catch (error) {
      console.log(error);
    } 
  };
}

export function callApiListTuyenDuongAll(){
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/car-route/`);
      let data = res.data.data.data;
      console.log("tuyenduong",res);
      dispatch(getAllTuyenDuong(data));

    } catch (error) {
      console.log(error);
    } 
  };
}

///////Phần ghế 
export function callApiSeat(car_id){
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/seat/${car_id}`);
      let data = res.data.data;
      console.log("all ghế theo carid",data);
      dispatch(getallseatcarid({car_id,data}));
    } catch (error) {
      console.log(error);
    } 
  };
}

export function editseatcartrip(seat_id,seat){
  return async (dispatch) => {
    try {
      let res = await axios.post(`http://localhost:8000/api/seat-car-trip/${seat_id}`,seat);
      // let data = res.data.data;
      // console.log("all ghế theo carid",data);
      // dispatch(getallseatcarid({car_id,data}));
    } catch (error) {
      console.log(error);
    } 
  };
}

export function callApiSeatCarTripByCarTripId(car_trip_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/seat-car-trip/car-trip-id/${car_trip_id}`);
      let data = res.data.data;
      console.log("all ghế theo cartripid",data);
      dispatch(getSeatCarTripbyCarTripId(data));
    } catch (error) {
      console.log(error);
    } 
  };
}


export function getAllseatcartripbycartripid(car_trip_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/seat-car-trip/car-trip-id/${car_trip_id}`);
      let data = res.data.data;
      console.log("all ghế theo cartripid",res);
      dispatch(getAllseatbycarid(data));
    } catch (error) {
      console.log(error);
    } 
  };
}

export function getAllseatcartripbycarid(car_id){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(
        `http://localhost:8000/api/car-trip/${car_id}`);
      let data = res.data.data;
      // console.log("all ghế theo cartripid",res);
      dispatch(getonecxdetaodon(data));
    } catch (error) {
      console.log(error);
    } 
  };
}