import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả chuyến xe search theo thời gian, search theo tuyến đường
  infoBus:{},

  
  };

  
  export const InfoofBus = createSlice({
    name: "InfoofBus",
    initialState,
    reducers: {
      getinfoChuyenXeSearch(state, action){
        const { car_id, data } = action.payload; 
        console.log("creatslice-infobus", action.payload);
        state.infoBus = {
            ...state.infoBus,
            [car_id]: data, 
        };
  
      },
      


    },
  });
  
  export const {getinfoChuyenXeSearch } = InfoofBus.actions;