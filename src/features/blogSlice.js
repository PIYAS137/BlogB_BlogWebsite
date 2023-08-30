import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../database/Data";

const StateData={
    data:[...Data],
    clickModal:false,
    myBlogData:[],
    clickSwap:true,
    catagoryClick:null,
}

const blogSlice = createSlice({
    name: "blog",
    initialState:StateData,
    reducers:{
        AddBlog:(state,action)=>{
            state.data.unshift(action.payload)
            state.myBlogData.unshift(action.payload)
            state.prevAllBlogIncludeMyandDefault=[...state.data]
            Data.unshift(action.payload)
            console.log(state.data)
        },
        DelteItem:(state,action)=>{
            state.data.pop();
        },
        ClickModalTrue:(state,action)=>{
            state.clickModal=true
        },
        ClickModalFalse:(state,action)=>{
            state.clickModal=false
        },
        ClickSwapTrue:(state,action)=>{
            state.clickSwap=true
        },
        ClickSwapFalse:(state,action)=>{
            state.clickSwap=false
        },
        ClickCatagoryOption:(state,action)=>{
            state.data=[...Data]
            let text = action.payload
            const temp = state.data.filter((one)=>one.catagory.toLowerCase() == text.toLowerCase());
            state.data=temp
            state.catagoryClick=action.payload
        }

    }
})

export const {AddBlog,DelteItem,ClickModalFalse,ClickCatagoryOption,ClickModalTrue,ClickSwapFalse,ClickSwapTrue}=blogSlice.actions;
export default blogSlice.reducer;