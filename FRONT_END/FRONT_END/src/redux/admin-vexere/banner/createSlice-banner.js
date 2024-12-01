import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Tất cả banner
    dataBanner: [],
    dataoneBanne: [],
    isloading: false,
    popupXacNhan: false,
    popupError: false,
};

export const StoreBanner = createSlice({
    name: 'Storebanner',
    initialState,
    reducers: {
        getAllBanner(state, action) {
            console.log('=============', action.payload);
            state.dataBanner = action.payload;
        },
        getoneBanner(state, action) {
            state.dataOneBanner = action.payload;
        },
        showLoading(state,action){
            if(state.isloading == false){
            state.isloading= true
            }else{
              state.isloading=false;
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
});

export const { getAllBanner, getoneBanner, showLoading,showPopupOk,showPopupError, popupXacNhan } = StoreBanner.actions;
