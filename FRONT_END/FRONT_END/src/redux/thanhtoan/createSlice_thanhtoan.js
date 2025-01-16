import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  dataalldonhang: {},
  datadhuser:[],
};



//CREATSLICE SEAT
export const StoreThanhToan = createSlice({
  name: "StoreThanhToan",
  initialState,
  reducers: {
    getalldonhang(state, action) {
     state.dataalldonhang=action.payload;
  },
    storedhuse(state, action) {
      state.datadhuser=action.payload;
   },

  
}
});

export const { getalldonhang,storedhuse } = StoreThanhToan.actions;
