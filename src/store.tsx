import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import  SelectImageSlice  from "./reducer/Createnuts";
import UserSlice  from "./reducer/User";
import ProductID from "./reducer/ProductID";

const store = configureStore({
    reducer: {
     reviewnuts:SelectImageSlice,
     user: UserSlice,
     productID: ProductID
    },
  });

  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;