import axios from "axios";

import { getAllDonhang, showLoading } from "./createSlicedn";



// call api don hang 
export function callApigetAlldonhang() {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));
            let res = await axios.get(`http://127.0.0.1:8000/api/orders/`);
            console.log("donhang",res);
            dispatch(getAllDonhang(res.data));
            dispatch(showLoading(true));
        } catch (error) {
            console.log(error);
        }
    };
}

// export function callApigetAlldonhang(){
//     return async (dispatch) => {
//       try {

//         let res = await axios.get(`http://127.0.0.1:8000/api/orders/`);
//         dispatch(getAllDonhang(res.data));

//       } catch (error) {
//         console.log(error);
//       } 
//     };
//   }

export function callApigetAlldonhangtheouser(id) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/carhouse/update/${id}`, formData);
            console.log(res);
            dispatch(showPopupOk(true));
        } catch (error) {
            dispatch(showPopupError(true));
            console.log(error);
        } finally {
            setTimeout(() => {
                dispatch(showPopupError(false));
                dispatch(showPopupOk(false));
            }, 3000);
        }
    };
}
