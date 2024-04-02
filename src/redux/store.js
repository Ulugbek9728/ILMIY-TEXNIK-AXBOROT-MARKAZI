import { configureStore } from "@reduxjs/toolkit";
import langSlice from './reducers/translet'
export const store = configureStore({
    reducer: {
        lang: langSlice
    }
})