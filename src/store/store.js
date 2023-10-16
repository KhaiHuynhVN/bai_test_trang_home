import { configureStore } from "@reduxjs/toolkit";

import { headerSlice } from "../layouts/components/Header";
import { navMainSlice } from "../layouts/components/RightMenu/components/NavMain";
import { homeSlice } from "../pages/Home";
import { overlaySlice } from "../components/Overlay";
import { rightMenuSlice } from "../layouts/components/RightMenu";

const store = configureStore({
   reducer: {
      header: headerSlice.reducer,
      navMain: navMainSlice.reducer,
      home: homeSlice.reducer,
      overlay: overlaySlice.reducer,
      rightMenu: rightMenuSlice.reducer,
   },
});
export default store;
