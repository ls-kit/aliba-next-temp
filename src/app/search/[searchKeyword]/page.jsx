"use client";
import ProductFilter from "@/components/productsPageComponents/ProductFilter/ProductFilter";
import BreadCrumb from "@/components/shared/Breadcrumb/BreadCrumb";
import ProductsSkeleton from "@/components/shared/Loader/ProductsSkeleton";
import ProductCards from "@/components/shared/ProductCards/ProductCards";
import { useGetSearchResultQuery } from "@/redux/api/searchApi/searchApi";
import React from "react";

const SearchProductsPage = ({params}) => {
    const { data: productsData, isLoading, isError, error } = useGetSearchResultQuery(params.searchKeyword);

    if (!productsData) {
        // console.log(JSON.parse(topProductsData?.data?.products).Content);
        return <div className="p-5 border border-danger m-5">
            <h3 className="text-danger text-center">Product not found</h3>
        </div>
    }
    if (productsData) {
        // console.log(JSON.parse(topProductsData?.data?.products).Content);
        var parsedData = JSON.parse(productsData?.data?.products).Content;
    }

    if (isLoading) {
        return <ProductsSkeleton />;
    }
    return (
        <div>
            {/* <BreadCrumb /> */}
            <ProductFilter />
            {productsData && <ProductCards data={parsedData} />}
            <div className="load-more-sec mb-5 container mx-auto">
                <a href="javascript:void(0)" className="loadMore">
                    load more
                </a>
            </div>
        </div>
    );
};

export default SearchProductsPage;
