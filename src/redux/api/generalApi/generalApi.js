import { general } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const generalApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getGenerals: builder.query({
            query: () => general,
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

export const { useGetGeneralsQuery } = generalApi;
