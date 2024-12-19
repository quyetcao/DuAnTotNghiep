import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  dataalldonhang: {},
};



//CREATSLICE SEAT
export const StoreThanhToan = createSlice({
  name: "StoreThanhToan",
  initialState,
  reducers: {
    getalldonhang(state, action) {
     state.dataalldonhang=action.payload;
  },

  
}
});

export const { getalldonhang } = StoreThanhToan.actions;
