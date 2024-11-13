import { configureStore,combineSlices  } from "@reduxjs/toolkit";
import { ViewUserSearchChuyenxe } from "../redux/viewchuyenxe/createSlice";
import { Infodropoffpoint, InfoofBus, InfoofBusHouse, InfoofCarType, Infopickuppoint } from "./info-bus/createSlice-infobus";
import { StoreCarHouse } from "./adminweb/admin-carhouse/createSlice-carhouse";

// Kết hợp các reducer
const rootReducer = combineSlices( 
  ViewUserSearchChuyenxe,
  InfoofBus,
  InfoofBusHouse,
  InfoofCarType,
  Infodropoffpoint,
  Infopickuppoint,
  //adminweb
  StoreCarHouse,
   );

export const store = configureStore({
  reducer: rootReducer,
});
