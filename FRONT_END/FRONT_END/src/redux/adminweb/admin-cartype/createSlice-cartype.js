
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả xe
    
      isloading:false,
      popupXacNhan:false,
      popupError:false,
      dataCar:[],
      dataCarofcarhouseid:[],
      dataoneCarofCarHouse:[],

  // lấy loại xe 
  // lấy 1 loại xe 
     dataOneCarType:[],
     dataCarType:[],
     dataCarTypenopt:[],
      


  
  };

  
  export const StoreCarType = createSlice({
    name: "Storecartype",
    initialState,
    reducers: {
      getAllCarType(state,action){
        state.dataCarType = action.payload;
      },
      getAllCarTypenopt(state,action){
        state.dataCarTypenopt = action.payload;
      },
      showLoading(state,action){
        if(state.isloading == false){
        state.isloading= true
        }else{
          state.isloading=false;
        }
      },
      showPopupOk(state,action){
        state.popupXacNhan = action.payload;
        console.log(">>>>>ok",state.popupXacNhan);
      },
      showPopupError(state,action){
        state.popupError = action.payload;
        console.log(">>>>>er",state.popupError);
      },
      getoneCarType(state,action){
        state.dataOneCarType = action.payload;
      }
      
     

    },
  });
  
  export const {getAllCarType ,showLoading,showPopupOk,showPopupError,getoneCarType,getAllCarTypenopt } = StoreCarType.actions;


//// Xe của nhà xe 
  export const StoreCar = createSlice({
    name: "StoreCar",
    initialState,
    reducers: {
      getAllListCar(state,action){
        state.dataCar = action.payload;
      },
      getAllListCarbyCarHouseID(state,action){
        state.dataCarofcarhouseid=action.payload;
      },
      getoneCarofCarHouse(state,action){
        state.dataoneCarofCarHouse = action.payload;
      },
      showPopupOk1(state,action){
        state.popupXacNhan = action.payload;
        console.log(">>>>>ok",state.popupXacNhan);
      },
      showPopupError1(state,action){
        state.popupError = action.payload;
        console.log(">>>>>er",state.popupError);
      },
     

    },
  });
  
  export const {getAllListCar ,getoneCarofCarHouse,showPopupOk1,showPopupError1,getAllListCarbyCarHouseID} = StoreCar.actions;
