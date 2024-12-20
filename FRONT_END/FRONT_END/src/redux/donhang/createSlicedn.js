import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allDonHang: [],
    donhangtheouser: [],
    isloading:false,
};



//CREATSLICE SEAT
export const Donhang = createSlice({
    name: "Donhang",
    initialState,
    reducers: {
        getAllDonhang(state, action) {
            state.allDonHang = action.payload;
        },
        getdonhangtheouser(state, action) {
            state.donhangtheouser = action.payload;
        },
        showLoading(state, action) {
            if (state.isloading == false) {
                state.isloading = true
            } else {
                state.isloading = false;
            }
        },

    }
});

export const { getAllDonhang,getdonhangtheouser,showLoading } = Donhang.actions;