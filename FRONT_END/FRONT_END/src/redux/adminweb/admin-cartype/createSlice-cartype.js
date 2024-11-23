
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả xe
      dataCarType:[],
      isloading:false,
      popupXacNhan:false,
      dataCar:[],
      


  
  };

  
  export const StoreCarType = createSlice({
    name: "Storecartype",
    initialState,
    reducers: {
      getAllCarType(state,action){
        state.dataCarType = action.payload;
      },
      showLoading(state,action){
        if(state.isloading==true){
        state.isloading= action.payload
        }else{
          state.isloading=true;
        }
      },
      showPopupOkanhError(state,action){
        state.popupXacNhan =action.payload;
      }
      
     

    },
  });
  
  export const {getAllCarType ,showLoading,showPopupOkanhError } = StoreCarType.actions;