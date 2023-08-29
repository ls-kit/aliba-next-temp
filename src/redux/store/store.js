import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/baseApi";
import singleProductReducer from "../slice/singleProductSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // projectsSlice: projectsSliceReducer,
        // adminSlice: adminSliceReducer,
        singleProductSlice: singleProductReducer
    },
    devTools: process.env.NODE_ENV !== "production",

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
