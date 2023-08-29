import { useGetSellerInformationQuery } from "@/redux/api/sellerInformationApi/sellerInformationApi";
import React from "react";
import { Table } from "react-bootstrap";

const SellerInformation = ({ vendorId }) => {
    const {
        data: sellerInformation,
        isLoading,
        isError,
        error,
    } = useGetSellerInformationQuery(vendorId);

    // console.log(sellerInformation?.data?.VendorInfo)

    const { Name, ShopName, Scores } = sellerInformation?.data.VendorInfo || {};
    return (
        <div>
            <Table class="table table-bordered">
                <tbody>
                    <tr>
                        <th className="p-2 text-center">Name</th>
                        <th className="p-2 text-center">{Name}</th>
                    </tr>
                    <tr>
                        <th className="p-2 text-center">Shop Name</th>
                        <th className="p-2 text-center">{ShopName}</th>
                    </tr>
                    <tr>
                        <th className="p-2 text-center">Delivery Score</th>
                        <th className="p-2 text-center">{Scores?.DeliveryScore}</th>
                    </tr>
                    <tr>
                        <th className="p-2 text-center">Item Score</th>
                        <th className="p-2 text-center">{Scores?.ItemScore}</th>
                    </tr>
                    <tr>
                        <th className="p-2 text-center">Service Score</th>
                        <th className="p-2 text-center">{Scores?.ServiceScore}</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default SellerInformation;
