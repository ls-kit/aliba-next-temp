import { topProducts } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const topProductsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTopProducts: builder.query({
            query: () => topProducts,
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

export const { useGetTopProductsQuery } = topProductsApi;
