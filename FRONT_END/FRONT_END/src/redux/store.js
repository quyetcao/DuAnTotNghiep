import { configureStore,combineSlices  } from "@reduxjs/toolkit";
import { ViewUserSearchChuyenxe } from "../redux/viewchuyenxe/createSlice";
import { Infodropoffpoint, InfoofBus, InfoofBusHouse, InfoofCarType, Infopickuppoint } from "./info-bus/createSlice-infobus";
import { StoreCarHouse } from "./adminweb/admin-carhouse/createSlice-carhouse";
import { StoreCarType, StoreCar } from "./adminweb/admin-cartype/createSlice-cartype";
import { StoreArticles, StoreEventPost } from "./admin-vexere/event-post/event-post-createSlice";

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
  StoreCarType,
  StoreCar,


  //admin quản lý toàn bộ web vexere 
  StoreEventPost,
  StoreArticles,
   );

export const store = configureStore({
  reducer: rootReducer,
});
