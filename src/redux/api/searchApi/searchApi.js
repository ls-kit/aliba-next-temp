import { productSearch } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const searchApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSearchResult: builder.query({
            query: (searchValue) => productSearch + '/' + searchValue,
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

export const { useGetSearchResultQuery } = searchApi;
