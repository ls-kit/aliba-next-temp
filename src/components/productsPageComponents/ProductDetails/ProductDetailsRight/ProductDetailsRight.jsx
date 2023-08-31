import { formatDate } from "@/helpers/productsDetails/productHelpers";
import React from "react";
import { Table } from "react-bootstrap";

const ProductDetailsRight = ({ Id, VendorScore }) => {

    const today = new Date();
    const deliveryStartDate = new Date(today);
    deliveryStartDate.setDate(today.getDate() + 15); // Add 15 days to today's date for the minimum delivery date
    const deliveryEndDate = new Date(today);
    deliveryEndDate.setDate(today.getDate() + 20); // Add 20 days to today's date for the maximum delivery date

    const formattedStartDate = formatDate(deliveryStartDate);
    const formattedEndDate = formatDate(deliveryEndDate);

    


    return (
        <div className="col-lg-4 rtl-text">
            <div>
                <div className=" border">
                    <h5 className="text-danger text-center p-2">
                        আপনার পণ্য নির্বাচন সঠিক না হলে আলিবা ইন্টারন্যাশনাল তা সংশোধন করার অধিকার
                        রাখে।
                    </h5>
                </div>
                <div className="w-100 flex flex-row align-items-center justify-content-between border">
                    <div
                        className="p-2 text-center"
                        style={{ backgroundColor: "#FF4C3B", color: "white" }}
                    >
                        By Air (15-20 Working Days)
                    </div>
                    <div className="p-2 text-center">Eas. Delivery : {formattedStartDate} To {formattedEndDate}</div>
                </div>
                <Table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td className="p-2 text-center">Total Quantity:</td>
                            <td className="p-2 text-center">00</td>
                        </tr>
                        <tr>
                            <td className="p-2 text-center">Product Price:</td>
                            <td className="p-2 text-center">৳ 0.00</td>
                        </tr>
                        <tr>
                            <td className="p-2 text-center">Approx. Weight:</td>
                            <td className="p-2 text-center">0.000 kg ( আনুমানিক)</td>
                        </tr>
                        <tr>
                            <td className="p-2 text-center">Shipping cost (based on weight) :</td>
                            <td className="p-2 text-center">0.000 kg ( আনুমানিক)</td>
                        </tr>
                        <tr>
                            <td className="p-2 text-center">China Local Shipping charge:</td>
                            <td className="p-2 text-center">৳ 0.00</td>
                        </tr>
                        <tr>
                            <td className="p-2 text-center">Total Products Price:</td>
                            <td className="p-2 text-center">৳ 0.00</td>
                        </tr>
                    </tbody>
                    {/* <tbody>
                        <tr>
                            <td className="p-2 text-center">Wheat</td>
                            <td className="p-2 text-center">Good</td>
                            <td className="p-2 text-center">
                                <button className="btn btn-solid btn-sm">Add to cart</button>
                                
                            </td>
                        </tr>
                    </tbody> */}
                </Table>
                <div className="w-100 flex flex-row align-items-center justify-content-between border">
                    <div className="p-2 text-center text-danger">
                        পন্য আসার পর চায়না থেকে বাংলাদেশ এর শিপিং চার্জ ও আপনার ঠিকানার ডেলিভারি
                        চার্জ যুক্ত হবে। এখনে শুধুমাত্র পণ্যের মূল্য প্রকাশিত হচ্ছে।
                    </div>
                </div>

                <Table class="table table-bordered mt-3">
                    <tbody>
                        <tr>
                            <td className="p-2 text-center">Product code</td>
                            <td className="p-2 text-center">{Id}</td>
                        </tr>
                        <tr>
                            <td className="p-2 text-center">Seller Score</td>
                            <td className="p-2 text-center">{VendorScore}</td>
                        </tr>
                    </tbody>
                    {/* <tbody>
                        <tr>
                            <td className="p-2 text-center">Wheat</td>
                            <td className="p-2 text-center">Good</td>
                            <td className="p-2 text-center">
                                <button className="btn btn-solid btn-sm">Add to cart</button>
                                
                            </td>
                        </tr>
                    </tbody> */}
                </Table>

                {/* <button className="btn btn-solid p-2 text-center w-100">Add to cart</button> */}
            </div>
        </div>
    );
};

export default ProductDetailsRight;
