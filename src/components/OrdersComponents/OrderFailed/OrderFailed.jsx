import React from "react";

const OrderFailed = () => {
    return (
        <div>
            <section className="section-b-space light-layout">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="success-text">
                                <div className="checkmark">
                                    <i className="fa-solid fa-x checkmark__check text-white"></i>
                                    <i className="fa-solid fa-certificate checkmark__background"></i>
                                </div>
                                <h2>oops!</h2>
                                <p>Payment is failed and your order is not submitted</p>
                                {/* <p className="font-weight-bold">Transaction ID:267676GHERT105467</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderFailed;
