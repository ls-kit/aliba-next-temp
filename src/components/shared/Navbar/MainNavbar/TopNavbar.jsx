import React from "react";

const TopNavbar = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header-contact">
                            <ul>
                                <li>Welcome to Our store Multikart</li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123 -
                                    456 - 7890
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 text-end">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist">
                                    <i className="fa-regular fa-heart" aria-hidden="true"></i>
                                </li>
                                <li className="onhover-dropdown mobile-account">
                                    {" "}
                                    <i className="fa-regular fa-user" aria-hidden="true"></i>
                                    My Account
                                    <ul className="onhover-show-div">
                                        <li>
                                            <a href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a href="register.html">register</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;
