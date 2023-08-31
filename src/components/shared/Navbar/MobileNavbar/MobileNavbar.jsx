import { fb_page_id, secondary_color } from "@/helpers/settings";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const MobileNavbar = () => {
    return (
        <div className="icon-nav">
            
                
                <ul className="d-flex flex-row justify-content-around align-items-center" >
                    <li className="onhover-div mobile-wishlist">
                        <Link href={"/products"}>
                            <i
                                className="fa-solid fa-magnifying-glass text-black"
                                // onclick="openSearch()"
                            ></i>
                        </Link>
                    </li>
                    <li className="onhover-div mobile-cart">
                        <Link href={"/cart"}>
                            <i className="fa-solid fa-cart-flatbed text-black"></i>
                        </Link>
                        <span className="cart_qty_cls" style={{backgroundColor:secondary_color}}>2</span>
                    </li>
                    <li className="onhover-div mobile-home">
                        <Link href={"/"}>
                            <i className="fa-solid fa-home text-black"></i>
                        </Link>
                    </li>
                    <li className="onhover-div mobile-setting">
                        <Link href={"/profile"}>
                            <i className="fa-solid fa-user text-black"></i>
                        </Link>
                    </li>
                    <li className="onhover-div mobile-messenger">
                        <a href={`https://m.me/${fb_page_id}`}>
                        <i class="fa-brands fa-facebook-messenger text-black"></i>
                        </a>
                    </li>
                </ul>
            
        </div>
    );
};

export default MobileNavbar;
