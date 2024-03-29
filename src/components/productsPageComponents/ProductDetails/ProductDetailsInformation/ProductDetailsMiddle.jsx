"use client";
import React, { useEffect } from "react";
import Rating from "react-rating";
import ProductVariant from "./ProductVariant";
// import useProductConfig from "@/helpers/productsDetails/productHelpers";

const ProductDetailsMiddle = ({
    FeaturedValues,
    Title,
    Attributes,
    colorAttributes,
    productVariant,
    setColorProp,
    singleAttribute
}) => {
    // const {productConfig} = useProductConfig()
    const rating = FeaturedValues?.find((featureValue) => featureValue.Name === "rating");

    // console.log(rating);
    // useEffect(() => {

    //     productConfig(Attributes,ConfiguredItems)
    // },[])

    return (
        <div className="col-lg-4 rtl-text">
            <div>
                <div className="rating">
                    <Rating
                        initialRating={Number(rating?.Value)}
                        readonly
                        emptySymbol="fa fa-star-o text-black"
                        fullSymbol="fa fa-star text-warning"
                    />
                </div>
                <div>
                    <h3 className="text-black font-bold">{Title}</h3>
                </div>
            </div>
            <hr className="my-3" />
            <ProductVariant
                Attributes={Attributes}
                colorAttributes={colorAttributes}
                setColorProp={setColorProp}
                singleAttribute={singleAttribute}
                productVariant={productVariant}
            />
        </div>
    );
};

export default ProductDetailsMiddle;
