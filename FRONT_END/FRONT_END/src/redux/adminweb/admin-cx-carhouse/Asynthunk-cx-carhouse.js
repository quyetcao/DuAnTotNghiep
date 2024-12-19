import axios from "axios";
import { getAllChuyenXeofCarHouse, getoneChuyenXeofCarHouse, showLoading, showPopupError, showPopupOk } from "./createSlice-cx-carhouse";






// call api khi nhận form từ người dùng gủiư lên như nơi đi nới đến và ngày đi
export function CallapiGetAllcxofCarHouse(id,page) {
    return async (dispatch) => {
      try {
        dispatch(showLoading(false));
        let res = await axios.get(`http://localhost:8000/api/cartrip/by-carhouse/${id}?page=${page}`);
        console.log("all list ", res.data.data);
        dispatch(getAllChuyenXeofCarHouse(res.data.data))
        dispatch(showLoading(true));
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function CallapiGetDeleteCxCarHouse(id) {
    return async (dispatch) => {
      try {
        let res = await axios.delete(`http://localhost:8000/api/cartrip/delete/${id}`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
  }


  export function CallapiUpdateCxCarHouse(cx_id,dataform) {
    return async (dispatch) => {
      try {
        let res = await axios.post(`http://localhost:8000/api/cartrip/update/${cx_id}`,dataform);
        dispatch(showPopupOk(true));

      } catch (error) {
        console.log("erooor", error);
        dispatch(showPopupError(true));
      } finally {
        setTimeout(() => {
          dispatch(showPopupError(false));
          dispatch(showPopupOk(false));
        }, 3000);
  
      }
    };
  }

  export function CallapiPostCxCarHouse(dataform) {
    return async (dispatch) => {
      try {
        let res = await axios.post(`http://localhost:8000/api/cartrip/create`, dataform
        );
        dispatch(showPopupOk(true));
      } catch (error) {
        console.log("erooor", error);
        dispatch(showPopupError(true));
      } finally {
        setTimeout(() => {
          dispatch(showPopupError(false));
          dispatch(showPopupOk(false));
        }, 3000);
  
      }
    };
  }

  export function CallapiGetOneCxCarHouse(id) {
    return async (dispatch) => {
      try {
        let res = await axios.get(`http://localhost:8000/api/cartrip/${id}`);
        console.log("ressss",res);
        dispatch(getoneChuyenXeofCarHouse(res.data.data));
      } catch (error) {
        console.log("erooor", error);
      } 
    };
  }