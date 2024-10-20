import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả chuyến xe search theo thời gian, search theo tuyến đường
  allChuyenXe:[],
  
  };
  export const ViewAllChuyenXe = createSlice({
    name: "",
    initialState,
    reducers: {
      getAllChuyenXeTheoTuyen(state, action){
        console.log("action.payload", action.payload);
        state.allChuyenXe = action.payload;
      }
    },
  });
  
  export const {getAllChuyenXeTheoTuyen  } = ViewAllChuyenXe.actions;