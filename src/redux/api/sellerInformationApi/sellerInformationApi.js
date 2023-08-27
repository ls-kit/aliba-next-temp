import { sellerInformation } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const sellerInformationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSellerInformation: builder.query({
            query: (id) => sellerInformation +'/'+ id,
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

export const { useGetSellerInformationQuery } = sellerInformationApi;
