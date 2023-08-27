import { productDescription } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const productDescriptionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductDescription: builder.query({
            query: (id) => productDescription +'/'+ id,
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

export const { useGetProductDescriptionQuery } = productDescriptionApi;
