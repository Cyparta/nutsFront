import { createSlice } from "@reduxjs/toolkit";

export const SelectImageSlice:any = createSlice({
  name: "selectimageslice",
  initialState: {
    value:null,
    card:null
  },
  reducers: {
    set: (state, action) => {
       state.value = action.payload
    },
    dataCard:(state, action)=>{
      state.card = action.payload
    }
//    addItem: (state, action) => {
//     state.value.results = [action.payload, ...state.value.results];
//    },
//    deleteItem:(state,action)=>{
    
//     state.value.results = state.value.results.filter(
//         (item) => item.id !== action.payload.id
//       );
//       state.value.count = state.value.count - 1;
//    },
//     reset: (state) => {
//       state.value = [];
//     },
  },
});

export default SelectImageSlice.reducer;