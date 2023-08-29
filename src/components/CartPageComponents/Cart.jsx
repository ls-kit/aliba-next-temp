'use client'

import Image from "next/image";
import React from "react";

const CheckoutLeft = () => {
    return (
        <div className="col-lg-8 col-12">
            <div className="card mb-4 p-2">
                <div className="card-header py-3">
                    <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <div className="card-body border">
                    {/* <!-- Single item --> */}
                    
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div>
                            <Image
                                src="https://cbu01.alicdn.com/img/ibank/2020/622/742/21928247226_2006306012.jpg"
                                alt="Blue Jeans Jacket"
                                width={100}
                                height={100}
                                className="mx-auto"
                            />
                        </div>
                        <div className="ms-3">
                            <h5><strong>Blue denim shirt with long sleeve very attractive</strong></h5>
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-center align-items-center">
                        <div className=" col-5 col-md-2 mb-4 mb-lg-0">
                            {/* <!-- Image --> */}
                            
                            <Image
                                src="https://cbu01.alicdn.com/img/ibank/2020/622/742/21928247226_2006306012.jpg"
                                alt="Blue Jeans Jacket"
                                width={50}
                                height={50}
                                className="mx-auto"
                            />

                            {/* <!-- Image --> */}
                        </div>

                        <div className=" col-6 col-md-4 mb-4 mb-lg-0">
                            {/* <!-- Data --> */}
                            
                            <p>Color: blue</p>
                            <p>Size: 40</p>

                            {/* <!-- Data --> */}
                        </div>

                        <div className=" col-8 col-md-4 mb-4 mb-lg-0">
                            {/* <!-- Quantity --> */}
                            <div className="d-flex mb-4 justify-content-center align-items-center">
                                <button className="btn btn-solid btn-sm btn-xs me-3">
                                    <i className="fas fa-minus"></i>
                                </button>

                                <form>
                                    <input type="number" className="px-3 px-md-3 w-100" />
                                </form>

                                <button className="btn btn-solid btn-sm btn-xs ms-3">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            {/* <!-- Quantity --> */}

                            {/* <!-- Price --> */}
                            <p className="text-center text-md-center">
                                <strong>$17.99</strong>
                            </p>
                            <p className="text-center text-md-center">
                                <strong>$17.99</strong>
                            </p>
                            {/* <!-- Price --> */}
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm me-1 mb-2"
                                    data-mdb-toggle="tooltip"
                                    title="Remove item"
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Single item --> */}

                    <hr className="my-4" />
                </div>
            </div>
        </div>
    );
};

export default CheckoutLeft;
