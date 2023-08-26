import React from "react";

const page = () => {
    return (
        <section className="theme-invoice-3 section-b-space">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 m-auto">
                        <div className="invoice-wrapper">
                            <div className="invoice-header">
                                <ul>
                                    <li>
                                        <img
                                            src="https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png"
                                            className="img-fluid"
                                            alt="logo"
                                        />
                                    </li>
                                    {/* <li>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <h4>multikart demo store</h4>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <h4>support@multikart.com</h4>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="invoice-body">
                                <div className="top-sec">
                                    <div className="row">
                                        <div className="col-lg-8 col-sm-6">
                                            <div className="address-detail">
                                                <h2>invoice</h2>
                                                <div className="mt-3">
                                                    <h4 className="mb-2">
                                                        2664 Tail Ends Road, ORADELL
                                                    </h4>
                                                    <h4 className="mb-0">New Jersey, 07649</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 mt-md-0 mt-2">
                                            <ul className="date-detail">
                                                <li>
                                                    <span>issue date :</span>
                                                    <h4> 20 march, 2020</h4>
                                                </li>
                                                <li>
                                                    <span>invoice no :</span>
                                                    <h4> 908452</h4>
                                                </li>
                                                <li>
                                                    <span>email :</span>
                                                    <h4> user@gmail.com</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive-md">
                                    <table className="table table-borderless mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-danger">
                                                    #
                                                </th>
                                                <th scope="col" className="text-danger">
                                                    description
                                                </th>
                                                <th scope="col" className="text-danger">
                                                    price
                                                </th>
                                                <th scope="col" className="text-danger">
                                                    quantity
                                                </th>
                                                <th scope="col" className="text-danger">
                                                    total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Logo Designing</td>
                                                <td>$50</td>
                                                <td>2</td>
                                                <td>$100</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colspan="2"></td>
                                                <td className="font-bold text-dark" colspan="2">
                                                    GRAND TOTAL
                                                </td>
                                                <td className="font-bold text-theme">$325.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="invoice-footer pt-0">
                                <div className="row">
                                    <div className="col-6"></div>
                                    <div className="col-6 text-end">
                                        <a
                                            href="#"
                                            className="btn btn-solid rounded-2"
                                            onclick="window.print();"
                                        >
                                            print
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
