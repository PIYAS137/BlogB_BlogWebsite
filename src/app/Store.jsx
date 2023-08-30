import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "../features/blogSlice";



const store = configureStore({
    reducer:{
        blog: BlogSlice
    }
})

export default store;