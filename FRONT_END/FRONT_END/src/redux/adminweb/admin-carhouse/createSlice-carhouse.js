import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Tất cả nhà xe
    dataCarHouse: [],
    datacarhouseone: [],
    showPopupOk:false,
    showPopupError:false,
    isloading:false,
    popupXacNhan:false,
    popupError:false,

};

export const StoreCarHouse = createSlice({
    name: 'Storecarhouse',
    initialState,
    reducers: {
        getAllCarHouse(state, action) {
            state.dataCarHouse = action.payload;
        },
        getOneCarHouse(state, action) {
            state.datacarhouseone = action.payload;
        },
        showPopupOk(state,action){
            state.showPopupOk = action.payload;
          
          },
        showPopupError(state,action){
            state.showPopupError = action.payload;
          },
          showPopupOk2(state,action){
            state.popupXacNhan = action.payload;
            console.log(">>>>>ok",state.popupXacNhan);
          },
          showPopupError2(state,action){
            state.popupError = action.payload;
            console.log(">>>>>hhhhh",state.popupError);
          },
          showLoading(state, action) {
            if (state.isloading == false) {
                state.isloading = true
            } else {
                state.isloading = false;
            }
        },
    },
});

export const { getAllCarHouse, showLoading, getOneCarHouse,showPopupOk,showPopupError,showPopupOk2,showPopupError2 } = StoreCarHouse.actions;

