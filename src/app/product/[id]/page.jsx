"use client";

import ProductDetails from "@/components/productsPageComponents/ProductDetails/ProductDetails/ProductDetails";
import ProductDetailsTab from "@/components/productsPageComponents/ProductDetails/ProductDetailsTab/ProductDetailsTab";
import RelatedProducts from "@/components/productsPageComponents/ProductDetails/RelatedProducts";
import BreadCrumb from "@/components/shared/Breadcrumb/BreadCrumb";
import { useGetSingleProductQuery } from "@/redux/api/singleProductApi/singleProductApi";
import React from "react";

const SingleProduct = ({ params }) => {
    // console.log(params);
    const { data, isLoading, isError, error } = useGetSingleProductQuery(`/${params.id}`);

    console.log(data);
    
    return (
        <div>
            {/* <BreadCrumb /> */}
            <ProductDetails data={data} />
            <ProductDetailsTab vendorId={data?.data?.item?.VendorId} id={params.id} />
            <RelatedProducts />
        </div>
    );
};

export default SingleProduct;
