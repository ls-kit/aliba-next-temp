import React from "react";

const MobileNavbar = () => {
    return (
        <div>
            <div className="icon-nav">
                <ul className="d-flex flex-row justify-content-around align-items-center">
                    <li className="onhover-div mobile-search">
                        <i
                            className="fa-solid fa-magnifying-glass"
                            // onclick="openSearch()"
                        ></i>
                    </li>
                    <li className="onhover-div mobile-cart">
                        <i className="fa-solid fa-cart-flatbed"></i>
                        <span className="cart_qty_cls">2</span>
                    </li>
                    <li className="onhover-div mobile-home">
                        <i className="fa-solid fa-home"></i>
                    </li>
                    <li className="onhover-div mobile-setting">
                        <i className="fa-solid fa-user"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileNavbar;
