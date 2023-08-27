import { shippingInformation } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const shippingInformationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getShippingInformation: builder.query({
            query: () => shippingInformation,
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

export const { useGetShippingInformationQuery } = shippingInformationApi;
