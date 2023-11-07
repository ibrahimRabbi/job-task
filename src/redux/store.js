import { configureStore } from "@reduxjs/toolkit";
import fastSlice from "./Features/fastSlice";
import { allData } from "./getDataApi";
 


const store = configureStore({
    reducer: {
        counter: fastSlice,
         [allData.reducerPath]: allData.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(allData.middleware),
})

export default store