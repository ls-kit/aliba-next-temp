"use client";

import OrderDetails from "@/components/OrdersComponents/OrderDetails/OrderDetails";
import OrderSuccess from "@/components/OrdersComponents/OrderSuccess/OrderSuccess";
import React from "react";

const page = () => {
    return (
        <div>
            <OrderSuccess />
            <OrderDetails />
        </div>
    );
};

export default page;
