import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Tất cả nhà xe
    dataCarHouse: [],
    datacarhouseone: [],
    showPopupOk:false,
    showPopupError:false,

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
       
    },
});

export const { getAllCarHouse, getOneCarHouse,showPopupOk,showPopupError } = StoreCarHouse.actions;
