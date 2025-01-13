import axios from "axios";
import { getAllChuyenXeofCarHouse, getoneChuyenXeofCarHouse, showLoading, showPopupError, showPopupOk } from "./createSlice-cx-carhouse";
import { updateError } from "../../error/creaslice_error";






// call api khi nhận form từ người dùng gủiư lên như nơi đi nới đến và ngày đi
export function CallapiGetAllcxofCarHouse(id) {
    return async (dispatch) => {
      try {
        dispatch(showLoading(false));
        let res = await axios.get(`http://localhost:8000/api/car-trip/take-by/car-house/${id}`);
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
        let res = await axios.delete(`http://localhost:8000/api/car-trip/${id}`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function CallapiUpdateCxCarHouse(cx_id, dataform) {
    return async (dispatch) => {
      try {
        dispatch(updateError());
        let res = await axios.post(`http://localhost:8000/api/car-trip/${cx_id}`, dataform, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        // Chỉ hiển thị thành công khi phản hồi là 200
        if (res.status === 200) {
          dispatch(showPopupOk(true));
        }
  
      } catch (error) {
        // Kiểm tra error.response để tránh lỗi khi không có response
        if (error.response) {
          dispatch(updateError(error.response.data));
        } else {
          dispatch(updateError({ message: 'An unknown error occurred' }));
        }
  
        console.log("error", error);
        dispatch(showPopupError(true));
  
      } finally {
        // Đảm bảo popup đóng sau 3s
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
        let res = await axios.post(`http://localhost:8000/api/car-trip/`, dataform
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
        let res = await axios.get(`http://localhost:8000/api/car-trip/${id}`);
        console.log("ressss",res);
        dispatch(getoneChuyenXeofCarHouse(res.data.data));
      } catch (error) {
        console.log("erooor", error);
      } 
    };
  }