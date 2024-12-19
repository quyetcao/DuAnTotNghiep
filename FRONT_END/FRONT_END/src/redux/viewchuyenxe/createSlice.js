
  import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả chuyến xe search theo thời gian, search theo tuyến đường
  AllChuyenXeSearch:[],
  isLoadcx:false,
  datacartriptheoid:[],

  
  };

  
  export const ViewUserSearchChuyenxe = createSlice({
    name: "ViewChuyenXeSearch",
    initialState,
    reducers: {
      reDataCx(state,action){
        state.AllChuyenXeSearch = [];
      },
      getAllChuyenXeSearch(state, action){
        console.log("action.payloadviewchuyenxesearch", action.payload);
        state.AllChuyenXeSearch = action.payload  ;
       
      },
      changeIsLoadcx(state,action){
        if(action.payload==true){
          state.isLoadcx = action.payload
        }else{
          state.isLoadcx = action.payload
        }
     
      },
      cartriptheoid(state, action){
        state.datacartriptheoid = action.payload  ;
       
      },

    },
  });
  
  export const {getAllChuyenXeSearch,changeIsLoadcx,reDataCx,cartriptheoid} = ViewUserSearchChuyenxe.actions;