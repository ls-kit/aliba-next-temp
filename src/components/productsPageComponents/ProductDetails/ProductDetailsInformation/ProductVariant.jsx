"use client";
import { useGetProductTypeQuery } from "@/redux/api/productTypeApi/productTypeApi";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import ProductVariantRow from "./ProductVariantRow";
// import useProductConfig from "@/helpers/productsDetails/productHelpers";


const ProductVariant = ({ colorAttributes,  setColorProp,productVariant }) => {
    const [selectColor, setSelectColor] = useState();
    console.log(productVariant)
    const [shippingRate, setShippingRate] = useState();
    const rateRef = useRef()
    const { data: productTypes, isLoading, isError, error } = useGetProductTypeQuery()
    // const {colorTypes} = useProductConfig()
    
    const {productCategoryShippingRates} = productTypes?.data || {}

    const colorImageHandler = (value,Vid,Pid) => {
        setSelectColor(value);
        // colorTypes([{Vid,Pid}])
        setColorProp({Pid,Vid})
    };

    // console.log(productCategoryShippingRates);

    const rateValueHandler = () => {
        setShippingRate(rateRef.current.value)
    }

    return (
        <div className="w-100 flex flex-col justify-content-center align-items-center ">
            <div className="flex flex-row justify-content-center align-items-center">
                <h4>COLOR: {selectColor} </h4>
                {colorAttributes?.map(
                    (attr) => {
                        const { MiniImageUrl, Value, Vid,Pid } = attr;
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
                                onClick={() => colorImageHandler(Value,Vid,Pid)}
                            />
                        );
                    }
                )}
            </div>
            {productVariant.length>0?<div className="my-5 overflow-y-auto" style={{ height:"50vh" }} >
                <Table class="table table-bordered ">
                    <thead>

                        <tr>
                            <th className="p-2 text-center">Size/Weight(g)</th>
                            <th className="p-2 text-center">Prize</th>
                            <th className="p-2 text-center">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productVariant?.map(variant => {
                        console.log(variant)
                       return <ProductVariantRow key={variant.element.Id} variant={ variant} />
                    })}
                    </tbody>
                </Table>
                
            </div>:<div className="my-5 border">
                <h5 className="text-danger text-center p-2">
                    পণ্যের একটি কালার সিলেক্ট করুন
                </h5>
            </div>}
            
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
            <div className="my-5">
            <div className="w-100 d-flex flex-column justify-content-between align-items-center">
                    <button className="btn btn-solid btn-sm p-1 text-sm text-center w-100 rounded-pill"> <i class="fa-solid fa-heart"></i> Add to wishlist</button>
                    <button className="btn btn-solid btn-sm p-1 text-sm text-center w-100 rounded-pill my-1"> <i class="fa-solid fa-cart-flatbed"></i> Add to cart</button>
                    <button className="btn btn-solid btn-sm p-1 text-sm text-center w-100 rounded-pill"> <i class="fa-solid fa-money-bill-1-wave"></i> Buy now</button>
                </div>
                
            </div>
            
            
            
        </div>
    );
};

export default ProductVariant;
