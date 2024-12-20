import axios from "axios";
import { getAllBinhluan, showLoading } from "./binhluan-createSlide";
import { showPopupError1, showPopupOk1 } from "../admin-cartype/createSlice-cartype";


// call lấy tất binhluan
export function CallapiGetAllBinhLuan() {
    return async (dispatch) => {
      try {
        dispatch(showLoading(false));
        let res = await axios.get(`http://localhost:8000/api/comment/`);
        dispatch(getAllBinhluan(res.data.data))
        dispatch(showLoading(true));
      } catch (error) { 
        console.log(error);
      }
    };
  }

  export function CallapiPostBinhLuan(dataform) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/comment/create`, dataform);
            console.log('all comment ', res);

            dispatch(showPopupOk1(true));
        } catch (error) {
            console.log('erooor', error);
            dispatch(showPopupError1(true));
        } finally {
            setTimeout(() => {
                dispatch(showPopupError1(false));
                dispatch(showPopupOk1(false));
            }, 3000);
        }
    };
}

  //delete binhluan
export function CallapiGetDeleteBinhLuan(id) {
    return async (dispatch) => {
        try {
            let res = await axios.delete(`http://localhost:8000/api/comment/${id}`);
        } catch (error) {
            console.log(error);
        }
    };
}