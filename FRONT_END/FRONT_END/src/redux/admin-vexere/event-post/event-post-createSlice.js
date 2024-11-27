
import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    // lấy title event 
    dataTitleEvent: [],
    isloading: false,
    showPopupOk:false,
    showPopupError:false,
    dataoneEvent:[],
    // data Articles Bài viết 
    dataAllArticles: [],
    dataoneArticles:[],




};


export const StoreEventPost = createSlice({
    name: "StoreEventPost",
    initialState,
    reducers: {
        getAllTitleEvent(state, action) {
            state.dataTitleEvent = action.payload;
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
          getoneEvent(state,action){
            state.dataoneEvent = action.payload;
          }
    },
});

export const { getAllTitleEvent,showLoading,showPopupOk,showPopupError,getoneEvent } = StoreEventPost.actions;



export const StoreArticles = createSlice({
  name: "StoreArticles",
  initialState,
  reducers: {
      getAllArticles(state, action) {
          state.dataAllArticles = action.payload;
      },
      showLoading1(state, action) {
          if (state.isloading == false) {
              state.isloading = true
          } else {
              state.isloading = false;
          }
      },
        showPopupOk1(state,action){
          state.popupXacNhan = action.payload;
          console.log(">>>>>ok",state.popupXacNhan);
        },
        showPopupError1(state,action){
          state.popupError = action.payload;
          console.log(">>>>>er",state.popupError);
        },
        getoneArticles(state,action){
          state.dataoneArticles = action.payload;
        }
  },
});

export const { getAllArticles,showLoading1,showPopupOk1,showPopupError1,getoneArticles } = StoreArticles.actions;


