import axios from "axios";

import { getAllDonhang, getdonhangtheouser, showLoading, thanhtoanok } from "./createSlicedn";
import { Navigate, useNavigate } from "react-router-dom";



// call api don hang 
export function callApigetAlldonhang() {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));
            let res = await axios.get(`http://127.0.0.1:8000/api/orders/`);
            console.log("donhang",res);
            dispatch(getAllDonhang(res.data.data.data));
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
            let res = await axios.get(`http://localhost:8000/api/orders/user/${id}`);
            console.log(res.data.data.data );
            dispatch(getdonhangtheouser(res.data.data.data ));
        } catch (error) {
            console.log(error);
        } 
    };
}

////////////////////////////tạo payment , thanh toán 

export function postthanhtoan(formData) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/payment/create/`, formData);
            console.log(res);
            thanhtoanok(true);
        } catch (error) {
            console.log(error);
   
        }
    };
}


export function postthanhtoanbynganhang(formData) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/create-vnpay-payment`, formData);
            console.log(res);
            // thanhtoanok(true);
            if(
                res.status == 200
            ){
                window.location.href =`${res.data.data.payment_url}`;
            }
        } catch (error) {
            console.log(error);
   
        }
    };
}

