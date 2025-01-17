import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  dataalldonhang: {},
  datadhuser:[],
  dataonedh:[],
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
   getonedh(state, action) {
    state.dataonedh=action.payload;
 },

  
}
});

export const { getalldonhang,storedhuse,getonedh } = StoreThanhToan.actions;
