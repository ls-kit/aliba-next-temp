import { useGetShippingInformationQuery } from "@/redux/api/shippingInformationApi/shippingInformationApi";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

const ShippingInformation = () => {
    const {
        data: shippingInformation,
        isLoading,
        isError,
        error,
    } = useGetShippingInformationQuery();

    // console.log(shippingInformation?.data?.singles?.post_content)
    const richText = shippingInformation?.data?.singles?.post_content;
    return (
        <Container>
            <div
                className="container p-3 p-md-5 lh-lg border w-100"
                dangerouslySetInnerHTML={{ __html: richText }}
            ></div>
        </Container>
    );
};

export default ShippingInformation;
