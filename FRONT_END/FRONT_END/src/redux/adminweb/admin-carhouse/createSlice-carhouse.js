import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Tất cả nhà xe
    dataCarHouse: [],
    datacarhouseone: [],
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
    },
});

export const { getAllCarHouse, getOneCarHouse } = StoreCarHouse.actions;
