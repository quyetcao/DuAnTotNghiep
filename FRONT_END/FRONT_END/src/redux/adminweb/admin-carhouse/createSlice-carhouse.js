
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả nhà xe
  dataCarHouse:[],


  
  };

  
  export const StoreCarHouse = createSlice({
    name: "Storecarhouse",
    initialState,
    reducers: {
      getAllCarHouse(state,action){
        state.dataCarHouse = action.payload;
      },
     

    },
  });
  
  export const {getAllCarHouse } = StoreCarHouse.actions;