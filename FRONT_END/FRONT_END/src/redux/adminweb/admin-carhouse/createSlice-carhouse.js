import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Tất cả nhà xe
    dataCarHouse: [],
    datacarhouseone: [],
    showPopupOk:false,
    showPopupError:false,
    isloading:false,
    popupXacNhan:false,
    popupError:false,

};

export const StoreCarHouse = createSlice({
    name: 'Storecarhouse',
    initialState,
    reducers: {
        getAllCarHouse(state, action) {
            state.dataCarHouse = action.payload;
        },
        getOneCarHouse(state, action) {
            state.datacarhouseone = action.payload;
        },
        showPopupOk(state,action){
            state.showPopupOk = action.payload;
          
          },
        showPopupError(state,action){
            state.showPopupError = action.payload;
          },
       
    },
});

export const { getAllCarHouse, getOneCarHouse,showPopupOk,showPopupError } = StoreCarHouse.actions;


export const StoreAddCarHouse = createSlice({
    name: "StoreCar",
    initialState,
    reducers: {
    //   getAllCarHouse(state,action){
    //     state.dataCar = action.payload;
    //   },
    //   getoneCarofCarHouse(state,action){
    //     state.dataoneCarofCarHouse = action.payload;
    //   },
      showPopupOk2(state,action){
        state.popupXacNhan = action.payload;
        console.log(">>>>>ok",state.popupXacNhan);
      },
      showPopupError2(state,action){
        state.popupError = action.payload;
        console.log(">>>>>hhhhh",state.popupError);
      },
     

    },
  });

    export const {showPopupOk2,showPopupError2} = StoreAddCarHouse.actions;
  