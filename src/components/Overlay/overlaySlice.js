import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
   name: "overlay",
   initialState: {
      isShow: false,
   },
   reducers: {
      setShow(state, action) {
         state.isShow = action.payload;
      },
   },
});

export default overlaySlice;
