import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
   name: "header",
   initialState: {
      isShowOpacity: true,
      isShowTranslate: true,
      isShowBackground: false,
   },
   reducers: {
      setIsShowOpacity(state, action) {
         state.isShowOpacity = action.payload;
      },
      setIsShowTranslate(state, action) {
         state.isShowTranslate = action.payload;
      },
      setIsShowBackground(state, action) {
         state.isShowBackground = action.payload;
      },
   },
});

export default headerSlice;
