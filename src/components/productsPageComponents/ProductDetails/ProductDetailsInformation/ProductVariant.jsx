"use client";
import { useGetProductTypeQuery } from "@/redux/api/productTypeApi/productTypeApi";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import ProductVariantRow from "./ProductVariantRow";

const ProductVariant = ({ Attributes }) => {
    const [selectColor, setSelectColor] = useState();
    const [shippingRate, setShippingRate] = useState();
    const rateRef = useRef()
    const { data: productTypes, isLoading, isError, error } = useGetProductTypeQuery()
    
    const {productCategoryShippingRates} = productTypes?.data || {}

    const colorImageHandler = (value) => {
        setSelectColor(value);
    };

    // console.log(productCategoryShippingRates);

    const rateValueHandler = () => {
        setShippingRate(rateRef.current.value)
    }

    return (
        <div className="w-100 flex flex-col justify-content-center align-items-center ">
            <div className="flex flex-row justify-content-center align-items-center">
                <h4>COLOR: {selectColor} </h4>
                {Attributes?.filter((attribute) => attribute.PropertyName === "Color")?.map(
                    (attr) => {
                        const { MiniImageUrl, Value, Vid } = attr;
                        return (
                            <Image
                                id="color-img"
                                key={Vid}
                                width={50}
                                height={50}
                                src={MiniImageUrl}
                                alt=""
                                className={`m-1 rounded ${
                                    selectColor === Value ? "border border-danger" : "border"
                                }`}
                                onClick={() => colorImageHandler(Value)}
                            />
                        );
                    }
                )}
            </div>
            <div className="my-5">
                <Table class="table table-bordered">
                    <thead>

                        <tr>
                            <th className="p-2 text-center">Size/Weight(g)</th>
                            <th className="p-2 text-center">Prize</th>
                            <th className="p-2 text-center">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>

                        <ProductVariantRow/>
                    </tbody>
                </Table>
                <button className="btn btn-solid p-2 text-center w-100">Add to cart</button>
            </div>
            <div className="my-5">
                <div className="w-100 d-flex flex-column justify-content-center align-items-center border">
                    <div className="w-100">
                        
                        <div className="p-2 text-center" style={{ backgroundColor:"#FF4C3B", color:"white" }} >Select Category:</div>
                    </div>
                    <div className="w-100">
                        
                        <div className="p-2 text-center">
                            <select
                                class="form-select text-center"
                                aria-label=" select example"
                                ref={rateRef}
                                onChange={rateValueHandler}
                            >
                                <option selected disabled>Product Category</option>
                                { productCategoryShippingRates?.map(productType => {
                                    const { category,id, shipping_rate}=productType
                                  return  <option key={id} value={shipping_rate}>{category}</option>
                                })}
                                
                                
                            </select>
                        </div>
                    </div>
                    <div className="w-100 flex flex-row align-items-center justify-content-between">
                        
                        <div className="p-2 text-center" style={{ backgroundColor:"#FF4C3B", color:"white" }} >
                            Shipping (Per KG) :
                        </div>
                        <div className="p-2 text-center">
                        {shippingRate?shippingRate:"00.00"}
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5 border">
                <h5 className="text-danger text-center p-2">
                    আপনার পণ্য নির্বাচন সঠিক না হলে আলিবা ইন্টারন্যাশনাল তা সংশোধন করার অধিকার রাখে।
                </h5>
            </div>
        </div>
    );
};

export default ProductVariant;
