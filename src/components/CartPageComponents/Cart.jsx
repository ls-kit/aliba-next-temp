"use client";

import Image from "next/image";
import React from "react";
import CartProductCard from "./CartProductCard";

const Cart = () => {
    return (
        <div className="col-lg-8 col-12">
            <div className="card mb-4 p-2">
                <div className="card-header py-3">
                    <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <CartProductCard />
            </div>
        </div>
    );
};

export default Cart;
