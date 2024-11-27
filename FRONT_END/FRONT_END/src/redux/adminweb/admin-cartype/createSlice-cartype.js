
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
  
  export const {getAllCarType, showLoading, showPopupOkanhError } = StoreCarType.actions;



  export const StoreCar = createSlice({
    name: "StoreCar",
    initialState,
    reducers: {
      getAllListCar(state,action){
        // console.log('dhdhdhdh',action.payload);
        state.dataCar = action.payload;
        // console.log('7384732847384748',state.dataCar);
      },
      
     

    },
  });
  
  export const {getAllListCar } = StoreCar.actions;
