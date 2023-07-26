import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import  SelectImageSlice  from "./reducer/Createnuts";

const store = configureStore({
    reducer: {
     reviewnuts:SelectImageSlice
    },
  });

export default store;