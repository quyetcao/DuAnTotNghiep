import { configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";


// import { CategorysSlice, ChiPhiHangNgaySlice, DsngaySlice, HandleRegister, HanmuchiSLice, UserSlice } from "./createSlice";

export const rootReducer = combineSlices();

export const store = configureStore({
  reducer: rootReducer,
});
