
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dataAllgiamgia:[],
    isloading: false,
    showPopupOk:false,
    showPopupError:false,
    dataoneGiamgia:[],
    dagiamgia:[],
};


export const StoreGiamGia = createSlice({
    name: "StoreGiamGia",
    initialState,
    reducers: {
        getAllgiamgia(state, action) {
            state.dataAllgiamgia = action.payload;
        },
        showLoading(state, action) {
            if (state.isloading == false) {
                state.isloading = true
            } else {
                state.isloading = false;
            }
        },
          showPopupOk(state,action){
            state.popupXacNhan = action.payload;
            console.log(">>>>>ok",state.popupXacNhan);
          },
          showPopupError(state,action){
            state.popupError = action.payload;
            console.log(">>>>>er",state.popupError);
          },
          getOnegiamgia(state,action){
            state.dataoneGiamgia = action.payload;
          },
          dagiamgia(state,action){
            state.dagiamgia = action.payload;
          },
    },
});

export const { getAllgiamgia,showLoading,showPopupOk,showPopupError,getOnegiamgia,dagiamgia} = StoreGiamGia.actions;

