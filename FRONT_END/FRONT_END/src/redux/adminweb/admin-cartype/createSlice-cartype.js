
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả xe
      dataCarType:[],
      isloading:false,
      popupXacNhan:false,
      popupError:false,
      dataCar:[],

  // lấy loại xe 
  // lấy 1 loại xe 
     dataOneCarType:[],
      


  
  };

  
  export const StoreCarType = createSlice({
    name: "Storecartype",
    initialState,
    reducers: {
      getAllCarType(state,action){
        state.dataCarType = action.payload;
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
      getoneCarType(state,action){
        state.dataOneCarType = action.payload;
      }
      
     

    },
  });
  
  export const {getAllCarType ,showLoading,showPopupOk,showPopupError,getoneCarType } = StoreCarType.actions;



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
