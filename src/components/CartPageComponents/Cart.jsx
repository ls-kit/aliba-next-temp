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
                    
                    <div className="d-flex flexrow justify-content-start align-items-center">
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
                    <div className="d-flex flex-column flex-md-row flex-wrap justify-content-between align-items-start w-100">
                        <div className=" d-flex flex-row justify-content-between align-items-start ">
                            {/* <!-- Image --> */}
                            
                            <Image
                                src="https://cbu01.alicdn.com/img/ibank/2020/622/742/21928247226_2006306012.jpg"
                                alt="Blue Jeans Jacket"
                                width={50}
                                height={50}
                                
                            />

                            {/* <!-- Image --> */}
                            <div className="mx-3 ">
                            {/* <!-- Data --> */}
                            
                            <p className="m-0">Color: blue <br />
                                Size: 40</p>

                            {/* <!-- Data --> */}
                        </div>
                        <div>
                        <p className="text-center text-md-center m-0">
                                <strong> Price: $17.99</strong>
                            </p>
                        </div>
                        </div>

                        
                        <div className="my-md-0 my-3">
                            {/* <!-- Quantity --> */}
                            <div className="d-flex mb-4 justify-content-center align-items-center">
                                <button className="btn btn-solid btn-sm me-2">
                                    <i className="fas fa-minus"></i>
                                </button>

                                <form>
                                    <input type="number" className="px-3 px-md-3" />
                                </form>

                                <button className="btn btn-solid btn-sm ms-2">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            {/* <!-- Quantity --> */}

                            {/* <!-- Price --> */}
                            <p className="text-center text-md-center">
                            4562185
                            </p>
                            
                            {/* <!-- Price --> */}
                        </div>
                        
                        
                    </div>
                    
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <div>
                            <p className="text-center text-md-center">
                            <strong> Total: $17.99</strong>
                            </p>
                        </div>
                            <button
                                    type="button"
                                    className="btn btn-danger btn-sm mx-3"
                                    data-mdb-toggle="tooltip"
                                    title="Remove item"
                            >
                                <i className="fas fa-trash"></i>
                            </button>
                                
                    </div>
                        
                    
                    
                    {/* <!-- Single item --> */}

                    <hr className="my-4" />
                </div>
            </div>
        </div>
    );
};

export default CheckoutLeft;
