import { configureStore } from "@reduxjs/toolkit";
// import adminSliceReducer from '../features/admin/adminSlice';
import { apiSlice } from "../api/baseApi";
// import projectsSliceReducer from '../features/projects/projectsSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // projectsSlice: projectsSliceReducer,
        // adminSlice: adminSliceReducer,
    },
    devTools: process.env.NODE_ENV !== "production",

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
