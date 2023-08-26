'use client'
import React from "react";
import Rating from "react-rating";
import ProductVariant from './ProductVariant';

const ProductDetailsInformation = ({ FeaturedValues, Title, Attributes
}) => {
    const rating = FeaturedValues?.find((featureValue) => featureValue.Name === "rating");
    // console.log(rating);

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
            <hr className="my-3"/>
            <ProductVariant Attributes ={Attributes} />
        </div>
    );
};

export default ProductDetailsInformation;
