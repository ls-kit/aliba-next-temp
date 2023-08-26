"use client";
import React from "react";
import SingleProductCard from "./SingleProductCard";

const ProductCards = ({ data }) => {
    return (
        <section className="section-b-space ratio_asos py-0">
            <div className="collection-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="collection-content col">
                            <div className="page-main-content">
                                <div className="row align-items-start">
                                    {data?.map((productData) => {
                                        return (
                                            <SingleProductCard
                                                key={productData.name}
                                                data={productData}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-5" />
        </section>
    );
};

export default ProductCards;
