
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả chuyến xe search theo thời gian, search theo tuyến đường
  AllChuyenXecarhouse:[],
  dataOneCx:[],
  isloading: false,
  showPopupOk:false,
  showPopupError:false,

  
  };

  
  export const ChuyenxeofCarHouse = createSlice({
    name: "ChuyenxeofCarHouse",
    initialState,
    reducers: {
   
      getAllChuyenXeofCarHouse(state, action){
        console.log("action.payloadviewchuyenxesearch", action.payload);
        state.AllChuyenXecarhouse = action.payload  ;
       
      },
      getoneChuyenXeofCarHouse(state, action){
        state.dataOneCx = action.payload  ;
       
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
  });
  
  export const {getAllChuyenXeofCarHouse,showLoading,showPopupOk ,showPopupError,getoneChuyenXeofCarHouse} = ChuyenxeofCarHouse.actions;