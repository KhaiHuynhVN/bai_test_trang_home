import { createSlice } from "@reduxjs/toolkit";

const navMainSlice = createSlice({
   name: "navMain",
   initialState: {
      history: [{ children: [] }],
      readyNextAnimation: false,
      nextAnimation: false,
      readyPrevAnimation: false,
      prevAnimation: false,
   },
   reducers: {
      setHistory(state, action) {
         state.history = [...action.payload];
      },
      setReadyNextAnimation(state, action) {
         state.readyNextAnimation = action.payload;
      },
      setNextAnimation(state, action) {
         state.nextAnimation = action.payload;
      },
      setReadyPrevAnimation(state, action) {
         state.readyPrevAnimation = action.payload;
      },
      setPrevAnimation(state, action) {
         state.prevAnimation = action.payload;
      },
   },
});

export default navMainSlice;
