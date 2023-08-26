import { banners } from "../apiEndpoints";
import { apiSlice } from "../baseApi";

const bannerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBanners: builder.query({
            query: () => banners,
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

export const { useGetBannersQuery } = bannerApi;
