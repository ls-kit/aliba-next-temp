import React from "react";

const CheckoutLeft = () => {
    return (
        <div className="col-lg-8 col-12">
            <div className="card mb-4">
                <div className="card-header py-3">
                    <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <div className="card-body">
                    {/* <!-- Single item --> */}
                    <div className="row justify-content-center align-items-center">
                        <div className=" col-6 col-md-4 mb-4 mb-lg-0">
                            {/* <!-- Image --> */}
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                                className="w-100"
                                alt="Blue Jeans Jacket"
                            />

                            {/* <!-- Image --> */}
                        </div>

                        <div className=" col-6 col-md-4 mb-4 mb-lg-0">
                            {/* <!-- Data --> */}
                            <p>
                                <strong>Blue denim shirt with long sleeve very attractive</strong>
                            </p>
                            <p>Color: blue</p>
                            <p>Size: M</p>

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
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm mb-2"
                                    data-mdb-toggle="tooltip"
                                    title="Move to the wish list"
                                >
                                    <i className="fas fa-heart"></i>
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
