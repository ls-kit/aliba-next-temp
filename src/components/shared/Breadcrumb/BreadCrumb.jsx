import React from "react";

const BreadCrumb = () => {
    return (
        <div className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="page-title">
                            <h2>Products</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <nav aria-label="breadcrumb" className="theme-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    products
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;
