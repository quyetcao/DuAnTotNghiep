import { configureStore,combineSlices  } from "@reduxjs/toolkit";
import { ViewUserSearchChuyenxe } from "../redux/viewchuyenxe/createSlice";
import { InfoofBus } from "./info-bus/createSlice-infobus";

// Kết hợp các reducer
const rootReducer = combineSlices( 
  ViewUserSearchChuyenxe,
  InfoofBus,
   );

export const store = configureStore({
  reducer: rootReducer,
});
