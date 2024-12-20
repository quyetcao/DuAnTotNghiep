import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    // Tất cả nhà xe
    allbinhluan: [],
    databinhluan: [],
    isloading: false,
    popupXacNhan: false,
    popupError: false,

};

export const Storebinhluan = createSlice({
    name: 'Storebinhluan',
    initialState,
    reducers: {
        getAllBinhluan(state, action) {
            state.databinhluan = action.payload;
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
    },
})

export const { getAllBinhluan, showLoading, showPopupOk,showPopupError, popupXacNhan} = Storebinhluan.actions;
