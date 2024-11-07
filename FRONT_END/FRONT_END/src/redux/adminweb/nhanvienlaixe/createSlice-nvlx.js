
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả xe
    
      isloading:false,
      popupXacNhan:false,
      popupError:false,
      datanvlx:[],
      datanvlxcarhouseid:[],

  // lấy loại xe 
  // lấy 1 loại xe 
     dataOnenvlx:[],

      


  
  };

  
  export const StorEmmployee = createSlice({
    name: "StorEmmployee",
    initialState,
    reducers: {
      getAllnv(state,action){
        state.datanvlx = action.payload;
      },
      getAllnvtheonhaxe(state,action){
        state.datanvlxcarhouseid = action.payload;
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
      getonenvlx(state,action){
        state.dataOnenvlx = action.payload;
      }
      
     

    },
  });
  
  export const {getAllnv ,showLoading,showPopupOk,showPopupError,getAllnvtheonhaxe,getonenvlx } = StorEmmployee.actions;

