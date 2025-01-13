import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    error: [],
    
};



//CREATSLICE SEAT
export const Errormessage = createSlice({
    name: "Errormessage",
    initialState,
    reducers: {
        updateError(state, action) {
            state.error = action.payload;
            console.log("eror ", state.error);
        },

    }
});

export const { updateError } = Errormessage.actions;