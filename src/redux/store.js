import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from './slices/filter'


export const store = configureStore({
    reducer: {
        productsFilter: filterSliceReducer
    },
})