import { createSlice } from "@reduxjs/toolkit";

const rightMenuSlice = createSlice({
   name: "rightMenu",
   initialState: {
      isShow: false,
   },
   reducers: {
      setShow(state, action) {
         state.isShow = action.payload;
      },
   },
});

export default rightMenuSlice;
