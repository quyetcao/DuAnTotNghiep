import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  error: [],
};



//CREATSLICE SEAT
export const MessageError = createSlice({
  name: "MessageError",
  initialState,
  reducers: {
    logError(state, action) {
     state.error=action.payload;
  },

  
}
});

export const { logError } = MessageError.actions;