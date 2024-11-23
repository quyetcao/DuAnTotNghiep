
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả xe
      dataCarType:[],
      dataCar:[],


  
  };

  
  export const StoreCarType = createSlice({
    name: "Storecartype",
    initialState,
    reducers: {
      getAllCarType(state,action){
        state.dataCarType = action.payload;
      },
      
     

    },
  });
  
  export const {getAllCarType } = StoreCarType.actions;



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