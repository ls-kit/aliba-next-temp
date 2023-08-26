"use client";

import Cart from "@/components/CartPageComponents/Cart";
import Checkout from "@/components/CartPageComponents/Checkout";
import React from "react";

const page = () => {
    return (
        <div>
            <section className="section-b-space">
                <div className="container">
                    <div className="checkout-page">
                        <div className="checkout-form">
                            <form>
                                <div className="row">
                                    <Cart />
                                    <Checkout />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
