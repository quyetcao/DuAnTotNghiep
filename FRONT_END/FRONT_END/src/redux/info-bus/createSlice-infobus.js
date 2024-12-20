import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // Tất cả chuyến xe search theo thời gian, search theo tuyến đường
  infoBus: {},

  //Lấy Thông tin Tuyến Đường
  infoTuyenDuong: {},
  allTuyenDuong: [],

  // Thông tin nhà xe 
  infoBusHouse: {},

  //Thông tin loại xe
  cartype: {},

  // Dữ liệu tất cả điểm đón
  allpickuppoint: {},

  //Dữ liệu tất cả điểm trả
  alldropoffpoint: {},


  // Dữ liệu của ghế của car_id 
  seatcarid: {},


  //Dữ liệu ghế của chuyến xe lấy theo id chuyến xe
  seatcartripbycartripid: {},
  // /seat-car-trip/car-trip-id/{car-trip-id}

};


//CREATSLICE THÔNG TIN CHUYẾN XE (tuyêbs đường nămf cùng thong tin chuyến xe ) 
export const InfoofBus = createSlice({
  name: "InfoofBus",
  initialState,
  reducers: {
    getinfoChuyenXeSearch(state, action) {
      const { car_id, data } = action.payload;
      // console.log("creatslice-infobus", action.payload);
      state.infoBus = {
        ...state.infoBus,
        [car_id]: data,
      };

    },
    getinfoTuyenDuong(state, action) {
      // console.log("Tuyến Đường", action.payload);
      state.infoTuyenDuong = action.payload
    },

    getAllTuyenDuong(state, action) {
      // console.log("Tuyến Đường", action.payload);
      state.allTuyenDuong = action.payload
    },
  },
});

export const { getinfoChuyenXeSearch, getinfoTuyenDuong, getAllTuyenDuong } = InfoofBus.actions;


//CREATSLICE THÔNG TIN NHÀ XE 
export const InfoofBusHouse = createSlice({
  name: "InfoofBusHouse",
  initialState,
  reducers: {
    getinfoBusHouse(state, action) {
      const { car_id, data } = action.payload;
      // console.log("creatslice-infobusHouse", action.payload);
      state.infoBusHouse = {
        ...state.infoBusHouse,
        [car_id]: data,
      };

    },

  },
});

export const { getinfoBusHouse } = InfoofBusHouse.actions;



//CREATSLICE THÔNG TIN NHÀ XE 
export const InfoofCarType = createSlice({
  name: "InfoofCarType",
  initialState,
  reducers: {
    getinfoCarType(state, action) {
      const { car_id, data } = action.payload;
      // console.log("creatslice-CarType", action.payload);
      state.cartype = {
        ...state.cartype,
        [car_id]: data,
      };

    },

  },
});

export const { getinfoCarType } = InfoofCarType.actions;


//CREATSLICE THÔNG TIN NƠI TRẢ < THỜI GIAN ĐÓN 
export const Infodropoffpoint = createSlice({
  name: "Infodropoffpoint",
  initialState,
  reducers: {
    getinfodropoffpoint(state, action) {
      const { car_id, data } = action.payload;
      // console.log("creatslice-CarType", action.payload);
      state.alldropoffpoint = {
        ...state.alldropoffpoint,
        [car_id]: data,
      };

    },

  },
});

export const { getinfodropoffpoint } = Infodropoffpoint.actions;

//CREATSLICE THÔNG TIN NƠI ĐÓN < THỜI GIAN ĐÓN 
export const Infopickuppoint = createSlice({
  name: "Infopickuppoint",
  initialState,
  reducers: {
    getinfopickuppoint(state, action) {
      const { car_id, data } = action.payload;
      // console.log("creatslice-CarType", action.payload);
      state.allpickuppoint = {
        ...state.allpickuppoint,
        [car_id]: data,
      };

    },

  },
});

export const { getinfopickuppoint } = Infopickuppoint.actions;




//CREATSLICE SEAT
export const SeatofCarid = createSlice({
  name: "SeatofCarid",
  initialState,
  reducers: {
    getallseatcarid(state, action) {
      const { car_id, data } = action.payload;
      state.seatcarid = {
        ...state.seatcarid,
        [car_id]: data,
      };
    },

    getSeatCarTripbyCarTripId(state, action) {

      state.seatcartripbycartripid = action.payload;
    }


  }
});

export const { getallseatcarid,getSeatCarTripbyCarTripId } = SeatofCarid.actions;