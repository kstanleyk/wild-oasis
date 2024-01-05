import { configureStore } from "@reduxjs/toolkit";
import { cabinSlice } from "../reducers/cabin/cabin.slice";

const store = configureStore({
    reducer: {
      cabin: cabinSlice.reducer,
    },
  });
  
  export type rootState = ReturnType<typeof store.getState>;
  
  export default store;