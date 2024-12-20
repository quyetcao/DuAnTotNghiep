import { configureStore,combineSlices  } from "@reduxjs/toolkit";
import { ViewUserSearchChuyenxe } from "../redux/viewchuyenxe/createSlice";
import { Infodropoffpoint, InfoofBus, InfoofBusHouse, InfoofCarType, Infopickuppoint, SeatofCarid } from "./info-bus/createSlice-infobus";
import { StoreCarHouse } from "./adminweb/admin-carhouse/createSlice-carhouse";
import { StoreCarType, StoreCar } from "./adminweb/admin-cartype/createSlice-cartype";
import { StoreArticles, StoreEventPost } from "./admin-vexere/event-post/event-post-createSlice";
import { LoginLogOutRegister } from "./login-logout-register/login-lo-rg-createSlice";
import { StoreBanner } from "./admin-vexere/banner/createSlice-banner";
import { StoreUser } from "./admin-vexere/user/createSlice-use";
import { StoreDiemDonCarHouse, StoreDiemTraCarHouse } from "./adminweb/admin-diem-don-tra/creat-Slice-diem-don-tra";
import { StoreGiamGia } from "./admin-vexere/giam-gia-redux/CreateSlice-giam-gia";
import { ChuyenxeofCarHouse } from "./adminweb/admin-cx-carhouse/createSlice-cx-carhouse";
import { StorEmmployee } from "./adminweb/nhanvienlaixe/createSlice-nvlx";
import { StoreCity } from "./city/CreateSlice_city";
import { StoreThanhToan } from "./thanhtoan/createSlice_thanhtoan";
import { MessageError } from "./ErrorandOK/createSlice_log";
import { Donhang } from "./donhang/createSlicedn";


// Kết hợp các reducer
const rootReducer = combineSlices( 
  MessageError,
  StoreCity,
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
  StoreGiamGia,

  //admin nhà xe 
  ChuyenxeofCarHouse,
  StorEmmployee,
  SeatofCarid,


  //về tài khoản login , logout, register 
  LoginLogOutRegister,
  StoreUser,

  //Diểmd đón trả của từng nhà xe 
  StoreDiemDonCarHouse,
  StoreDiemTraCarHouse,


  //Thanh toán 
  StoreThanhToan,
  Donhang,
   );

export const store = configureStore({
  reducer: rootReducer,
});
