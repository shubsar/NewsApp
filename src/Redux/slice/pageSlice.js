import { createSlice } from "@reduxjs/toolkit";

const initialState={
    pageNum:1,

}
const pageSlice=createSlice({
    name:'page',
    initialState,
    reducers:{
        incrementPage:(state)=>{
            state.pageNum=state.pageNum+1;
        },
        decrementPage:(state)=>{
            state.pageNum=state.pageNum-1;
        },
        setPage:(state,action)=>{
            state.pageNum=action.payload;
        }
    }
})
export const {incrementPage,decrementPage,setPage}=pageSlice.actions;
export default pageSlice.reducer;