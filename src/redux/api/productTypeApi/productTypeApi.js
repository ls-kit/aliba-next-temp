import { productType } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const singleProductApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductType: builder.query({
            query: () => productType,
        }),
        // postProjects: builder.mutation({
        //     query: (data) => ({
        //         url: "projects",
        //         method: "POST",
        //         body: data,
        //     }),
        // }),
    }),
});

export const { useGetProductTypeQuery } = singleProductApi;
