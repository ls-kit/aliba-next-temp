"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import ProductDetailsMiddle from "../ProductDetailsInformation/ProductDetailsMiddle";
import ProductDetailsRight from "../ProductDetailsRight/ProductDetailsRight";

const ProductDetails = ({ data }) => {
    console.log(data);
    const {
        Title,
        Id,
        Price,
        Pictures,
        FeaturedValues,
        IsSellAllowed,
        Attributes,
        ConfiguredItems,
        VendorScore
    } = data?.data?.item || {};
    const [previewImg, setPreviewImg] = useState();

    // console.log(Attributes);
    // console.log(ConfiguredItems);
    useEffect(() => {
        if (Pictures) {
            const defaultImg = Pictures.find((picture) => picture.IsMain === true);
            if (defaultImg) {
                setPreviewImg(defaultImg.Url);
            }
        }
    }, [Pictures]);

    return (
        <section>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="w-100">
                                <Image
                                    width={400}
                                    height={300}
                                    src={previewImg}
                                    alt="product-default-img"
                                    className="img-fluid"
                                />
                                <div className="flex flex-row justify-content-center align-items-center ">
                                    {Pictures &&
                                        Pictures.map((picture) => {
                                            const { Url } = picture;

                                            return (
                                                <Image
                                                    key={Url}
                                                    width={80}
                                                    height={80}
                                                    src={Url}
                                                    alt=""
                                                    className="m-1"
                                                    onClick={() => setPreviewImg(Url)}
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                        <ProductDetailsMiddle
                            FeaturedValues={FeaturedValues}
                            Title={Title}
                            Attributes={Attributes}
                            ConfiguredItems={ConfiguredItems}
                        />
                        <ProductDetailsRight Id={Id} VendorScore={VendorScore} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
