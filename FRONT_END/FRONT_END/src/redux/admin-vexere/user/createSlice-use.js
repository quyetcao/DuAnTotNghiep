
import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    // lấy title event 
    dataUser: [],
    isloading: false,
    showPopupOk:false,
    showPopupError:false,
    dataoneEvent:[],
    // data Articles Bài viết 
    dataoneUser:[],




};


export const StoreUser = createSlice({
    name: "StoreUser",
    initialState,
    reducers: {
        getAllUser(state, action) {
            state.dataUser = action.payload;
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
          getoneUser(state,action){
            state.dataoneEvent = action.payload;
          }
    },
});

export const { getAllUser,showLoading,showPopupOk,showPopupError,getoneUser } = StoreUser.actions;


