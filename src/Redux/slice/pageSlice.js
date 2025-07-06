import { createSlice } from "@reduxjs/toolkit";

const initialState={
    pageNum:1,

}
const pageSlice=createSlice({
    name:'page',
    initialState,
    reducers:{
        incrementPage:(state)=>{
            state.page=state.page+1;
        },
        decrementPage:(state)=>{
            state.page=state.page-1;
        },
        setPage:(state,action)=>{
            state.page=action.payload;
        }
    }
})
export const {incrementPage,decrementPage,setPage}=pageSlice.actions;
export default pageSlice.reducer;