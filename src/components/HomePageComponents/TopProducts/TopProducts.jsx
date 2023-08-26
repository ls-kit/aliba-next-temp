"use client";
import ProductsSkeleton from "@/components/shared/Loader/ProductsSkeleton";
import ProductCards from "@/components/shared/ProductCards/ProductCards";
import { useGetTopProductsQuery } from "@/redux/api/topProductsApi/topProductsApi";
import React from "react";

const TopProducts = () => {
    const { data: topProductsData, isLoading, isError, error } = useGetTopProductsQuery();

    if (topProductsData) {
        // console.log(JSON.parse(topProductsData?.data?.products).Content);
        var parsedData = JSON.parse(topProductsData?.data?.products).Content;
    }

    if (isLoading) {
        return <ProductsSkeleton />;
    }
    if (!isLoading && topProductsData) {
        return (
            <div>
                <div className="title1 section-t-space">
                    <h4>exclusive products</h4>
                    <h2 className="title-inner1">everyday casual</h2>
                </div>
                {topProductsData && <ProductCards data={parsedData} />}
            </div>
        );
    }
};

export default TopProducts;
