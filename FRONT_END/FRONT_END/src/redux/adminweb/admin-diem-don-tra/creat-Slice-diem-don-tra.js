
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // list danh sách điểm đón 
    //>> điểm đón của nhà xe
    datadiemdonofcarhouse: [],
    dataoneDiemDon:[],
    isloading: false,
    popupXacNhan: false,
    popupError: false,
    ///>> điểm trả của nhà xe 
    datadiemtraofcarhouse: [],
    dataoneDiemTra:[],
};


export const StoreDiemDonCarHouse = createSlice({
    name: "StoreDiemDonCarHouse",
    initialState,
    reducers: {
        getAllDiemDoncarhouse(state, action) {
            state.datadiemdonofcarhouse = action.payload;
        },
        getAllOneDiemDoncarhouse(state, action) {
            console.log("act>>>", action.payload);
            state.dataoneDiemDon = action.payload;
        },
        

        showLoading(state, action) {
            if (state.isloading == false) {
                state.isloading = true
            } else {
                state.isloading = false;
            }
        },
        showPopupOk(state, action) {
            state.popupXacNhan = action.payload;
            console.log(">>>>>ok", state.popupXacNhan);
        },
        showPopupError(state, action) {
            state.popupError = action.payload;
            console.log(">>>>>er", state.popupError);
        },




    },
});

export const { getAllDiemDoncarhouse,getAllOneDiemDoncarhouse, showLoading, showPopupOk, showPopupError } = StoreDiemDonCarHouse.actions;



///////Điểm trả 
export const StoreDiemTraCarHouse = createSlice({
    name: "StoreDiemTraCarHouse",
    initialState,
    reducers: {
        getAllDiemTracarhouse(state, action) {
            state.datadiemtraofcarhouse = action.payload;
        },
        getAllOneDiemTracarhouse(state, action) {
            console.log("act>>>", action.payload);
            state.dataoneDiemTra = action.payload;
        },
        

        showLoading1(state, action) {
            if (state.isloading == false) {
                state.isloading = true
            } else {
                state.isloading = false;
            }
        },
        showPopupOk1(state, action) {
            state.popupXacNhan = action.payload;
            console.log(">>>>>ok", state.popupXacNhan);
        },
        showPopupError1(state, action) {
            state.popupError = action.payload;
            console.log(">>>>>er", state.popupError);
        },




    },
});

export const { getAllDiemTracarhouse,getAllOneDiemTracarhouse, showLoading1, showPopupOk1, showPopupError1 } = StoreDiemTraCarHouse.actions;

