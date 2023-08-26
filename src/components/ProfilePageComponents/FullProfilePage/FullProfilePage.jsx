import React from "react";

const FullProfilePage = () => {
    return (
        <div>
            <section className="dashboard-section section-b-space user-dashboard-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="dashboard-sidebar">
                                <div className="profile-top">
                                    <div className="profile-image">
                                        <img
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="profile-detail">
                                        <h5>Mark Jecno</h5>
                                        <h6>mark.jecno@mail.com</h6>
                                    </div>
                                </div>
                                <div className="faq-tab">
                                    <ul className="nav nav-tabs" id="top-tab" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                data-bs-toggle="tab"
                                                data-bs-target="#info"
                                                className="nav-link active"
                                            >
                                                Account Info
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                data-bs-toggle="tab"
                                                data-bs-target="#address"
                                                className="nav-link"
                                            >
                                                Address Book
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                data-bs-toggle="tab"
                                                data-bs-target="#orders"
                                                className="nav-link"
                                            >
                                                My Orders
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                data-bs-toggle="tab"
                                                data-bs-target="#wishlist"
                                                className="nav-link"
                                            >
                                                My Wishlist
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                data-bs-toggle="tab"
                                                data-bs-target="#payment"
                                                className="nav-link"
                                            >
                                                Saved Cards
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                data-bs-toggle="tab"
                                                data-bs-target="#profile"
                                                className="nav-link"
                                            >
                                                Profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                data-bs-toggle="tab"
                                                data-bs-target="#security"
                                                className="nav-link"
                                            >
                                                Security
                                            </a>{" "}
                                        </li>
                                        <li className="nav-item">
                                            <a href="" className="nav-link">
                                                Log Out
                                            </a>{" "}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="faq-content tab-content" id="top-tabContent">
                                <div className="tab-pane fade show active" id="info">
                                    <div className="counter-section">
                                        <div className="welcome-msg">
                                            <h4>Hello, MARK JECNO !</h4>
                                            <p>
                                                From your My Account Dashboard you have the ability
                                                to view a snapshot of your recent account activity
                                                and update your account information. Select a link
                                                below to view or edit information.
                                            </p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="counter-box">
                                                    <img
                                                        src="https://themes.pixelstrap.com/multikart/assets/images/icon/dashboard/sale.png"
                                                        className="img-fluid"
                                                    />
                                                    <div>
                                                        <h3>25</h3>
                                                        <h5>Total Order</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="counter-box">
                                                    <img
                                                        src="https://themes.pixelstrap.com/multikart/assets/images/icon/dashboard/homework.png"
                                                        className="img-fluid"
                                                    />
                                                    <div>
                                                        <h3>5</h3>
                                                        <h5>Pending Orders</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="counter-box">
                                                    <img
                                                        src="https://themes.pixelstrap.com/multikart/assets/images/icon/dashboard/order.png"
                                                        className="img-fluid"
                                                    />
                                                    <div>
                                                        <h3>50</h3>
                                                        <h5>Wishlist</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-account box-info">
                                            <div className="box-head">
                                                <h4>Account Information</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Contact Information</h3>
                                                            <a href="#">Edit</a>
                                                        </div>
                                                        <div className="box-content">
                                                            <h6>Mark Jecno</h6>
                                                            <h6>mark-jecno@gmail.com</h6>
                                                            <h6>
                                                                <a href="#">Change Password</a>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Newsletters</h3>
                                                            <a href="#">Edit</a>
                                                        </div>
                                                        <div className="box-content">
                                                            <p>
                                                                You are currently not subscribed to
                                                                any newsletter.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box mt-3">
                                                <div className="box-title">
                                                    <h3>Address Book</h3>
                                                    <a href="#">Manage Addresses</a>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h6>Default Billing Address</h6>
                                                        <address>
                                                            You have not set a default billing
                                                            address.
                                                            <br />
                                                            <a href="#">Edit Address</a>
                                                        </address>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h6>Default Shipping Address</h6>
                                                        <address>
                                                            You have not set a default shipping
                                                            address.
                                                            <br />
                                                            <a href="#">Edit Address</a>
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="address">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card mt-0">
                                                <div className="card-body">
                                                    <div className="top-sec">
                                                        <h3>Address Book</h3>
                                                        <a
                                                            href="#"
                                                            className="btn btn-sm btn-solid"
                                                        >
                                                            + add new
                                                        </a>
                                                    </div>
                                                    <div className="address-book-section">
                                                        <div className="row g-4">
                                                            <div className="select-box active col-xl-4 col-md-6">
                                                                <div className="address-box">
                                                                    <div className="top">
                                                                        <h6>
                                                                            mark jecno{" "}
                                                                            <span>home</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="middle">
                                                                        <div className="address">
                                                                            <p>
                                                                                549 Sulphur Springs
                                                                                Road
                                                                            </p>
                                                                            <p>Downers Grove, IL</p>
                                                                            <p>60515</p>
                                                                        </div>
                                                                        <div className="number">
                                                                            <p>
                                                                                mobile:{" "}
                                                                                <span>
                                                                                    +91 123 - 456 -
                                                                                    7890
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            data-bs-target="#edit-address"
                                                                            data-bs-toggle="modal"
                                                                            className="bottom_btn"
                                                                        >
                                                                            edit
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="bottom_btn"
                                                                        >
                                                                            remove
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="select-box col-xl-4 col-md-6">
                                                                <div className="address-box">
                                                                    <div className="top">
                                                                        <h6>
                                                                            mark jecno{" "}
                                                                            <span>office</span>
                                                                        </h6>
                                                                    </div>
                                                                    <div className="middle">
                                                                        <div className="address">
                                                                            <p>
                                                                                549 Sulphur Springs
                                                                                Road
                                                                            </p>
                                                                            <p>Downers Grove, IL</p>
                                                                            <p>60515</p>
                                                                        </div>
                                                                        <div className="number">
                                                                            <p>
                                                                                mobile:{" "}
                                                                                <span>
                                                                                    +91 123 - 456 -
                                                                                    7890
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            data-bs-target="#edit-address"
                                                                            data-bs-toggle="modal"
                                                                            className="bottom_btn"
                                                                        >
                                                                            edit
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="bottom_btn"
                                                                        >
                                                                            remove
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="orders">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card dashboard-table mt-0">
                                                <div className="card-body table-responsive-sm">
                                                    <div className="top-sec">
                                                        <h3>My Orders</h3>
                                                    </div>
                                                    <div className="table-responsive-xl">
                                                        <table className="table cart-table order-table">
                                                            <thead>
                                                                <tr className="table-head">
                                                                    <th scope="col">image</th>
                                                                    <th scope="col">Order Id</th>
                                                                    <th scope="col">
                                                                        Product Details
                                                                    </th>
                                                                    <th scope="col">Status</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">View</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/1.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span className="mt-0">
                                                                            #125021
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="fs-6">
                                                                            Purple polo tshirt
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge rounded-pill bg-success custom-badge">
                                                                            Shipped
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <i className="fa fa-eye text-theme"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/2.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span className="mt-0">
                                                                            #125367
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="fs-6">
                                                                            Sleevless white top
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge rounded-pill bg-danger custom-badge">
                                                                            Pending
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <i className="fa fa-eye text-theme"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/27.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <p>#125948</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="fs-6">
                                                                            multi color polo tshirt
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge rounded-pill bg-success custom-badge">
                                                                            Shipped
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <p className="theme-color fs-6">
                                                                            $49.54
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <i className="fa fa-eye text-theme"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/28.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <p>#127569</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="fs-6">
                                                                            Candy red solid tshirt
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge rounded-pill bg-success custom-badge">
                                                                            Shipped
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <p className="theme-color fs-6">
                                                                            $49.54
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <i className="fa fa-eye text-theme"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/33.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <p>#125753</p>
                                                                    </td>
                                                                    <td>
                                                                        <p className="fs-6">
                                                                            multicolored polo tshirt
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge rounded-pill bg-secondary custom-badge">
                                                                            Canceled
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <p className="theme-color fs-6">
                                                                            $49.54
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <i className="fa fa-eye text-theme"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/34.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span>#125021</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="fs-6">
                                                                            Men's Sweatshirt
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="badge rounded-pill bg-secondary custom-badge">
                                                                            Canceled
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <i className="fa fa-eye text-theme"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="wishlist">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card dashboard-table mt-0">
                                                <div className="card-body table-responsive-sm">
                                                    <div className="top-sec">
                                                        <h3>My Wishlist</h3>
                                                    </div>
                                                    <div className="table-responsive-xl">
                                                        <table className="table cart-table wishlist-table">
                                                            <thead>
                                                                <tr className="table-head">
                                                                    <th scope="col">image</th>
                                                                    <th scope="col">Order Id</th>
                                                                    <th scope="col">
                                                                        Product Details
                                                                    </th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/1.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span className="mt-0">
                                                                            #125021
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span>
                                                                            Purple polo tshirt
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            className="btn btn-xs btn-solid"
                                                                        >
                                                                            Move to Cart
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/2.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span className="mt-0">
                                                                            #125367
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span>
                                                                            Sleevless white top
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            className="btn btn-xs btn-solid"
                                                                        >
                                                                            Move to Cart
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/27.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span>#125948</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>
                                                                            multi color polo tshirt
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            className="btn btn-xs btn-solid"
                                                                        >
                                                                            Move to Cart
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/28.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span>#127569</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>
                                                                            Candy red solid tshirt
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            className="btn btn-xs btn-solid"
                                                                        >
                                                                            Move to Cart
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/33.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span>#125753</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>
                                                                            multicolored polo tshirt
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            className="btn btn-xs btn-solid"
                                                                        >
                                                                            Move to Cart
                                                                        </a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0)">
                                                                            <img
                                                                                src="../assets/images/pro3/34.jpg"
                                                                                className="blur-up lazyloaded"
                                                                                alt=""
                                                                            />
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <span>#125021</span>
                                                                    </td>
                                                                    <td>
                                                                        <span>
                                                                            Men's Sweatshirt
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="theme-color fs-6">
                                                                            $49.54
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            className="btn btn-xs btn-solid"
                                                                        >
                                                                            Move to Cart
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="payment">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card mt-0">
                                                <div className="card-body">
                                                    <div className="top-sec">
                                                        <h3>Saved Cards</h3>
                                                        <a
                                                            href="#"
                                                            className="btn btn-sm btn-solid"
                                                        >
                                                            + add new
                                                        </a>
                                                    </div>
                                                    <div className="address-book-section">
                                                        <div className="row g-4">
                                                            <div className="select-box active col-xl-4 col-md-6">
                                                                <div className="address-box">
                                                                    <div className="bank-logo">
                                                                        <img
                                                                            src="../assets/images/bank-logo.png"
                                                                            className="bank-logo"
                                                                        />
                                                                        <img
                                                                            src="../assets/images/visa.png"
                                                                            className="network-logo"
                                                                        />
                                                                    </div>
                                                                    <div className="card-number">
                                                                        <h6>Card Number</h6>
                                                                        <h5>6262 6126 2112 1515</h5>
                                                                    </div>
                                                                    <div className="name-validity">
                                                                        <div className="left">
                                                                            <h6>name on card</h6>
                                                                            <h5>Mark Jecno</h5>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>validity</h6>
                                                                            <h5>XX/XX</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            data-bs-target="#edit-address"
                                                                            data-bs-toggle="modal"
                                                                            className="bottom_btn"
                                                                        >
                                                                            edit
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="bottom_btn"
                                                                        >
                                                                            remove
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="select-box col-xl-4 col-md-6">
                                                                <div className="address-box">
                                                                    <div className="bank-logo">
                                                                        <img
                                                                            src="../assets/images/bank-logo1.png"
                                                                            className="bank-logo"
                                                                        />
                                                                        <img
                                                                            src="../assets/images/visa.png"
                                                                            className="network-logo"
                                                                        />
                                                                    </div>
                                                                    <div className="card-number">
                                                                        <h6>Card Number</h6>
                                                                        <h5>6262 6126 2112 1515</h5>
                                                                    </div>
                                                                    <div className="name-validity">
                                                                        <div className="left">
                                                                            <h6>name on card</h6>
                                                                            <h5>Mark Jecno</h5>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>validity</h6>
                                                                            <h5>XX/XX</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <a
                                                                            href="javascript:void(0)"
                                                                            data-bs-target="#edit-address"
                                                                            data-bs-toggle="modal"
                                                                            className="bottom_btn"
                                                                        >
                                                                            edit
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="bottom_btn"
                                                                        >
                                                                            remove
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card mt-0">
                                                <div className="card-body">
                                                    <div className="dashboard-box">
                                                        <div className="dashboard-title">
                                                            <h4>profile</h4>
                                                            <a className="edit-link" href="#">
                                                                edit
                                                            </a>
                                                        </div>
                                                        <div className="dashboard-detail">
                                                            <ul>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>company name</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>Fashion Store</h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>email address</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>
                                                                                mark.jecno@gmail.com
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>
                                                                                Country / Region
                                                                            </h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>
                                                                                Downers Grove, IL
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>
                                                                                Year Established
                                                                            </h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>2018</h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>Total Employees</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>
                                                                                101 - 200 People
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>category</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>clothing</h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>street address</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>
                                                                                549 Sulphur Springs
                                                                                Road
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>city/state</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>
                                                                                Downers Grove, IL
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>zip</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>60515</h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="dashboard-title mt-lg-5 mt-3">
                                                            <h4>login details</h4>
                                                            <a className="edit-link" href="#">
                                                                edit
                                                            </a>
                                                        </div>
                                                        <div className="dashboard-detail">
                                                            <ul>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>Email Address</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>
                                                                                mark.jecno@gmail.com{" "}
                                                                                <a
                                                                                    className="edit-link"
                                                                                    href="#"
                                                                                >
                                                                                    edit
                                                                                </a>
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>Phone No.</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>
                                                                                +01 4485 5454
                                                                                <a
                                                                                    className="edit-link"
                                                                                    href="#"
                                                                                >
                                                                                    Edit
                                                                                </a>
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="details">
                                                                        <div className="left">
                                                                            <h6>Password</h6>
                                                                        </div>
                                                                        <div className="right">
                                                                            <h6>
                                                                                *******{" "}
                                                                                <a
                                                                                    className="edit-link"
                                                                                    href="#"
                                                                                >
                                                                                    Edit
                                                                                </a>
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="security">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card mt-0">
                                                <div className="card-body">
                                                    <div className="dashboard-box">
                                                        <div className="dashboard-title">
                                                            <h4>settings</h4>
                                                        </div>
                                                        <div className="dashboard-detail">
                                                            <div className="account-setting">
                                                                <h5>Notifications</h5>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios"
                                                                                id="exampleRadios1"
                                                                                value="option1"
                                                                                checked
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios1"
                                                                            >
                                                                                Allow Desktop
                                                                                Notifications
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios"
                                                                                id="exampleRadios2"
                                                                                value="option2"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios2"
                                                                            >
                                                                                Enable Notifications
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios"
                                                                                id="exampleRadios3"
                                                                                value="option3"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios3"
                                                                            >
                                                                                Get notification for
                                                                                my own activity
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios"
                                                                                id="exampleRadios4"
                                                                                value="option4"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios4"
                                                                            >
                                                                                DND
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="account-setting">
                                                                <h5>deactivate account</h5>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios1"
                                                                                id="exampleRadios4"
                                                                                value="option4"
                                                                                checked
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios4"
                                                                            >
                                                                                I have a privacy
                                                                                concern
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios1"
                                                                                id="exampleRadios5"
                                                                                value="option5"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios5"
                                                                            >
                                                                                This is temporary
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios1"
                                                                                id="exampleRadios6"
                                                                                value="option6"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios6"
                                                                            >
                                                                                other
                                                                            </label>
                                                                        </div>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-solid btn-xs"
                                                                        >
                                                                            Deactivate Account
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="account-setting">
                                                                <h5>Delete account</h5>
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios3"
                                                                                id="exampleRadios7"
                                                                                value="option7"
                                                                                checked
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios7"
                                                                            >
                                                                                No longer usable
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios3"
                                                                                id="exampleRadios8"
                                                                                value="option8"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios8"
                                                                            >
                                                                                Want to switch on
                                                                                other account
                                                                            </label>
                                                                        </div>
                                                                        <div className="form-check">
                                                                            <input
                                                                                className="radio_animated form-check-input"
                                                                                type="radio"
                                                                                name="exampleRadios3"
                                                                                id="exampleRadios9"
                                                                                value="option9"
                                                                            />
                                                                            <label
                                                                                className="form-check-label"
                                                                                for="exampleRadios9"
                                                                            >
                                                                                other
                                                                            </label>
                                                                        </div>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-solid btn-xs"
                                                                        >
                                                                            Delete Account
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FullProfilePage;
