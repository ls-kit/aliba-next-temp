import React from "react";

const CheckoutRight = () => {
    return (
        <div className="col-lg-4 col-12">
            <div className="checkout-details">
                <div className="order-box">
                    <div>
                        <div className="d-flex flex-row align-items-center justify-content-between ">
                            <h3 className="font-bold text-black">Product</h3>
                            <h3 className="font-bold text-black">Total</h3>
                        </div>
                    </div>
                    <hr />
                    <ul className="qty">
                        <li className="d-flex flex-row justify-content-between align-items-center">
                            <h5>Pink Slim Shirt × 1</h5>
                            <h5>$25.10</h5>
                        </li>
                        <li className="d-flex flex-row justify-content-between align-items-center">
                            <h5>Pink Slim Shirt × 1</h5>
                            <h5>$25.10</h5>
                        </li>
                        <li className="d-flex flex-row justify-content-between align-items-center">
                            <h5>Pink Slim Shirt × 1</h5>
                            <h5>$25.10</h5>
                        </li>
                    </ul>
                    <hr />
                    <ul>
                        <li className="d-flex flex-row justify-content-between align-items-center">
                            <h6>Subtotal</h6>
                            <h5 className="count" style={{ color: "#ff4c3b" }}>
                                $25.10
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <li className="d-flex flex-row justify-content-between align-items-center">
                            <h6>China Local Shipping Cost</h6>
                            <h5 className="count" style={{ color: "#ff4c3b" }}>
                                $25.10
                            </h5>
                        </li>
                    </ul>
                    <ul>
                        <li className="d-flex flex-row justify-content-between align-items-center">
                            <h4>Total</h4>
                            <h5 className="count" style={{ color: "#ff4c3b" }}>
                                $25.10
                            </h5>
                        </li>
                    </ul>
                </div>
                <div className="payment-box">
                    <div className="upper-box">
                        <div className="payment-options">
                            <div className="p-3 my-3" style={{ border: "1px solid #ff4c3b" }}>
                                <h4 className=" text-center" style={{ color: "#ff4c3b" }}>
                                    Choose first payment
                                </h4>
                            </div>
                            <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li>
                                    <div className="radio-option">
                                        <input type="radio" name="payment-group" id="payment-2" />
                                        <label for="payment-2" className="p-0 mx-3">
                                            70%
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="radio-option paypal">
                                        <input type="radio" name="payment-group" id="payment-3" />
                                        <label for="payment-2" className="p-0 mx-3">
                                            80%
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="payment-options">
                            <div className="p-3 my-3" style={{ border: "1px solid #ff4c3b" }}>
                                <h4 className=" text-center" style={{ color: "#ff4c3b" }}>
                                    Choose payment method
                                </h4>
                            </div>
                            <ul>
                                <li>
                                    <div className="radio-option">
                                        <input type="radio" name="payment-group" id="payment-2" />
                                        <label for="payment-2">Cash On Delivery</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="radio-option paypal">
                                        <input type="radio" name="payment-group" id="payment-3" />
                                        <label for="payment-3">PayPal</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-end">
                        <a href="#" className="btn-solid btn">
                            Place Order
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutRight;
