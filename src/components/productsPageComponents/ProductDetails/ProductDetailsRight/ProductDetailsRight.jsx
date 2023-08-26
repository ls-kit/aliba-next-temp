import React from "react";
import { Table } from "react-bootstrap";

const ProductDetailsRight = () => {
    return (
        <div className="col-lg-4 rtl-text">
            <div>
                <div className="w-100 flex flex-row align-items-center justify-content-between border">
                        
                    <div className="p-2 text-center" style={{ backgroundColor:"#FF4C3B", color:"white" }} >
                        By Air (15-20 Working Days)
                    </div>
                    <div className="p-2 text-center">
                        Eas. Delivery : 10/9/2023 To 15/9/2023
                    </div>
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
                    পন্য আসার পর চায়না থেকে বাংলাদেশ এর শিপিং চার্জ ও আপনার ঠিকানার ডেলিভারি চার্জ যুক্ত হবে। এখনে শুধুমাত্র পণ্যের মূল্য প্রকাশিত হচ্ছে।
                    </div>
                </div>


                {/* <button className="btn btn-solid p-2 text-center w-100">Add to cart</button> */}
            </div>
        </div>
    );
};

export default ProductDetailsRight;
