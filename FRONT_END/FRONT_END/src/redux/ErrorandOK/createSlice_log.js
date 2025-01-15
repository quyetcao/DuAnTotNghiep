import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  error: [],
  logOk: false,
  logErr: false,
};



//CREATSLICE SEAT
export const MessageError = createSlice({
  name: "MessageError",
  initialState,
  reducers: {
    logError(state, action) {
      state.error = action.payload;
    },
  }
});

export const { logError } = MessageError.actions;

export const MessageOk = createSlice({
  name: "MessageOk",
  initialState,
  reducers: {
    logOk(state, action) {
      state.logOk = action.payload;
    },
    logEr(state, action) {
      state.logErr = action.payload;
    },


  }
});

export const { logOk,logEr } = MessageOk.actions;