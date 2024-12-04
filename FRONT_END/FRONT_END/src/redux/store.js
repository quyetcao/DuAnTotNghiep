import { configureStore,combineSlices  } from "@reduxjs/toolkit";
import { ViewUserSearchChuyenxe } from "../redux/viewchuyenxe/createSlice";
import { Infodropoffpoint, InfoofBus, InfoofBusHouse, InfoofCarType, Infopickuppoint, SeatofCarid } from "./info-bus/createSlice-infobus";
import { StoreCarHouse } from "./adminweb/admin-carhouse/createSlice-carhouse";
import { StoreCarType, StoreCar } from "./adminweb/admin-cartype/createSlice-cartype";
import { StoreArticles, StoreEventPost } from "./admin-vexere/event-post/event-post-createSlice";
import { LoginLogOutRegister } from "./login-logout-register/login-lo-rg-createSlice";
import { StoreBanner } from "./admin-vexere/banner/createSlice-banner";


// Kết hợp các reducer
const rootReducer = combineSlices( 
  ViewUserSearchChuyenxe,
  InfoofBus,
  InfoofBusHouse,
  InfoofCarType,
  Infodropoffpoint,
  Infopickuppoint,
  //thanhtoan, hiển thị ghế 
  SeatofCarid,
  //adminweb
  StoreCarHouse,
  StoreCarType,
  StoreCar,
  


  //admin quản lý toàn bộ web vexere 
  StoreEventPost,
  StoreArticles,
  StoreBanner,


  //về tài khoản login , logout, register 
  LoginLogOutRegister,
   );

export const store = configureStore({
  reducer: rootReducer,
});
