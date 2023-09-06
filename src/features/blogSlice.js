import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../database/Data";

const StateData = {
    ALLData : [...Data],
    data: [...Data],
    clickModal: false,
    myBlogData: [],
    clickSwap: true,
    catagoryClick: null,
}

const blogSlice = createSlice({
    name: "blog",
    initialState: StateData,
    reducers: {
        AddBlog: (state, action) => {
            state.data=[action.payload, ...state.data]


            state.myBlogData=[action.payload, ...state.myBlogData]



            state.prevAllBlogIncludeMyandDefault = [...state.data]
            console.log(action.payload)
            Object.preventExtensions(state.ALLData)
            state.ALLData=[action.payload, ...state.ALLData]
            console.log(state.data)
        },
        DelteItem: (state, action) => {
            state.data.pop();
        },
        ClickModalTrue: (state, action) => {
            state.clickModal = true
        },
        ClickModalFalse: (state, action) => {
            state.clickModal = false
        },
        ClickSwapTrue: (state, action) => {
            state.clickSwap = true
        },
        ClickSwapFalse: (state, action) => {
            state.clickSwap = false
        },
        ClickCatagoryOption: (state, action) => {
            state.data = [...state.ALLData]
            let text = action.payload
            const temp = state.data.filter((one) => one.catagory.toLowerCase() == text.toLowerCase());
            state.data = temp
            state.catagoryClick = action.payload
        },
        ClickSearchButton: (state, action) => {
            let key = action.payload;
            let searchInputData = key[0];
            let catagoryData = key[1];
            if (searchInputData != "") {
                state.data=state.data
                let tempSearch = state.ALLData.filter((one) => one.heading.toLocaleLowerCase().includes(searchInputData.toLocaleLowerCase()))
                console.log(tempSearch)
                state.data = tempSearch
            }
            if (catagoryData != "") {
                let temp = state.data.filter((one) => one.catagory.toLowerCase() == catagoryData.toLowerCase())
                state.data = temp;
            }
        },
        SeeAllBlogsButton:(state,action)=>{
            state.data=[...state.ALLData]
        }

    }
})

export const { AddBlog, SeeAllBlogsButton, DelteItem, ClickModalFalse, ClickSearchButton, ClickCatagoryOption, ClickModalTrue, ClickSwapFalse, ClickSwapTrue } = blogSlice.actions;
export default blogSlice.reducer;