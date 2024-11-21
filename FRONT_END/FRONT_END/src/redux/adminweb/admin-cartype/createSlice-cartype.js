
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