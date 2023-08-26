import React from "react";

const OrderSuccess = () => {
    return (
        <div>
            <section className="section-b-space light-layout">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="success-text">
                                <div className="checkmark">
                                    <i className="fa-solid fa-check checkmark__check text-white"></i>

                                    <i className="fa-solid fa-certificate checkmark__background"></i>
                                </div>
                                <h2>thank you</h2>
                                <p>
                                    Payment is successfully processsed and your order is on the way
                                </p>
                                <p className="font-weight-bold">Transaction ID:267676GHERT105467</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderSuccess;
