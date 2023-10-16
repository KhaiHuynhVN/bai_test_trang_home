import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
   name: "home",
   initialState: {
      showAdvanceSearch: false,
   },
   reducers: {
      setShowAdvanceSearch(state, action) {
         state.showAdvanceSearch = action.payload;
      },
   },
});

export default homeSlice;
