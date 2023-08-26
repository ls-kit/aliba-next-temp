import { singleProduct } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const singleProductApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSingleProduct: builder.query({
            query: (id) => singleProduct + id,
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

export const { useGetSingleProductQuery } = singleProductApi;
