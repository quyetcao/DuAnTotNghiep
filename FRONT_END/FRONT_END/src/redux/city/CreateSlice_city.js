import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  datacity: {},
};



//CREATSLICE SEAT
export const StoreCity = createSlice({
  name: "StoreCity",
  initialState,
  reducers: {
    getallCity(state, action) {
     state.datacity=action.payload;
  },

  
}
});

export const { getallCity } = StoreCity.actions;