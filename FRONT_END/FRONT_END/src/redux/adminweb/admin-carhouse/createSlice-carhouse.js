import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Tất cả nhà xe
    dataCarHouse: [],
    datacarhouseone: [],
    dataBanner: [],

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

        getAllBanner(state, action) {
            state.dataBanner = action.payload;
        },
    },
});

export const { getAllCarHouse, getOneCarHouse, getAllBanner } = StoreCarHouse.actions;
